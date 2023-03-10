import { View, Text } from "react-native";
import React from "react";

const ErrorMessage = ({ error }) => {
  return <Text style={{ color: "red" }}>{error}</Text>;
};

export default ErrorMessage;
