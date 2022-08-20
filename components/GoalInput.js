import { TextInput, Button, Modal, StyleSheet, View } from 'react-native';
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goals"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
});

export default GoalInput;
