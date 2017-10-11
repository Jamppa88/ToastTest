import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    //alignItems: 'center'

  },
  button: {
    color: 'white',
    //height: 30,
    padding: 8,
    textAlign: 'center',
    borderRadius: 4,
    backgroundColor: 'blue',
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: 'Nosifer',
    //justifyContent: 'center',
    marginBottom: 5,
    marginLeft: 4,
    marginRight: 4
    //: 'center'
  }
})