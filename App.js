/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
/* eslint-disable react/react-in-jsx-scope */
import { Button, StyleSheet, FlatList, View } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function clearGoals() {
    setCourseGoals([]);
  }

  function addGoalHandler(enteredText) {
    if (enteredText === '') return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsArea}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
      <View style={styles.clearButtonArea}>
        <Button title="Clear Goals" onPress={clearGoals} />
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
  clearButtonArea: {
    flex: 1,
    marginBottom: 50,
  },

  goalsArea: {
    flex: 8,
    paddingTop: 24,
  },
});
