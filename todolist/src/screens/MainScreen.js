import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import { styles } from '../styles/styles'; 
import TodoList from '../components/TodoList';

const MainScreen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleButtonPress = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <View style={styles.fullScreen}>
            {/* Bouton en bas à droite */}
            <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>Mon Bouton</Text>
            </TouchableOpacity>

            {/* Fenêtre modale pour afficher la TodoList */}
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={handleCloseModal}>
                            <Text style={styles.closeButton}>X</Text>
                        </TouchableOpacity>
                        <TodoList />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default MainScreen;
