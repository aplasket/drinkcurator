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
    textAlign: "center",
  },
  ideaContainer: {
    alignContent: 'center',
    marginHorizontal: 24,
    marginVertical: 8,
    flexDirection: 'column',
  },
  homeContainer: {
    marginTop: 65,
    flex: 1,
  },
  card: {
    padding: 12,
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'purple',
    shadowColor: '#FFC463',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red'
  },
  ideaInputWrapper: {
    paddingHorizontal: 15,
    justifyContent: 'center', // Align children vertically centered
  },
  ideaInputBox: {
    borderColor: "purple",
    borderRadius: 12,
    borderWidth: 2,
    height: 50,
    padding: 12,
    marginBottom: 8
  },
  cardsContainer: {
    padding: 12,
  },
  homeTitle: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      padding: 10,
  },
});