import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { mainScreenStyles } from '../styles/mainScreenStyles';

export const handleUpdateTask = (index, newText, newDate, tasks, setTasks) => {
    if (setTasks && typeof setTasks === 'function') {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = newText;
        updatedTasks[index].date = newDate;
        setTasks(updatedTasks);
    } else {
        console.error("setTasks is not defined or not a function");
    }
};

export const handleDeleteTask = (index, tasks, setTasks) => {
    if (setTasks && typeof setTasks === 'function') {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    } else {
        console.error("setTasks is not defined or not a function");
    }
};

const CustomButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={mainScreenStyles.buttonContainer} onPress={onPress}>
            <Text style={mainScreenStyles.buttonText}>+</Text>
        </TouchableOpacity>
        
    );
};

export default CustomButton;


