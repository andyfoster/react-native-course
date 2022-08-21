import {
  TextInput,
  Button,
  Image,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText('');
  }

  return (
    <Modal style={styles.modal} visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          autoFocus={true}
          style={styles.textInput}
          placeholder="Your Goals"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={props.closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ff0000',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    color: '#120438',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    marginRight: 4,
    padding: 16,
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  },
});

export default GoalInput;
