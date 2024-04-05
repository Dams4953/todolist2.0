import { StyleSheet } from 'react-native';

export const mainScreenStyles = StyleSheet.create({

    fullScreen: {
        flex: 1, 
    },
    buttonContainer: {
        position: 'relative',
        backgroundColor: '#e73623',
        top: 30,
        left: 172,
        padding: 10,
        borderRadius: 50, 
        width: 50, 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
    },
    closeButton: {
        fontSize: 50,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});