import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const ResetPassword = () => {
  const [code, setCode] = useState("");
  const [newPasword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate("SignIn")
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn")
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput placeholder="Code" value={code} setValue={setCode} />
        <CustomInput
          placeholder="New Password"
          value={newPasword}
          setValue={setNewPassword}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />

        <CustomButton onPress={onSubmitPressed} text="Submit" />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
