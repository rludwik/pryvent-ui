import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../screens/LoginForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Login(props) {
  
  //TODO: make an onPress function for the registration and login api
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.logoContainer}>
          <Image style={styles.img} source={require('../../assets/pryvent-logo.png')} />
          <Text style={styles.title}>Pryvent</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigation={props.navigation} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FCBFF',
  },
  background:{
    flex: 1,
    flexDirection: 'row',
  },
  formContainer: {
    top: 50
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
    top: 50
  },
  img: {
    resizeMode: 'contain',
    position: 'absolute',
    top:10,
  }
})

