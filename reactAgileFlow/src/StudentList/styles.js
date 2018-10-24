import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    mainText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    textInput: {
      height: 20, 
      borderColor: 'gray', 
      borderWidth: 1,
      alignSelf: 'auto',
    },
    editContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contentContainer: {
      flexDirection: 'row'
    },
    itemContainer: {
      flexDirection: 'row'
    }
  });