import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  imageContainer: {
    paddingTop: 5,
    justifyContent: "center",
    alignContent: "center",
  },
  appTitle:{
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
  inputWrapper: {
    width: "100%",
    paddingHorizontal: 15,
  },
  inputBox: {
    borderColor: "purple",
    borderRadius: 12,
    borderWidth: 2,
    height: 50,
    padding: 12,
    marginBottom: 8
  },
  inputText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  button: {
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#FFC463',
    paddingVertical: 10,
    width: '100%'
  },
  buttonText:{
    fontSize: 14,
    fontWeight: 'bold',
  },
  questionTextContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 8,
  },
  clickableText: {
    paddingLeft: 5,
    fontWeight: 'bold',
    color: "purple",
    fontSize: 16,
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 2},
    textShadowRadius: 2,
  },
  ideaContainer: {
    alignContent: 'center',
    paddingTop: 14,
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    marginTop: "20%",
  }


});