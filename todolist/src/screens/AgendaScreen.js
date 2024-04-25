import { Calendar } from 'react-native-calendars';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TaskListByDate } from '../utils/dateUtils';
import { handleUpdateTask, handleDeleteTask } from '../utils/TaskUtils';

const AgendaScreen = ({ tasks, setTasks }) => {
  const [selectedDay, setSelectedDay] = useState(new Date());

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

  const markDatesWithTasks = () => {
    const markedDates = {};
    tasks.forEach(task => {
      const taskDate = new Date(task.date);
      const taskDateString = taskDate.toISOString().split('T')[0];
      markedDates[taskDateString] = { marked: true };
    });
    return markedDates;
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
            ...markDatesWithTasks(), 
            [selectedDay]: { selected: true, marked: true }
          }}
          theme={calendarTheme}
        />

        <Text style={styles.dateText}>Tâches pour le {selectedDay.toLocaleDateString()}</Text>

        <TaskListByDate
          date={selectedDay}
          tasks={tasks}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask} />

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
    paddingTop: 60,
  },
  dateText: {
    fontSize: 15,
    marginBottom: 30,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
});

export default AgendaScreen;
