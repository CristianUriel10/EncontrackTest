import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  cloud: {
    backgroundColor: "#80deea",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 22,
    color: "#004d40",
    fontWeight: "bold",
  },
});
