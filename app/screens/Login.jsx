import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, Image } from 'react-native';
import LoginForm from '../screens/LoginForm'

export default function Login(props) {
  
  //TODO: make an onPress function for the registration and login api
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.img} source={require('../../assets/pryvent-logo.png')} />
        <Text style={styles.title}>Pryvent</Text>
      </View>
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: '#083B66',
    marginTop: 0,
    width: 360,
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 210,
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  img: {
    resizeMode: 'contain',
    position: 'absolute',
    top:40,
  }
})

