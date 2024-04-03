import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    addButton: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    taskItem: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        marginTop: 20,
    },
    delete: {
        marginLeft: 300,
        marginTop: 11,
        position: 'absolute',
    },
    edit: {
        marginLeft: 260,
        marginTop: 11,
        position: 'absolute',
    },
    dateIcon: {
        marginBottom: 22,
        marginLeft: 10,
    },
    selectedDate: {
        marginLeft: 20,
        marginBottom: 16,

    },
    fullScreen: {
        flex: 1,
        backgroundColor: '#f9faf9', 
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 200,
        right: 50,
        backgroundColor: '#e73623',
        padding: 10,
        borderRadius: 50, 
        width: 50, 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },

});
