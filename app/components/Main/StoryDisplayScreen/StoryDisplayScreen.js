import React, { useRef, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Navigation } from "react-native-navigation";
import Sound from "react-native-sound";
import { styles } from "./styles";

const StoryDisplayScreen = (props) => {
  const scrollViewRef = useRef(null);
  const [musicPlayed, setMusicPlayed] = useState(false); // Controlar si la música ya ha sido reproducida
  const windowHeight = Dimensions.get("window").height;

  const playMusic = () => {
    const lullaby = new Sound(
      "good-night-melody.mp3",
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log("Failed to load the sound", error);
          return;
        }
        lullaby.play(); // Reproducir la música
      }
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;

    // Verificar si el usuario ha llegado a la mitad del scroll
    if (scrollPosition > contentHeight / 2 && !musicPlayed) {
      playMusic(); // Reproducir música
      setMusicPlayed(true); // Marcar como reproducido para que no se repita
    }
  };
  const handleBackPress = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>Back to Menu</Text>
      </TouchableOpacity>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll} // Detectar el scroll
        scrollEventThrottle={16} // Controlar la frecuencia del evento scroll
        contentContainerStyle={styles.container}
      >
        <Text style={styles.title}>Once Upon a Time...</Text>
        <View style={styles.storyBox}>
          <Text style={styles.storyText}>{props.story}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default StoryDisplayScreen;
