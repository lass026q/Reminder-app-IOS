import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [reminderText, setReminderText] = useState('');
  const [reminderList, setReminderList] = useState([]);

  const handleAddReminder = () => {
    if (reminderText.length > 0) {
      setReminderList([...reminderList, reminderText]);
      setReminderText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminder App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a reminder"
        onChangeText={text => setReminderText(text)}
        value={reminderText}
      />
      <Button title="Add Reminder" onPress={handleAddReminder} />
      <FlatList
        data={reminderList}
        renderItem={({ item }) => <Text style={styles.reminderItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  reminderItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});
