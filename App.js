import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Navigation from "./src/navigation";
import Toast from "react-native-toast-message";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f8fc",
  },
});

export default App;
