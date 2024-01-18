import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from './src/components/CustomInput';
import { CustomButton } from "./src/components/CustomButton";
import { styles } from './src/styles/styles';

// Main Tabs bottom navigation


// --- Onboarding screens ---



export default function App() {
  return (
    <SafeAreaView >
      {/* image container */}
      <View style={styles.imageContainer}>
        <Image source={require('./assets/drinksanimated.gif')} style={styles.imageStyle}/>
        <Text style={styles.appTitle}>Drink Curator</Text>
      </View>
      {/* sign in component*/}
      <View style={styles.inputWrapper}>
        <CustomInput label={"Email"} />
        <CustomInput label={"Password"} isPassword={true}/>
        <CustomButton label={"login"}/>
        <View style={styles.questionTextContainer}>
          <Text>Don't Have an Account?</Text>
          <TouchableOpacity >
            <Text style={styles.clickableText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* stack navigation <Sign Up /> */}
      {/* Tab Navigation <Main /> */}

    </SafeAreaView>
  );
};