// TaskItem.js

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Animated, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { taskItemStyles } from '../styles/taskItemStyles';
import { Checkbox } from 'expo-checkbox';

const TaskItem = ({ item, index, onUpdateTask, onDeleteTask, isEditingDate, onShowDatePicker, selectedColor }) => {
    // États locaux
    const [editedTask, setEditedTask] = useState(item.text);
    const [editedDescription, setEditedDescription] = useState(item.description);
    const [editedDate, setEditedDate] = useState(item.date);
    const [isEditing, setIsEditing] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [showCheckAnimation, setShowCheckAnimation] = useState(false);
    const [isTaskVisible, setIsTaskVisible] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDescriptionModalVisible, setIsDescriptionModalVisible] = useState(false);
    const opacity = new Animated.Value(1);

    // Constantes
    const MAX_DESCRIPTION_LENGTH = 20;

    // Effets
    useEffect(() => {
        if (!isTaskVisible) {
            // Animation de disparition
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start(() => {
                onDeleteTask(index);
            });
        }
    }, [isTaskVisible]);

    // Fonction pour basculer la visibilité du modal d'édition
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    // Fonction pour activer le mode édition
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Fonction pour activer le mode édition de la date
    const handleEditDate = () => {
        setIsEditing(true);
        onShowDatePicker();
    };

    // Fonction pour sauvegarder les modifications
    const handleSave = () => {
        setIsEditing(false);
        setIsModalVisible(false);
        onUpdateTask(index, editedTask, editedDate);
    };

    // Fonction pour annuler les modifications
    const handleCancel = () => {
        setIsEditing(false);
        setIsModalVisible(false);
        setEditedTask(item.text);
        setEditedDate(item.date);
    };

    // Fonction pour changer l'état de la case à cocher
    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
        setShowCheckAnimation(true);
        if (!isChecked) {
            setIsTaskVisible(false);
        }
    };

    // Fonction pour gérer le clic sur la tâche
    const handleTaskPress = () => {
        toggleDescriptionModal();
    };

    // Fonction pour gérer le clic sur le conteneur de tâche
    const handleContainerPress = (event) => {
        event.stopPropagation();
    };

    // Fonction pour afficher l'animation de la coche
    const renderCheckAnimation = () => {
        return (
            <Animated.View style={{ opacity: showCheckAnimation ? 1 : 0, position: 'absolute', right: 10 }}></Animated.View>
        );
    };

    // Fonction pour basculer la visibilité du modal de description
    const toggleDescriptionModal = () => {
        setIsDescriptionModalVisible(!isDescriptionModalVisible);
    };

    // Fonction pour afficher la description de la tâche
    const renderDescription = () => {
        if (editedDescription.length > MAX_DESCRIPTION_LENGTH) {
            return (
                <TouchableOpacity onPress={toggleDescriptionModal}>
                    <Text style={taskItemStyles.taskDescription}>
                        {editedDescription.substring(0, MAX_DESCRIPTION_LENGTH)}...
                    </Text>
                </TouchableOpacity>
            );
        } else {
            return <Text style={taskItemStyles.taskDescription}>{editedDescription}</Text>;
        }
    };

    // Fonction pour rendre la tâche
    const renderTask = () => {
        return (
            <Animated.View style={[taskItemStyles.taskItem, { opacity: opacity }]}>
                {/* Bouton d'édition */}
                <TouchableOpacity style={taskItemStyles.edit} onPress={toggleModal}>
                    <Icon name="pencil" size={20} color="#5396ac" />
                </TouchableOpacity>
                {/* Bouton de calendrier */}
                {isEditingDate && (
                    <TouchableOpacity onPress={handleEditDate}>
                        <Icon name="calendar" size={20} color="blue" />
                    </TouchableOpacity>
                )}
                {/* Case à cocher et contenu de la tâche */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox
                        style={taskItemStyles.Checkbox}
                        value={isChecked}
                        onValueChange={handleCheckBoxChange}
                    />
                    {/* Cercle de couleur */}
                    <TouchableOpacity onPress={handleTaskPress}>
                        <View style={[taskItemStyles.colorCircle, { backgroundColor: selectedColor }]}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleTaskPress}>
                        <View style={taskItemStyles.containerTaskItem} onTouchStart={handleContainerPress}>
                            <Text style={[taskItemStyles.taskText, { fontWeight: 'bold' }]}>{item.text}</Text>
                            <Text style={taskItemStyles.taskDate}>{item.date ? new Date(item.date).toDateString() : ''}</Text>
                            {renderDescription()}
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Animation de coche */}
                {renderCheckAnimation()}
                {/* Modal d'édition */}
                {renderEdit()}
                {/* Modal de description */}
                {renderDescriptionModal()}
            </Animated.View>
        );
    };

    // Fonction pour rendre le modal d'édition
    const renderEdit = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={taskItemStyles.centeredView}>
                    <View style={taskItemStyles.modalView}>
                        <TextInput
                            style={[taskItemStyles.input, taskItemStyles.inputEditing]}
                            value={editedTask}
                            onChangeText={setEditedTask}
                        />
                        {/* Bouton de sauvegarde */}
                        <TouchableOpacity onPress={handleSave}>
                            <Icon name="check" size={20} color="gray" />
                        </TouchableOpacity>
                        {/* Bouton d'annulation */}
                        <TouchableOpacity onPress={handleCancel}>
                            <Icon name="times" size={20} color="gray" />
                        </TouchableOpacity>
                        {/* Bouton de calendrier */}
                        <TouchableOpacity onPress={handleEditDate}>
                            <Icon name="calendar" size={20} color="blue" />
                        </TouchableOpacity>
                        {/* Texte de la date */}
                        <Text style={taskItemStyles.taskDate}>{editedDate ? new Date(editedDate).toDateString() : ''}</Text>
                        {/* Bouton de fermeture */}
                        <TouchableOpacity onPress={toggleModal} style={taskItemStyles.closeButton}>
                            <Text style={taskItemStyles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };

    // Fonction pour rendre le modal de description
    const renderDescriptionModal = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={isDescriptionModalVisible}
                onRequestClose={toggleDescriptionModal}
            >
                <View style={taskItemStyles.modalContainer}>
                    <View style={taskItemStyles.modalContent}>
                        <Text style={taskItemStyles.modalDescription}>{editedDescription}</Text>
                        {/* Bouton de fermeture */}
                        <TouchableOpacity onPress={toggleDescriptionModal} style={taskItemStyles.closeButton}>
                            <Text style={taskItemStyles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };

    // Rendu conditionnel entre l'édition et l'affichage normal
    return isEditing ? renderEdit() : renderTask();
};

export default TaskItem;
