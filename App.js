/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
/* eslint-disable react/react-in-jsx-scope */
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello World!!!</Text>
      <Button title="click me" />
      <Text style={styles.paragraphText}>More text here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#eeff00',
    backgroundColor: 'black',
  },
  paragraphText: {
    padding: 10,
    margin: 50,
    borderWidth: 1,
    borderColor: 'blue',
  },
});
