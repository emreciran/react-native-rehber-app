import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate("ResetPassword")
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn")
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />

        <CustomButton onPress={onSendPressed} text="Send" />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
