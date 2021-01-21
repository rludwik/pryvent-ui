import React, { Component } from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { Ionicons, Entypo  } from '@expo/vector-icons';

export default class LoginForm extends Component {

  constructor() {
    super();
    
    this.state = {
      isPasswordShown: false
    };
  }

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render(){
    const AppButton = (props) => (
      <TouchableOpacity onPress={() => props.navigation.navigate(props.nextPage)} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{props.title}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 80, alignContent: 'center'}}>
          <TextInput placeholder="Username" placeholderTextColor="#777" style={styles.input} ></TextInput>
          <TextInput  placeholder="Password" placeholderTextColor="#777" style={styles.input} secureTextEntry={this.state.isPasswordShown ? false : true}></TextInput>
          <View>
            <Text>
              <Entypo onPress={this.togglePasswordVisiblity} name={this.state.isPasswordShown ? 'eye' : 'eye-with-line'} size={25} color='black' />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Text>Forgot Password?</Text>
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 180, alignContent: 'center'}}>
        <AppButton title="Login" navigation={this.props.navigation} nextPage='Home'/>
        <AppButton title="Create Account" navigation={this.props.navigation} nextPage='Register'/>
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
   height: 40,
   backgroundColor: 'rgba(255,255,255,0.75)',
   marginBottom: 10,
   borderRadius: 6,
   paddingLeft: 10
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