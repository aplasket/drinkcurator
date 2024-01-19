import { Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "../types/types";
import { styles } from "../styles/styles";
import { RootStackParamList } from "../types/types";

export const CustomButton = ({ label, navigation, route }: ButtonProps ) => {
  const destinationRoute: keyof RootStackParamList = route as keyof RootStackParamList || "Main";

  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText} onPress={() => {navigation.navigate(destinationRoute)}}>{label}</Text>
    </TouchableOpacity>

  </View>
  )
};

/*
 * const handleSubmit = () => {
    //check authentication for email and password
    //if email and password
    navigation.navigate("Main")
    // else error message of email and password
  };
 *
 */