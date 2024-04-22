import { StyleSheet } from 'react-native';

export const taskItemStyles = StyleSheet.create({
    taskItem: {
        paddingVertical: 5,
        marginTop: 0,
        backgroundColor: '#fafafa',
        paddingBottom: 0,
        margin: 20,
        marginLeft: 0,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,

    },
    taskText: {
        marginLeft: 20,
        bottom: 15,
    },
    taskDate: {
        marginLeft: 20,
        bottom: 48,
        fontSize: 12,
        fontStyle: 'italic',
    },
    taskDescription: {
        marginLeft: 20,
        bottom: 25,
        padding: -30,
    },
    edit: {
        left: 330,
        top: 14,
        marginTop: 11,
    },
    Checkbox: {
        marginLeft: 25,
        marginRight: -10,
        bottom: 20,
        width: 25,
        height: 25,
    },
    containerTaskItem: {
        marginLeft: 15,
        marginRight: 90,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxHeight: '80%',
    },
    modalDescription: {
        marginLeft: 20,
        marginBottom: 20, 
    },
    closeButton: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        fontSize: 16,
        color: '#5396ac',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff', 
        color: 'black', 
        borderRadius: 10, 
    },
    inputEditing: {
        backgroundColor: '#f0f0f0', 
        color: 'black',
        borderRadius: 10,
    },
    colorCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        bottom: 10,
        left: 300,
    },
});

export default taskItemStyles;
