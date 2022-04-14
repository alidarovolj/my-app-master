import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
  ScrollView
} from "react-native";
import { t } from "react-native-tailwindcss";
import { Navbar } from "./components/Navbar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

// import { cStyle } from "./components/cStyle";
import { BottomMenu } from "./components/BottomMenu";
import { MainContent } from "./components/MainContent";
import { cStyle } from "./components/cStyle";

const fonts = () => Font.loadAsync({
  SFProDisplay: require('./assets/fonts/SFProDisplay-Regular.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);

  if(font) {
    return (
      <View>
          <ScrollView>
          <Navbar title="Navbar title"/>
          <Text style={[ cStyle.textWithFont ]}>Hello!</Text>
          <MainContent />
        </ScrollView>
        <BottomMenu />
      </View>
    );
  } else {
    return (
      <AppLoading 
        startAsync = {fonts}
        onFinish = {() => setFont(true)}
        onError = {() => console.warn()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
});
