import { StyleSheet } from 'react-native';

export const mainScreenStyles = StyleSheet.create({

     fullScreen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: '#e73623',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 35,
    right: 20,
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
        padding: 10,
        backgroundColor: '#171c1a',
      },
      navigationButtonText: {
        fontSize: 30,
        color: 'white',
      },
      dateText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#171c1a',
        paddingVertical: 25,
      },
      tabText: {
        fontSize: 18,
        marginBottom: 60,
        color: 'white',
      },
      selectedTabText: {
        fontWeight: 'bold',
        marginBottom: 60,
        color: '#e73623',
      },
});

