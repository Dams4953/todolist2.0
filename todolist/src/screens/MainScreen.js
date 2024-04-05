import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { mainScreenStyles } from '../styles/mainScreenStyles';
import TodoList from '../components/AddTask';
import TaskItem from '../components/TaskItem';

const MainScreen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleButtonPress = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
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

    return (
        <View style={mainScreenStyles.fullScreen}>
            <TouchableOpacity style={mainScreenStyles.buttonContainer} onPress={handleButtonPress}>
                <Text style={mainScreenStyles.buttonText}>+</Text>
            </TouchableOpacity>

            <Modal
                visible={isModalVisible}
                animationType="slide"
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

            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    item={task}
                    index={index}
                    onDeleteTask={handleDeleteTask}
                    onUpdateTask={handleUpdateTask}
                    
                />
            ))}
        </View>
    );
};

export default MainScreen;
