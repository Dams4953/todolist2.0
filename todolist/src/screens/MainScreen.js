import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView , Modal, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import { mainScreenStyles } from '../styles/mainScreenStyles';
import TodoList from '../components/AddTask';
import TaskListByDate from '../utils/dateUtils';
import { useTaskContext } from '../utils/TaskContext';

const MainScreen = () => {
    const { tasks, setTasks, selectedDate } = useTaskContext();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [task, setTask] = useState('');
    const [selectedDay, setSelectedDay] = useState('');

    const getDateLabel = (date) => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Aujourd\'hui';
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return 'Demain';
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Hier';
        } else {
            const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
            const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];

            const dayOfWeek = daysOfWeek[date.getDay()];
            const month = months[date.getMonth()];
            const dayOfMonth = date.getDate();
            const year = date.getFullYear();

            return `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
        }
    };

    const handleButtonPress = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const handleAddTask = (newTask, selectedDate) => {
        const taskWithDate = { ...newTask, date: selectedDate };
        setTasks([...tasks, taskWithDate]);
        setIsModalVisible(false);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleUpdateTask = (index, newText, newDate) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = newText;
        updatedTasks[index].date = newDate;
        setTasks(updatedTasks);
    };

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

    return (
        <View style={mainScreenStyles.fullScreen}>
            <TouchableOpacity style={mainScreenStyles.buttonContainer} onPress={handleButtonPress}>
                <Text style={mainScreenStyles.buttonText}>+</Text>
            </TouchableOpacity>
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

                    <Modal
                        visible={isModalVisible}
                        animationType="fade"
                        transparent={true}
                        onRequestClose={handleCloseModal}
                    >
                        <TouchableWithoutFeedback onPress={handleCloseModal}>
                            <View style={mainScreenStyles.modalContainer}>
                                <KeyboardAvoidingView
                                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                    style={mainScreenStyles.modalContent}
                                >
                                    <Text>{selectedDay}</Text>
                                    <TodoList
                                        tasks={tasks}
                                        onAddTask={handleAddTask}
                                        onDeleteTask={handleDeleteTask}
                                        onUpdateTask={handleUpdateTask}
                                    />
                                </KeyboardAvoidingView>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>

                    <TaskListByDate date={currentDate} tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
                </View>
            </ScrollView>
        </View>
    );
};

export default MainScreen;
