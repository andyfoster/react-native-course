/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Button, StyleSheet, TextInput, FlatList, View } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function clearGoals() {
    setCourseGoals([]);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View>
        <Button title="Clear Goals" onPress={clearGoals} />
      </View>
      <View style={styles.goalsArea}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
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
