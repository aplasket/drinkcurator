import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import CustomInput from './src/components/CustomInput';
import { CustomButton } from "./src/components/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomInput label={"Email"} />
      <CustomInput label={"Password"} isPassword={true}/>
      <CustomButton label={"login"}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
