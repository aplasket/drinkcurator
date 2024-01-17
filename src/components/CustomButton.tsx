import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "../types/types";

export const CustomButton = ({label}: ButtonProps) => {
  const handleSubmit = () => {
    //check authentication for email and password
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 45,
  },
  button: {
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#FFC463',
    paddingVertical: 10,
    width: '50%'
  },
  text:{
    fontSize: 14,
    fontWeight: 'bold',
  }
});