import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import TaskItem from '../components/TaskItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AgendaScreen = ({ route }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (route && route.params && route.params.tasks) {
        setTasks(route.params.tasks);
    }
}, [route.params]);

const handleDayPress = (day) => {
    setSelectedDay(day.dateString);
};

 const tasksForSelectedDay = tasks.filter(task => task.date.toDateString() === selectedDay);


  const calendarTheme = {
      selectedDayBackgroundColor: '#e73623',
      selectedDayTextColor: 'white',
      todayTextColor: '#e73623',
      arrowColor: '#e73623',
  };

  return (
      <View style={styles.container}>
          <Calendar
              style={[styles.calendar, { width: windowWidth, height: windowHeight * 0.3 }]}
              onDayPress={handleDayPress}
              markedDates={{
                  [selectedDay]: { selected: true, marked: true }
              }}
              theme={calendarTheme}
          />
          <View style={styles.tasksContainer}>
              <Text style={styles.tasksHeader}>Tâches pour le {selectedDay} :</Text>
              {/* Affichage des tâches pour la date sélectionnée */}
              {tasksForSelectedDay.map((task, index) => (
                  <TaskItem key={index} item={task} />
              ))}
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  calendar: {
    width: '100%',
  },
  tasksContainer: {
    marginTop: 20,
    paddingHorizontal: 20, 
  },
  tasksHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 50,
  },
});

export default AgendaScreen;
