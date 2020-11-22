import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [usr, onChangeusr] = React.useState('username');
  const [pswd, onChangepswd] = React.useState('Password');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Image source={logo} style={styles.logo}></Image>
        <TextInput
          onChangeText={text => onChangeusr(text)}
          value={usr}
          style={styles.input}
        />
        <TextInput
          onChangeText={text => onChangepswd(text)}
          value={pswd}
          style={styles.input}
        />
        <TouchableOpacity style={styles.login}>
          <Button
            title="Login"
            color="#5CCCA5"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}


const logo = require('./assets/img/logo-lg.png');
const image = require('./assets/img/bg-login.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  logo: {
    width: '80%',
    resizeMode: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  text: {
    marginTop: 10,
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  input: {
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    borderColor: '#5CCCA5',
    borderWidth: 3,
    borderRadius: 15,
  },
  login: {
    marginLeft: 30,
    marginRight: 30,
  },
});
