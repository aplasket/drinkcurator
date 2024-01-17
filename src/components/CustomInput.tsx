import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const CustomInput = (): JSX.Element => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSubmit = () => {
    //check authentication for email and password
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.inputBox}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.inputBox}
      />
      <Button title="Login" onPress={handleSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  inputBox: {
    width: 200,
    borderColor: "purple",
    borderRadius: 12,
    borderWidth: 2,
    padding: 12,
    marginBottom: 8
  },
});


export default CustomInput;