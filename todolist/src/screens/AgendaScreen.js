import { Calendar } from 'react-native-calendars';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TaskListByDate from '../utils/dateUtils';
import { useTaskContext } from '../utils/TaskContext'; 
import { handleUpdateTask, handleDeleteTask } from '../utils/TaskUtils';

const AgendaScreen = () => {
  const { tasks, setTasks } = useTaskContext();
  const [selectedDay, setSelectedDay] = React.useState(new Date());
  
  const onDeleteTask = (index) => {
    handleDeleteTask(index, tasks, setTasks);
  };

  const onUpdateTask = (index, newText, newDate) => {
    handleUpdateTask(index, newText, newDate, tasks, setTasks);
  };

  const handleDayPress = (day) => {
    const selectedDate = new Date(day.dateString);
    setSelectedDay(selectedDate);
  };

  const calendarTheme = {
    selectedDayBackgroundColor: '#5396ac',
    selectedDayTextColor: 'white',
    todayTextColor: '#5396ac',
    arrowColor: '#5396ac',
  };

  return (
    <View style={styles.container}>
         <ScrollView style={styles.scrollView}>
      <Calendar
        style={styles.calendar}
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDay]: { selected: true, marked: true }
        }}
        theme={calendarTheme}
      />

      <Text style={styles.dateText}>Tâches pour le {selectedDay.toLocaleDateString()}</Text>
        <TaskListByDate date={selectedDay} tasks={tasks} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  calendar: {
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 30,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1, 
    width: '100%',
  },
});

export default AgendaScreen;
