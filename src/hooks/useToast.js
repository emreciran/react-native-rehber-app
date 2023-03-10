import Toast from "react-native-toast-message";

const useToast = () => {
  function showToast(type, title, message) {
    Toast.show({
      type: `${type}`,
      text1: `${title}`,
      text2: `${message}`,
      position: "bottom",
      autoHide: true,
      visibilityTime: 2500,
    });
  }

  return [{ showToast }];
};

export default useToast;
