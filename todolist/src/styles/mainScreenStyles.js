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
    bottom: 100,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'white',
    right: 171,
    zIndex: 999,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  modalContainer: {
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
    backgroundColor: '#FFFFFF',
    marginBottom: 20,

  },
  navigationButtonText: {
    fontSize: 36,
    color: '#5396ac',
    textTransform: 'uppercase',
    paddingTop: 50,
    paddingBottom: 2,
    paddingRight: 20,
    paddingLeft: 20,
  },
  dateText: {
    fontSize: 20,
    color: 'gray',
    paddingTop: 50,
    paddingBottom: 2,
  },


});

