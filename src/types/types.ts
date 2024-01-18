import { TouchableOpacityProps } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type CustomInputProps = {
  label: string;
  isPassword?: boolean;
};

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
};


export type RootStackParamList = {
  Login: {};
  Signup: {};
};

export type screenProps = NativeStackScreenProps<RootStackParamList>;