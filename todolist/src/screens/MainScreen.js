// MainScreen.js
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { mainScreenStyles } from '../styles/mainScreenStyles';
import TodoList from '../components/AddTask';
import TaskListByDate from '../utils/dateUtils';
import AgendaScreen from './AgendaScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedTab, setSelectedTab] = useState('Accueil');
    const navigation = useNavigation();

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

    const handleTabPress = (tabName) => {
        setSelectedTab(tabName);
        if (tabName === 'Agenda') {
            navigation.navigate('Agenda'); // Naviguer vers la page de l'agenda
        }
        // Vous pouvez ajouter d'autres actions spécifiques pour chaque onglet ici
    };

    return (
                    <View style={mainScreenStyles.fullScreen}>
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

                            <TouchableOpacity style={mainScreenStyles.buttonContainer} onPress={handleButtonPress}>
                                <Text style={mainScreenStyles.buttonText}>+</Text>
                            </TouchableOpacity>

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
                    </View>
                
    );
};

export default MainScreen;
