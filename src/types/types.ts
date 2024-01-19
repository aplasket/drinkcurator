import { TouchableOpacityProps } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type CustomInputProps = {
  label: string;
  isPassword?: boolean;
};

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  navigation: screenProps["navigation"];
  route: screenProps["route"]["params"];
}

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Main: undefined;
};

export type screenProps = NativeStackScreenProps<RootStackParamList>;

export interface basicIdea {
  text: string;
}

export type FormProps = {
  addIdea: (idea: basicIdea) => void;
}

export type IdeaProps = {
  ideaList: basicIdea[];
  // upvote: (id: number) => void;
  // downvote: (id: number) => void;
};