import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import Output from './Output';

export default function App() {

  const info = [
    {
      id: 1,
      name: "Name",
      value: "",
    }, {
      id: 2,
      name: "Email",
      value: "",
    }, {
      id: 3,
      name: "Phone",
      value: "",
    }
  ];

  const [appInfo, setInfo] = useState(info);

  const handleChange = (info, word) => {
    const updatedInfo = appInfo.map(
      i => {
        if (info.id === i.id) {
          i.value = word;
        }
        return i;
      }
    )
    setInfo(updatedInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CPAN 213 - Lab 2</Text>
      <Input info={appInfo} handleChange={handleChange}/>
      <Output info={appInfo}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    padding: 10,
  },
  text: {
    fontSize: 20,
    paddingTop: 200,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
