import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Animated, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { taskItemStyles } from '../styles/taskItemStyles';
import { Checkbox } from 'expo-checkbox';

const TaskItem = ({ item, index, onUpdateTask, onDeleteTask, isEditingDate, onShowDatePicker, selectedColor }) => {
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

    const MAX_DESCRIPTION_LENGTH = 20;

    useEffect(() => {
        if (!isTaskVisible) {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start(() => {
                onDeleteTask(index);
            });
        }
    }, [isTaskVisible]);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleEditDate = () => {
        setIsEditing(true);
        onShowDatePicker();
    };

    const handleSave = () => {
        setIsEditing(false);
        setIsModalVisible(false);
        onUpdateTask(index, editedTask, editedDescription, editedDate); 
    };

    const handleCancel = () => {
        setIsEditing(false);
        setIsModalVisible(false);
        setEditedTask(item.text);
        setEditedDate(item.date);
    };

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
        setShowCheckAnimation(true);
        if (!isChecked) {
            setIsTaskVisible(false);
        }
    };

    const handleContainerPress = (event) => {
        event.stopPropagation();
    };

    const renderCheckAnimation = () => {
        return (
            <Animated.View style={{ opacity: showCheckAnimation ? 1 : 0, position: 'absolute', right: 10 }}></Animated.View>
        );
    };

    const toggleDescriptionModal = () => {
        setIsDescriptionModalVisible(!isDescriptionModalVisible);
    };

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

    const renderTask = () => {

        const handleTaskPress = () => {
            toggleDescriptionModal();
        };

        return (
            <Animated.View style={[taskItemStyles.taskItem, { opacity: opacity }]}>
                <TouchableOpacity style={taskItemStyles.edit} onPress={toggleModal}>
                    <Icon name="pencil" size={20} color="#5396ac" />
                </TouchableOpacity>
                {isEditingDate && (
                    <TouchableOpacity onPress={handleEditDate}>
                        <Icon name="calendar" size={20} color="blue" />
                    </TouchableOpacity>
                )}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox
                        style={taskItemStyles.Checkbox}
                        value={isChecked}
                        onValueChange={handleCheckBoxChange}
                    />
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
                {renderCheckAnimation()}
                {renderEdit()}
                {renderDescriptionModal()}
            </Animated.View>
        );
    };

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
                        <TouchableOpacity onPress={handleSave}>
                            <Icon name="check" size={20} color="gray" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleCancel}>
                            <Icon name="times" size={20} color="gray" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleEditDate}>
                            <Icon name="calendar" size={20} color="blue" />
                        </TouchableOpacity>
                        <Text style={taskItemStyles.taskDate}>{editedDate ? new Date(editedDate).toDateString() : ''}</Text>
                        <TouchableOpacity onPress={toggleModal} style={taskItemStyles.closeButton}>
                            <Text style={taskItemStyles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };

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
                        <TouchableOpacity onPress={toggleDescriptionModal} style={taskItemStyles.closeButton}>
                            <Text style={taskItemStyles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };

    return isEditing ? renderEdit() : renderTask();
};

export default TaskItem;
