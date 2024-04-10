import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { addTaskStyles } from '../styles/addTaskStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TodoList = ({ tasks, onAddTask }) => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedColor, setSelectedColor] = useState('#e73623');

    const colors = ['#e73623', '#1f85e5', '#57c75e', '#f6b93b']; 

    const handleAddTask = () => {
        if (task.trim() === '') return;
        onAddTask({ text: task, description: description, color: selectedColor }, selectedDate);
        setTask('');
        setDescription('');
    };

    const handleShowDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const handleConfirm = (date) => {
        setDatePickerVisibility(false);
        setSelectedDate(date);
    };

    const handleCancel = () => {
        setDatePickerVisibility(false);
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    return (
        <View style={addTaskStyles.containerAddTask}>
            <TextInput
                style={addTaskStyles.input}
                placeholder="Titre de tâche"
                value={task}
                onChangeText={setTask}
                placeholderTextColor="black"
            />
            <TextInput
                style={addTaskStyles.input}
                placeholder="Description..."
                value={description}
                onChangeText={setDescription}
                placeholderTextColor="black"
            />
            <TouchableOpacity onPress={handleShowDatePicker} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={addTaskStyles.dateIcon}>
                    <Icon name="calendar" size={30} color="black" />
                </View>
                <Text style={addTaskStyles.calendarText}>{selectedDate ? selectedDate.toDateString() : 'Choisissez une date'}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                textColor="black"
                customConfirmButton={<Text style={{ color: 'blue' }}>Confirmer</Text>}
                customCancelButton={<Text style={{ color: 'red' }}>Annuler</Text>}
            />

            <View style={addTaskStyles.colorOptions}>
                {colors.map((color, index) => (
                    <TouchableOpacity key={index} style={[addTaskStyles.colorOption, { backgroundColor: color, borderColor: selectedColor === color ? 'black' : 'transparent' }]} onPress={() => handleColorSelect(color)} />
                ))}
            </View>

            <TouchableOpacity style={addTaskStyles.addButton} onPress={handleAddTask}>
                <Text style={addTaskStyles.addButtonText}>Ajouter tâche</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TodoList;
