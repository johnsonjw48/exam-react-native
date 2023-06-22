import React, { useState }  from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';





const Item = ({id, title, completed, onDelete, onComplete}) => (
  <View style={styles.item}>
    <Text style={completed ? styles.titleCompleted : styles.title }>{title}</Text>
      <TouchableOpacity
        style = {styles.buttonAction}
        onPress={() => {
          onDelete(id);
        }}
      >
        <Text style = {styles.textButton} >SUPPRIMER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.buttonAction}
        onPress={() => {
          onComplete(id)
        }}
      >
        <Text style = {styles.textButton} >{completed === true? "ANNULER" : "TERMINE"}</Text>
      </TouchableOpacity>
  </View>
);

const List = (props) => {

  const deleteItem = (key) => {
   props.setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.id != key);
    });
  };

  const completeItem = (key) => {
    const newData = props.data.map((todo) => todo.id === key ? todo =  {id: key, title: todo.title,  completed: !todo.completed } : todo)
    props.setData(newData);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item}) => <Item title={item.title} completed = {item.completed} id = {item.id} onDelete = {deleteItem} onComplete = {completeItem} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonAction : {
    backgroundColor: "#0dcaf0",
    width: 82,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    borderRadius: 5,
    marginLeft: 10
  },
  textButton : {
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontSize: 25,
  },
  titleCompleted: {
    fontSize: 25,
    textDecorationLine: 'line-through',
  }
});

export default List;