import React from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";
import { styles } from "./styles";

const StoryDisplayScreen = (props) => {
  const handleBackPress = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>Back to Menu</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Once Upon a Time...</Text>
        <View style={styles.storyBox}>
          <Text style={styles.storyText}>{props.story}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default StoryDisplayScreen;
