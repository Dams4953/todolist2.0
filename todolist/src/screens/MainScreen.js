import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { mainScreenStyles } from '../styles/mainScreenStyles';
import { handleUpdateTask, handleDeleteTask } from '../utils/TaskUtils';
import { getDateLabel, TaskListByDate } from '../utils/dateUtils';

const MainScreen = ({ tasks, setTasks }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const goToNextDay = () => {
        const nextDay = new Date(currentDate);
        nextDay.setDate(nextDay.getDate() + 1);
        setCurrentDate(nextDay);
    };

    const goToPreviousDay = () => {
        const previousDay = new Date(currentDate);
        previousDay.setDate(previousDay.getDate() - 1);
        setCurrentDate(previousDay);
    };

    const onDeleteTask = (index) => {
        handleDeleteTask(index, tasks, setTasks);
      };
    
      const onUpdateTask = (index, newText, newDate) => {
        handleUpdateTask(index, newText, newDate, tasks, setTasks);
      };

    return (
        <View style={mainScreenStyles.fullScreen}>
            <ScrollView>
                <View style={mainScreenStyles.contentContainer}>
                    <View style={mainScreenStyles.dateNavigationContainer}>
                        <TouchableOpacity onPress={goToPreviousDay}>
                            <Text style={mainScreenStyles.navigationButtonText}>{"<"}</Text>
                        </TouchableOpacity>
                        <Text style={mainScreenStyles.dateText}>{getDateLabel(currentDate)}</Text>
                        <TouchableOpacity onPress={goToNextDay}>
                            <Text style={mainScreenStyles.navigationButtonText}>{">"}</Text>
                        </TouchableOpacity>
                    </View>
                    <TaskListByDate
                        date={currentDate}
                        tasks={tasks}
                        onDeleteTask={onDeleteTask}
                        onUpdateTask={onUpdateTask}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default MainScreen;
