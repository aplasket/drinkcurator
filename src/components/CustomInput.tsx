import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { CustomInputProps } from "../types/types";
import { styles } from "../styles/styles";

const CustomInput = ({label, isPassword}: CustomInputProps): JSX.Element => {
  const [ text, onChangeText ] = useState("");

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>{label}</Text>
        <TextInput
          placeholder={label}
          value={text}
          onChangeText={onChangeText}
          style={styles.inputBox}
        />
      </View>
    </View>
  )
};

export default CustomInput;