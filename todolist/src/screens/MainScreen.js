import { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../styles/styles';
import TodoList from '../components/TodoList';

const MainScreen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleButtonPress = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    // Dans MainScreen
    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
        setIsModalVisible(false);
    };


    return (
        <View style={styles.fullScreen}>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseModal}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.modalContainer}>

                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                            <Text>X</Text>
                        </TouchableOpacity>
                        <TodoList onAddTask={handleAddTask} />

                    </View>

                </KeyboardAvoidingView>
            </Modal>

            {tasks.map((task, index) => (
                <View key={index}>
                    <Text>{task}</Text>
                </View>
            ))}
        </View>
    );
};

export default MainScreen;
