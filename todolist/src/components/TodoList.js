import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import { styles } from '../styles/styles';
import TaskItem from './TaskItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// Composant TodoList
const TodoList = () => {
    // Etats locaux
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [editingTaskIndex, setEditingTaskIndex] = useState(null);

    // Fonction pour ajouter une nouvelle tâche à la liste
    const handleAddTask = () => {
        if (task.trim() === '') return;

        const newTask = { text: task, date: selectedDate || null };
        setTasks([...tasks, newTask]);
        setTask('');
    };

    // Fonction pour supprimer une tâche de la liste
    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    // Fonction pour mettre à jour une tâche dans la liste
    const handleUpdateTask = (index, newText, newDate) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = newText;
        updatedTasks[index].date = newDate;
        setTasks(updatedTasks);
        setEditingTaskIndex(null);
    };

    // Fonction pour afficher le sélecteur de date
    const handleShowDatePicker = () => {
        setDatePickerVisibility(true);
    };

    // Fonction pour confirmer la sélection de date
    const handleConfirm = (date) => {
        setDatePickerVisibility(false);
        setSelectedDate(date);
        if (editingTaskIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editingTaskIndex].date = date;
            setTasks(updatedTasks);
        }
    };

    // Fonction pour annuler la sélection de date
    const handleCancel = () => {
        setDatePickerVisibility(false);
    };

    // Rendu du composant TodoList
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                value={task}
                onChangeText={setTask}
            />
            <TouchableOpacity onPress={handleShowDatePicker} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.dateIcon}>
                    <Icon name="calendar" size={30} color="black" />
                </View>
                <Text style={styles.selectedDate}>{selectedDate ? selectedDate.toDateString() : ''}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                <Text >Add Task</Text>
            </TouchableOpacity>
            <FlatList
                data={tasks}
                renderItem={({ item, index }) => (
                    <TaskItem
                        item={item}
                        index={index}
                        onDeleteTask={handleDeleteTask}
                        onUpdateTask={handleUpdateTask}
                        isEditingDate={editingTaskIndex === index}
                        onShowDatePicker={handleShowDatePicker}
                        editedDate={selectedDate}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default TodoList;
