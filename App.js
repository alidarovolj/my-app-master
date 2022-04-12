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
import { BottomMenu } from "./components/BottomMenu";
import { MainContent } from "./components/MainContent";

export default function App() {
  return (
    <>
    <ScrollView>
      <Navbar title="Navbar title"/>
      <MainContent />
    </ScrollView>
    <BottomMenu />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
});
