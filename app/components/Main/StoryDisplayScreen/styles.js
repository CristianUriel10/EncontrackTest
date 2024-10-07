import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backButton: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#FF7043",
    borderRadius: 10,
    marginBottom: 20,
  },
  backButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFEBEE",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF7043",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Cochin",
  },
  storyBox: {
    backgroundColor: "#FFF9C4",
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    width: "95%",
    borderColor: "#FFB300",
    borderWidth: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  storyText: {
    fontSize: 20,
    color: "#5D4037",
    textAlign: "justify",
    lineHeight: 30,
    fontFamily: "Courier",
  },
});
