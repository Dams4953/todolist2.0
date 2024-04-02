import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const TodoListApp = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editingTaskIndex, setEditingTaskIndex] = useState(null);
    const [editedTask, setEditedTask] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleAddTask = () => {
        if (task.trim() === '') return;

        const newTask = { text: task, date: selectedDate };
        setTasks([...tasks, newTask]);
        setTask('');
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleEditTask = (index, currentTask) => {
        setEditingTaskIndex(index);
        setEditedTask(currentTask.text);
    };

    const handleSaveEditedTask = () => {
        const updatedTasks = [...tasks];
        updatedTasks[editingTaskIndex].text = editedTask;
        setTasks(updatedTasks);
        setEditingTaskIndex(null);
        setEditedTask('');
    };
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setSelectedDate(date);
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.taskItem}>
            {editingTaskIndex === index ? (
                <TextInput
                    style={[styles.input, styles.inputEditing]}
                    value={editedTask}
                    onChangeText={setEditedTask}
                    onBlur={handleSaveEditedTask}
                    onSubmitEditing={handleSaveEditedTask}
                />
            ) : (
                <TouchableOpacity
                    style={styles.taskTextContainer}
                    onPress={() => handleEditTask(index, item)}
                >
                    <Text style={[styles.taskText, { fontWeight: 'bold' }]}>{item.text}</Text>
                    <Text style={styles.taskDate}>{item.date ? new Date(item.date).toDateString() : ''}</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.delete} onPress={() => handleDeleteTask(index)}>
                <Icon name="trash-o" size={20} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.edit} onPress={() => handleEditTask(index, item)}>
                <Icon name="pencil" size={20} color={editingTaskIndex === index ? "blue" : "gray"} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ajouter une nouvelle tâche..."
                value={task}
                onChangeText={setTask}
            />
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity onPress={showDatePicker} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.dateIcon}>
                        <Icon name="calendar" size={30} color="black" />
                    </View>
                    <Text style={styles.selectedDate}>{selectedDate ? selectedDate.toDateString() : ''}</Text>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                <Text >Ajouter une tâche</Text>
            </TouchableOpacity>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default TodoListApp;
