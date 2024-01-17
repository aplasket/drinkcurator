import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { CustomInputProps } from "../types/types";

const CustomInput = ({label, isPassword}: CustomInputProps): JSX.Element => {
  const [ text, onChangeText ] = useState("");



  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.text}>{label}</Text>
        <TextInput
          placeholder={label}
          value={text}
          onChangeText={onChangeText}
          style={styles.inputBox}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  inputWrapper: {
    width: "100%",
    paddingHorizontal: 45
  },
  inputBox: {
    borderColor: "purple",
    borderRadius: 12,
    borderWidth: 2,
    height: 50,
    padding: 12,
    marginBottom: 8
  },
});


export default CustomInput;