import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { FormProps, basicIdea } from "../types/types";

const IdeaForm = ({ addIdea }: FormProps) => {
  const [ idea, setIdea ] = useState("");

  const handleSubmit = () => {
    const newIdea: basicIdea = {
      text: idea,
    }

    if (idea.trim()){
      addIdea(newIdea);
      clearInput();
    }
  };

  const clearInput = () => {
    setIdea("");
  }

  return(
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="Enter an idea"
        value={idea}
        onChangeText={setIdea}
        style={styles.inputBox}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSubmit}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default IdeaForm;