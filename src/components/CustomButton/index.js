import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable
      style={[styles.container, styles[`container_${type}`]]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },
  container_SECONDARY: {
    borderColor: "#3871F3",
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    fontWeight: "700",
    color: "#fff",
  },
  text_SECONDARY: {
    color: "#3871F3",
  },
  text_TERTIARY: {
    color: "gray",
  },
});

export default CustomButton;
