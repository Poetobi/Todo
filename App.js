import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const newTask = { title: task, date, time };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
<SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>

      <Image source={require('./assets/Todolist.png')} style={styles.image} />


    <Text style={styles.welcome}>

    Ready to get things done? 

    </Text>

    <Text style={styles.sub}>

    Add a new task and watch your to-do list shrink!"

</Text>


      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Add a new task"
          placeholderTextColor={"white"}
        />
        <TouchableOpacity onPress={addTask}>
          <FontAwesome name="plus-circle" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.taskList}>
        {tasks.map((task, index) => (
          <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
            <View style={styles.task}>
              <Text style={styles.title}>{task.title}</Text>
              <View style={styles.dateTime}>
                <Text style={styles.date}>{task.date}</Text>
                <Text style={styles.time}>{task.time}</Text>
              </View>
              <FontAwesome name="trash" size={24} color="red" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
    backgroundColor: '#0496FF'

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    width: '80%',
    marginBottom: 20

    

  },

  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 100,
    padding: 15,
    fontSize: 18,
    width: '80%',

  },
  taskList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-cent',
    width: '80%',
    borderRadius: 50,
    


  },

  task: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#fff',
    padding: 14,
    marginBottom: 20,
    borderRadius: 50,
    color: '#fff'

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'

  },

  date: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    marginRight: 5,
  },
  time: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },

  welcome: {

    fontSize: 50,
    width: 350,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: "Montserrat",
    lineHeight: 50,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FFF'
    
  },

  sub: {
    fontSize: 26,
    width: 300,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: "Montserrat",
    color: 'aliceblue'
  },

  image: {

    width: 320,
    height: 250,
    marginTop: 50,

  },

  safeArea: {
    flex: 1,
    backgroundColor: '#0496FF',
    color: 'white'
  },




});


