import AddInputSearch from "./components/input";
import React, { useState }  from 'react';
import List from "./components/list";
import {StyleSheet, View, StatusBar, Text} from "react-native";



export default function App() {


const [data, setData] = useState([]);

    const add = item =>{

        
        const element = [{id: (new Date()).getTime(), title: item, completed: false}, ...data]
        

        if (item !== '') {
          setData(element)
        }
    }


  return (
    <View style = {styles.container}>
      <Text style = {styles.textTitle}>Liste des Taches</Text>
      <AddInputSearch onAdd = {add} />
      <List data = {data} setData = {setData}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 50 || 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20

  }
});

