import { StyleSheet } from 'react-native';

export const addTaskStyles = StyleSheet.create({
    containerAddTask: {
        paddingTop: 50,
        paddingHorizontal: 50,
        backgroundColor: '#fff',
        paddingBottom: 50,
        borderRadius: 60,
        margin: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    addButton: {
        backgroundColor: '#e73623',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        borderRadius: 20,
    },
    addButtonText: {
        color: 'white',
    },
    dateIcon: {
        marginBottom: 22,
        marginLeft: 10,
    },
    dateIcon: {
        marginBottom: 20,
        marginLeft: 25,
    },
    calendarText: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: 16,
        marginRight: 50,
    },
});
