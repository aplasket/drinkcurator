import { TouchableOpacityProps } from "react-native";

export type CustomInputProps = {
  label: string;
  isPassword?: boolean;
};

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
};