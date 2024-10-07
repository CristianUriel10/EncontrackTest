import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

const CloudButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.cloud}>
        <Text style={styles.buttonText}>Generate Story</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CloudButton;
