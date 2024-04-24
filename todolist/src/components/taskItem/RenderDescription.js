import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { taskItemStyles } from '../../styles/taskItemStyles';

const renderDescriptionModal = ({ toggleDescriptionModal, isDescriptionModalVisible, editedDescription }) => {
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

export default renderDescriptionModal;
