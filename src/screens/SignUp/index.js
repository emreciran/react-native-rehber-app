import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { RegisterUser } from "../../api/Auth";
import { Formik } from "formik";
import { RegisterSchema } from "../../validations";
import ErrorMessage from "../../components/ErrorMessage";
import useToast from "../../hooks/useToast";
import styles from "./styles";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();
  const [_showToast] = useToast();

  const initialValues = {
    name,
    surname,
    email,
    username,
    password,
    confirmPassword,
  };

  const onSignUpPressed = async (values) => {
    try {
      await RegisterUser(values);
      navigation.navigate("SignIn");
      _showToast.showToast("success", "Başarılı", "Kullanıcı oluşturuldu!");
    } catch (error) {
      _showToast.showToast("error", "Error", error.response.data.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={onSignUpPressed}
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
                placeholder="Your name"
                value={values.name}
                setValue={handleChange("name")}
              />
              {errors.name && touched.name && (
                <ErrorMessage error={errors.name} />
              )}
              <CustomInput
                placeholder="Your surname"
                value={values.surname}
                setValue={handleChange("surname")}
              />
              {errors.surname && touched.surname && (
                <ErrorMessage error={errors.surname} />
              )}
              <CustomInput
                placeholder="Your username"
                value={values.username}
                setValue={handleChange("username")}
              />
              {errors.username && touched.username && (
                <ErrorMessage error={errors.username} />
              )}
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
              <CustomInput
                placeholder="Confirm password"
                value={values.confirmPassword}
                setValue={handleChange("confirmPassword")}
                secureTextEntry
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <ErrorMessage error={errors.confirmPassword} />
              )}
              <CustomButton onPress={handleSubmit} text="Register" />
              <CustomButton
                text="Already have an account? Sign in"
                onPress={() => navigation.navigate("SignIn")}
                type="TERTIARY"
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default SignUp;
