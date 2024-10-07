import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Navigation } from "react-native-navigation";
import { useDispatch, useSelector } from "react-redux";
import { generateStory } from "../../../redux/Chatgpt/chatgpt.actions";
import CloudButton from "../../Controls/CloudButton/CloudButton";
import { selectStory } from "../../../redux/Chatgpt/chatgpt.selectors";
import { styles } from "./styles";

const StoryCreationScreen = (props) => {
  const dispatch = useDispatch();

  const [openBeginning, setOpenBeginning] = useState(false);
  const story = useSelector(selectStory);
  const [beginning, setBeginning] = useState(null);
  const [beginningItems, setBeginningItems] = useState([
    { label: "Adventure", value: "Adventure" },
    { label: "Mystery", value: "Mystery" },
    { label: "Fantasy", value: "Fantasy" },
  ]);

  const [openMiddle, setOpenMiddle] = useState(false);
  const [middle, setMiddle] = useState(null);
  const [middleItems, setMiddleItems] = useState([
    { label: "Conflict", value: "Conflict" },
    { label: "Journey", value: "Journey" },
    { label: "Discovery", value: "Discovery" },
  ]);

  const [openEnding, setOpenEnding] = useState(false);
  const [ending, setEnding] = useState(null);
  const [endingItems, setEndingItems] = useState([
    { label: "Happy", value: "Happy" },
    { label: "Sad", value: "Sad" },
    { label: "Unexpected", value: "Unexpected" },
  ]);

  const handleGenerateStory = () => {
    if (beginning && middle && ending) {
      dispatch(generateStory(beginning, middle, ending));
    } else {
      alert("Please select options for all stages of the story.");
    }
  };

  useEffect(() => {
    if (story) {
      Navigation.push(props.componentId, {
        component: {
          name: "StoryDisplayScreen",
          passProps: {
            story,
          },
          options: {
            topBar: {
              title: {
                text: "Story Display",
              },
            },
          },
        },
      });
    }
  }, [story]);

  const renderDropDowns = () => (
    <View style={styles.dropdownContainer}>
      <Text style={styles.label}>Choose the Beginning:</Text>
      <DropDownPicker
        open={openBeginning}
        value={beginning}
        items={beginningItems}
        setOpen={setOpenBeginning}
        setValue={setBeginning}
        setItems={setBeginningItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownMenu}
        textStyle={styles.dropdownText}
        placeholder="Select Beginning"
        placeholderStyle={styles.placeholderText}
        itemSeparator={true}
        listItemLabelStyle={styles.listItemLabel}
        dropDownDirection="TOP"
        zIndex={3000}
      />

      <Text style={styles.label}>Choose the Middle:</Text>
      <DropDownPicker
        open={openMiddle}
        value={middle}
        items={middleItems}
        setOpen={setOpenMiddle}
        setValue={setMiddle}
        setItems={setMiddleItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownMenu}
        textStyle={styles.dropdownText}
        placeholder="Select Middle"
        placeholderStyle={styles.placeholderText}
        itemSeparator={true}
        listItemLabelStyle={styles.listItemLabel}
        zIndex={2000}
      />

      <Text style={styles.label}>Choose the Ending:</Text>
      <DropDownPicker
        open={openEnding}
        value={ending}
        items={endingItems}
        setOpen={setOpenEnding}
        setValue={setEnding}
        setItems={setEndingItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownMenu}
        textStyle={styles.dropdownText}
        placeholder="Select Ending"
        placeholderStyle={styles.placeholderText}
        itemSeparator={true}
        listItemLabelStyle={styles.listItemLabel}
        zIndex={1000}
      />

      <CloudButton onPress={handleGenerateStory} />
    </View>
  );

  return (
    <FlatList
      data={[{ key: "story-creation-screen" }]}
      renderItem={renderDropDowns}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.container}
    />
  );
};

export default StoryCreationScreen;
