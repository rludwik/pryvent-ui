import React, { Component } from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Entypo  } from '@expo/vector-icons';
import getLoginClient from '../apiAuth/loggedinclient';



export default class LoginForm extends Component {

  constructor() {
    super();
    
    this.state = {
      isPasswordShown: false,
      username: null,
      password: null
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleUsername = input => this.setState({ username: input});
  handlePass = input => this.setState({ password: input});

  onButtonPress = async () => {
    const client = await getLoginClient();
    const props = this.props.navigation;
    client
    .post('rest-auth/login/', {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
    console.log('Login successful', response);
    Alert.alert('Login Successful', null, [{ text: 'OK'}],{ cancelable: false });
    props.navigate('Home');

    })
    .catch(error => {
    console.log(error);});
    };

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  handleSubmit = () => {
    if(this.state.username === '' || this.state.username === null){
      Alert.alert('Username field cannot be blank', null, [{ text: 'OK'}], { cancelable: false });
    } else if (this.state.password === '' || this.state.password === null){
      Alert.alert('Password field cannot be blank', null, [{ text: 'OK'}], { cancelable: false });
    } else {
     this.onButtonPress();
    }
};

  render(){
    const AppButton1 = (props) => (
      <TouchableOpacity onPress={this.handleSubmit} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{props.title}</Text>
      </TouchableOpacity>
    );

    const AppButton2 = (props) => (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{props.title}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 80, alignContent: 'center'}}>
          <TextInput onChangeText={this.handleUsername} placeholder="Username" placeholderTextColor="#777" style={styles.input} ></TextInput>
          <TextInput onChangeText={this.handlePass} placeholder="Password" placeholderTextColor="#777" style={styles.input} secureTextEntry={this.state.isPasswordShown ? false : true}></TextInput>
          <View>
            <Text>
              <Entypo onPress={this.togglePasswordVisiblity} name={this.state.isPasswordShown ? 'eye' : 'eye-with-line'} size={20} color='black' />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Text>Forgot Password?</Text>
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 180, alignContent: 'center'}}>
        <AppButton1 title="Login" navigation={this.props.navigation} nextPage='Home'/>
        <AppButton2 title="Create Account" navigation={this.props.navigation} nextPage='Register'/>
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignContent: 'center',
    justifyContent: 'center',
    top: 10
  },
  input: {
   height: 50,
   backgroundColor: 'rgba(255,255,255,0.75)',
   marginBottom: 10,
   borderRadius: 100,
   paddingLeft: 10
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#083B66",
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 40,
    textAlign: 'center',
    // backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 10,
    borderRadius: 50
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
})