import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/styles';

// Composant TaskItem
const TaskItem = ({ item, index, onDeleteTask, onUpdateTask, isEditingDate, onShowDatePicker }) => {
    // Etats locaux
    const [editedTask, setEditedTask] = useState(item.text);
    const [editedDate, setEditedDate] = useState(item.date);
    const [isEditing, setIsEditing] = useState(false);

    // Fonction pour activer le mode édition de la tâche
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Fonction pour activer le mode édition de la date
    const handleEditDate = () => {
        setIsEditing(true);
        onShowDatePicker();
    };

    // Fonction pour enregistrer les modifications de la tâche
    const handleSave = () => {
        setIsEditing(false);
        onUpdateTask(index, editedTask, editedDate);
    };

    // Fonction pour annuler les modifications de la tâche
    const handleCancel = () => {
        setIsEditing(false);
        setEditedTask(item.text);
        setEditedDate(item.date);
    };

    // Fonction pour rendre la vue de la tâche
    const renderTask = () => {
        return (
            <View style={styles.taskItem}>
                <TouchableOpacity style={styles.edit} onPress={handleEdit}>
                    <Icon name="pencil" size={20} color="gray" />
                </TouchableOpacity>
                {isEditingDate && (
                    <TouchableOpacity onPress={handleEditDate}>
                        <Icon name="calendar" size={20} color="blue" />
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    style={styles.taskTextContainer}
                    onPress={handleEdit}
                >
                    <Text style={[styles.taskText, { fontWeight: 'bold' }]}>{item.text}</Text>
                    <Text style={styles.taskDate}>{item.date ? new Date(item.date).toDateString() : ''}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.delete} onPress={() => onDeleteTask(index)}>
                    <Icon name="trash-o" size={20} color="red" />
                </TouchableOpacity>
            </View>
        );
    };

    // Fonction pour rendre la vue d'édition de la tâche
    const renderEdit = () => {
    return (
        <View style={styles.taskItem}>
            <TextInput
                style={[styles.input, styles.inputEditing]}
                value={editedTask}
                onChangeText={setEditedTask}
            />
            <TouchableOpacity onPress={handleSave}>
                <Icon name="check" size={20} color="green" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel}>
                <Icon name="times" size={20} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEditDate}>
                <Icon name="calendar" size={20} color="blue" />
            </TouchableOpacity>
            <Text style={styles.taskDate}>{editedDate ? new Date(editedDate).toDateString() : ''}</Text>
        </View>
    );
};

// Rendu conditionnel en fonction du mode d'édition
return isEditing ? renderEdit() : renderTask();
};

export default TaskItem;
