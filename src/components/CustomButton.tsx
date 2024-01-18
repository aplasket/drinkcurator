import { Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "../types/types";
import { styles } from "../styles/styles";

export const CustomButton = ({label}: ButtonProps) => {
  const handleSubmit = () => {
    //check authentication for email and password
  };

  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  </View>
  )
};
