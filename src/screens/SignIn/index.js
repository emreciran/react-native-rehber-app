import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { LoginUser } from "../../api/Auth";
import useToast from "../../hooks/useToast";
import { Formik } from "formik";
import { LoginSchema } from "../../validations";
import ErrorMessage from "../../components/ErrorMessage";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const [_showToast] = useToast();

  const initialValues = {
    email,
    password,
  };

  const onSignInPressed = async (values) => {
    try {
      await LoginUser(values);
      navigation.navigate("Home");
    } catch (error) {
      _showToast.showToast("error", "Error", error.response.data.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Sign In</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={onSignInPressed}
        >
          {({
            values,
            errors,
            handleSubmit,
            touched,
            handleChange,
            dirty,
            isSubmitting,
          }) => (
            <View style={{ width: "100%" }}>
              <CustomInput
                placeholder="Your email"
                value={values.email}
                setValue={handleChange("email")}
              />
              {errors.email && touched.email && (
                <ErrorMessage error={errors.email} />
              )}
              <CustomInput
                placeholder="Your password"
                value={values.password}
                setValue={handleChange("password")}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <ErrorMessage error={errors.password} />
              )}
              <CustomButton onPress={handleSubmit} text="Sign In" />
              <CustomButton
                onPress={() => navigation.navigate("ForgotPassword")}
                text="Forgot Password"
                type="TERTIARY"
              />
              <CustomButton
                text="Don't have an account? Create one"
                onPress={() => navigation.navigate("SignUp")}
                type="TERTIARY"
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default SignIn;
