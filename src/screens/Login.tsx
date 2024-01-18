import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../components/CustomInput';
import { CustomButton } from "../components/CustomButton";
import { styles } from '../styles/styles';
import { screenProps } from '../types/types';

export const Login = ({ navigation }: screenProps) => {
  return (
    <SafeAreaView >
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/drinksanimated.gif')} style={styles.imageStyle}/>
        <Text style={styles.appTitle}>Drink Curator</Text>
      </View>
      <View style={styles.inputWrapper}>
        <CustomInput label={"Email"} />
        <CustomInput label={"Password"} isPassword={true}/>
        <CustomButton label={"login"}/>
        <View style={styles.questionTextContainer}>
          <Text>Don't Have an Account?</Text>
          <TouchableOpacity>
            <Text style={styles.clickableText} onPress={() => {navigation.navigate("Signup")}}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}