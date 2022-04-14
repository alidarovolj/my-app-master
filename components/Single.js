import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, ScrollView, SafeAreaView, TouchableHighlight } from "react-native";
import { t } from "react-native-tailwindcss";

export default function Single({ route }) {
    return (
        <>
        <SafeAreaView>
            <Text>{ route.params.username }</Text>
        </SafeAreaView>
        </>
    );
};
