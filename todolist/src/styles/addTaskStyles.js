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
        backgroundColor: '#5396ac',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20,
    },
    addButtonText: {
        color: 'white',
    },
    dateIcon: {
        marginBottom: 22,
        marginLeft: 10,
    },
    calendarText: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: 16,
        marginRight: 50,
    },
    colorOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    colorOption: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        marginHorizontal: 5,
    },
});
