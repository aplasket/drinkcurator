import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from './src/components/CustomInput';
import { CustomButton } from "./src/components/CustomButton";

// Main Tabs bottom navigation


// --- Onboarding screens ---

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* sign in component*/}
      <View style={styles.imageContainer}>
        <Image source={require('./assets/drinksanimated.gif')} style={styles.image}/>
        <Text style={styles.title}>Drink Curator</Text>
      </View>
      {/* image container */}
      <View style={styles.loginContainer}>
        <CustomInput label={"Email"} />
        <CustomInput label={"Password"} isPassword={true}/>
        <CustomButton label={"login"}/>
        <Text>Don't Have an Account?</Text>
        <TouchableOpacity>
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
      {/* stack navigation <Sign Up /> */}
      {/* Tab Navigation <Main /> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  imageContainer: {
    paddingTop: 16,
    paddingHorizontal: 35,
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: "60%",
  },
  title:{
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  loginContainer: {

  },
  createAccountContainer: {

  },
});
