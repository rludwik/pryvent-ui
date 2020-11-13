import React from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function LoginForm(props) {

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 80, alignContent: 'center'}}>
        <TextInput placeholder="Username" placeholderTextColor="#777" style={styles.input} ></TextInput>
        <TextInput  placeholder="Password" placeholderTextColor="#777" style={styles.input} secureTextEntry={true} ></TextInput>
        <Text>Forgot Password?</Text>
      </View>
      <View style={{marginBottom: 30, alignContent: 'center'}}>
      <AppButton title="Login" />
      <AppButton title="Create Account" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
   height: 40,
   backgroundColor: 'rgba(255,255,255,0.4)',
   marginBottom: 10,
   borderRadius: 6
  },
  button: {
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#083B66",
    borderRadius: 6,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 40,
    textAlign: 'center',
    // backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 10,
    borderRadius: 7
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
})
export default LoginForm;