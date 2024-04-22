import { StyleSheet } from 'react-native';

export const addTaskStyles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    containerAddTask: {
        left: 22,
        top: 125,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: '#F9F9F9',
        paddingBottom: 30,
        borderRadius: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    addButton: {
        backgroundColor: '#5396ac',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    dateIcon: {
        marginBottom: 22,
        marginLeft: 10,
    },
    calendarText: {
        color: '#5396ac',
        textDecorationLine: 'underline',
        marginBottom: 16,
        marginRight: 50,
        paddingLeft: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    closeButton: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
});
