import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const ConfirmEmail = () => {
  const [code, setCode] = useState("");

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate("SignIn");
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onResendPress = () => {
    alert("pressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton onPress={onConfirmPressed} text="Confirm" />
        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmail;
