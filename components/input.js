import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AddInputSearch(props) {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  
  };

  return (
    <View>
      <View>
        <TextInput style = {styles.input} placeholder="Ajouter un truck" onChangeText={onChangeText} value = {value} />
      </View>
      <TouchableOpacity
        style = {styles.submitButton}
        onPress={() => {
          props.onAdd(value)
          setValue('');
        }}
      >
        <Text style = {styles.textButton}>AJOUTER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles  =  StyleSheet.create({
  input: {
    fontSize : 20,
    backgroundColor: "white",
    width: 350,
    marginRight: 20,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  submitButton : {
    width: 350,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0dcaf0",
    marginBottom: 20,
    borderRadius: 5,
  },
  textButton : {
    color: "white",
    fontWeight: "bold"
  }
});
