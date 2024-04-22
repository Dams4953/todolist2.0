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

