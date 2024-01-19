import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { FormProps, basicIdea } from "../types/types";

const IdeaForm = ({ addIdea }: FormProps) => {
  const [ idea, setIdea ] = useState("");
  const maxTextLength = 50;

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
    <View >
      <TextInput
        placeholder="Enter an idea"
        value={idea}
        onChangeText={(text) => text.length <= maxTextLength && setIdea(text)} // Limit the input length
        style={styles.ideaInputBox}
        maxLength={maxTextLength}
      />
      {idea.length >= maxTextLength && (
        <Text style={styles.errorText}>Character limit reached!</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default IdeaForm;