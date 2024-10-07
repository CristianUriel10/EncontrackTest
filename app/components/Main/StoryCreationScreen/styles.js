import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e0f7fa",
  },
  dropdownContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 24,
    marginVertical: 10,
    color: "#00796b",
    fontWeight: "bold",
    textAlign: "center",
  },
  dropdown: {
    width: "80%",
    height: 50,
    backgroundColor: "#80deea",
    borderColor: "#00796b",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  dropdownMenu: {
    backgroundColor: "#b2ebf2",
    borderColor: "#00796b",
    width: "80%",
  },
  dropdownText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  placeholderText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  listItemLabel: {
    fontSize: 18,
    color: "#004d40",
    textAlign: "center",
    paddingVertical: 10,
  },
});
