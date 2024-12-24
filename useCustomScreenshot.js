import { useEffect } from 'react';
import { NativeModules } from "react-native";
import { useNavigation } from "@react-navigation/native";

const useCustomScreenshot = () => {
  const navigation = useNavigation();

  const forbidScreenshot = async () => {
    try {
      const result = await NativeModules.PreventScreenshotModule.forbid();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  const allowScreenshot = async () => {
    try {
      const result = await NativeModules.PreventScreenshotModule.allow();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    navigation.addListener('blur', () => {
      // when user moves to some other screen 'blur' event will be triggered, 
      // again enable screenshot
      allowScreenshot();
    });
  }, []);

  return { allowScreenshot, forbidScreenshot };
};

export default useCustomScreenshot;