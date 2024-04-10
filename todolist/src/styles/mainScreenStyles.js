import { StyleSheet } from 'react-native';

export const mainScreenStyles = StyleSheet.create({

     fullScreen: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#e8e8e8',
  },
  contentContainer: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: '#5396ac',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 60,
    zIndex: 999,
  },
    buttonText: {
        color: 'white',
        fontSize: 30,
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
    dateNavigationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
      backgroundColor: '#16272d',
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    navigationButtonText: {
      fontSize: 28, 
      color: '#5396ac',
      fontWeight: 'bold', 
      textTransform: 'uppercase', 
    },
    dateText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#5396ac',
    },
    
    
});

