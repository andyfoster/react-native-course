/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
/* eslint-disable react/react-in-jsx-scope */
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Goals" />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsArea}>
        <Text>Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    // backgroundColor: '#ccc',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 4,
    padding: 8,
  },
  goalsArea: {
    flex: 5,
    paddingTop: 24,
  },
});
