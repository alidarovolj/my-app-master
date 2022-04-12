import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, ScrollView } from "react-native";
import { t } from "react-native-tailwindcss";

export const MainContent = props => {
  var [chBut, setButton] = useState({ salary: 100000, percent: "51%" });
  var [chStatus, setStatus] = useState(false);
  var [opBlock, setBlock] = useState(0);
  function changeButton() {
    if (chStatus === false) {
        setStatus(true);
        setButton({ salary: 50000, percent: "7%"})
    }
  }
  function changeButtonS() {
    if (chStatus === true) {
        setStatus(false);
        setButton({ salary: 100000, percent: "51%"})
    }  
  }
  function openBlock() {
    if(opBlock === "auto") {
        setBlock(0)
    } else {
        setBlock("auto")
    }
  }
  return (
    <>
    <ScrollView style={t.h40} horizontal={ true }>
            <Image style={[t.hAuto]} source={require('../assets/1.jpg')}/>
            <Image style={[t.hAuto]} source={require('../assets/2.jpg')}/>
            <Image style={[t.hAuto]} source={require('../assets/3.jpg')}/>
            <Image style={[t.hAuto]} source={require('../assets/4.jpg')}/>
    </ScrollView>
    <View>
        <View style={[ t.flex, t.flexRow, t.justifyBetween, t.pX4, t.mY4 ]}>
            <Button onPress={changeButton} title="Без опыта" />
            <Button onPress={changeButtonS} title="С опытом работы" />
        </View>
        <View>
            <Text>{ chBut.salary } {chBut.percent}</Text>
        </View>
    </View>
    <View style={[t.mY4, t.pX4]}>
        <View>
            <Button title="Как учиться эффективно. Видеокурс от методистов GeekUniversity" onPress={openBlock} style={[t.bgBlack, t.p2, t.roundedLg, t.textLg, t.textWhite]}></Button>
            <View style={{overflow: "hidden", height: opBlock}}>
                <Text>Узнаете об особенностях обучения взрослых, научитесь ставить образовательные цели, строить карту компетенций, формулировать образовательные запросы.</Text>
            </View>
        </View>
    </View>
    </>
  );
};
