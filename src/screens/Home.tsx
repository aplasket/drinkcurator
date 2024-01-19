import { SafeAreaView, Text, View } from "react-native"
import IdeaForm from "../components/IdeaForm"
import { useState } from "react"
import { basicIdea } from "../types/types"
import { styles } from "../styles/styles"

export const Home = () => {
  const [ideaList, setIdeaList] = useState<basicIdea[]>([]);

  const addIdea = (newIdea: basicIdea) => {
    setIdeaList([...ideaList, newIdea]);
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <IdeaForm addIdea={addIdea} />
      <View style={styles.ideaContainer}>
        <Text style={styles.appTitle}>All Ideas: </Text>
        {!ideaList.length && <Text style={styles.clickableText}>No ideas, let's add some!</Text>}
      </View>
    </SafeAreaView>
  )
}