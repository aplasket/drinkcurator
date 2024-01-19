import { Button, ScrollView, Text, View } from "react-native";
import { IdeaProps, basicIdea } from "../types/types";
import { styles } from "../styles/styles";
import { useEffect, useState } from "react";

const Ideas = ({ideaList}: IdeaProps) => {
  const [upvoteCounts, setUpvoteCounts] = useState<number[]>([]);

  useEffect(() => {
    setUpvoteCounts(new Array(ideaList.length).fill(0)); // Initialize upvoteCounts with zeros when ideaList changes
  }, [ideaList]);

  const ideaCards = ideaList.map((idea: basicIdea, index: number) => (
    <View style={styles.card} key={`${index}_${idea.text}`}>
      <Text>{idea.text}</Text>
      <Button
        title="👍"
        onPress={() => {
          setUpvoteCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] += 1;
            return newCounts;
          });
        }}
      />
      <Text>Total upvotes: {upvoteCounts[index] || 0}</Text>
    </View>
  ));

  return (
    <View>
      {ideaCards}
    </View>
  )
}

export default Ideas;