import React, {Component} from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Entypo  } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import getLoginClient from '../apiAuth/loggedinclient';
export default class LoginForm extends Component {

  constructor() {
    super();

    this.state = {
      isPasswordShown: false,
      checkMessage: 'Error',
      username: null,
      password: null,
      repassword: null,
      phone1: null,
      phone2: null,
      phone3: null,
      email: null,
      reEmail: null,
      isChecked: false,
      backToLogin: false,
      placeholderTxtClr: 'rgba(200 , 200, 200, 0.5)'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleRepass = this.handleRepass.bind(this);
    this.handlePhone1 = this.handlePhone1.bind(this);
    this.handlePhone2 = this.handlePhone2.bind(this);
    this.handlePhone3 = this.handlePhone3.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleReEmail = this.handleReEmail.bind(this);
    this.resetPasswords = this.resetPasswords.bind(this);
  }

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  resetPasswords = () => {
    this.setState({
      password: null,
      repassword: null
    })
  }

  onButtonPress = async () => {
    const client = await getLoginClient();
    const props = this.props.navigation;
    client
    .post('new-user/', {
      username: this.state.username,
      password: this.state.password,
      phoneNumbers: [this.state.phone1, this.state.phone2,this.state.phone3],
      email: this.state.email
    })
    .then(response => {
      Alert.alert('Account created successfully', null, [{ text: 'OK'}],{ cancelable: false });
      props.navigate('Login');
    })
    .catch(error => {
    console.log(error);});
  };
  
  handleSubmit = () => {
    if(
      this.state.username === '' || 
      this.state.username === null ||
      this.state.password === '' || 
      this.state.password === null ||
      this.state.repassword === '' || 
      this.state.repassword === null ||
      this.state.email === '' || 
      this.state.email === null ||
      this.state.reEmail === '' || 
      this.state.reEmail === null
    ){
      Alert.alert('Some fields are still blank', null, [{ text: 'OK'}], { cancelable: false });
    } else if(this.state.password !== this.state.repassword) {
      Alert.alert('Passwords do not match', null, [{ text: 'OK'}], { cancelable: false });
    } else if (this.state.email !== this.state.reEmail) {
      Alert.alert('Emails do not match', null, [{ text: 'OK'}], { cancelable: false });
    } else {
      //The url is https://nameofthedomain.net/api/v1/contactSupport
      this.onButtonPress();
    }
  };

  handleUsername = input => this.setState({ username: input});
  handlePass = input => this.setState({ password: input});
  handleRepass = input => this.setState({ repassword: input});
  handlePhone1 = input =>this.setState({ phone1: input});
  handlePhone2 = input => this.setState({ phone2: input});
  handlePhone3 = input => this.setState({ phone3: input});
  handleEmail = input => this.setState({ email: input});
  handleReEmail = input => this.setState({ reEmail: input});

  render(){
    const { isPasswordShown } = this.state;
    const AppButton1 = (props) => (
      <TouchableOpacity disabled={props.disabled} onPress={this.handleSubmit} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{props.title}</Text>
      </TouchableOpacity>
    );

    const AppButton2 = (props) => (
      <TouchableOpacity disabled={props.disabled} onPress={() => props.navigation.navigate(props.nextPage)} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{props.title}</Text>
      </TouchableOpacity>
    );
    
    return (
      <KeyboardAwareScrollView style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <TextInput onChangeText={this.handleUsername} placeholder="Username" placeholderTextColor={this.state.placeholderTxtClr} style={styles.input} />
          <View style={styles.searchSection}>
            <TextInput onChangeText={this.handlePass} placeholder="Password" placeholderTextColor={this.state.placeholderTxtClr} style={styles.input} secureTextEntry={isPasswordShown ? false : true}/>
            <TextInput onChangeText={this.handleRepass} placeholder="Confirm Password" placeholderTextColor={this.state.placeholderTxtClr} style={styles.input} secureTextEntry={isPasswordShown ? false : true} />
            <Entypo style={styles.searchIcon} onPress={this.togglePasswordVisiblity} name={isPasswordShown ? 'eye' : 'eye-with-line'} size={25} color='rgba(230, 230, 230, 1)' />
          </View>
          <TextInput onChangeText={this.handlePhone1} placeholder="Phone number 1" placeholderTextColor={this.state.placeholderTxtClr} style={styles.input} />
          <TextInput onChangeText={this.handlePhone2} placeholder="Phone number 2" placeholderTextColor={this.state.placeholderTxtClr} style={styles.input} />
          <TextInput onChangeText={this.handlePhone3} placeholder="Phone number 3" placeholderTextColor={this.state.placeholderTxtClr} style={styles.input} />
          <TextInput onChangeText={this.handleEmail} placeholder="Email Address" placeholderTextColor={this.state.placeholderTxtClr} style={styles.input} />
          <TextInput onChangeText={this.handleReEmail} placeholder="Confirm Email Address" placeholderTextColor={this.state.placeholderTxtClr} style={styles.input} />
          {/* <CheckBox tintColor='white' style={{flex: 1, padding: 10}} onClick={()=>{this.setState({isChecked:!this.state.isChecked})}} isChecked={this.state.isChecked} rightText={"Read our terms and conditions"}/> */}
          <Checkbox color='white' status='checked' style={{borderColor: 'white', flex: 1, padding: 10}} onClick={()=>{this.setState({isChecked:!this.state.isChecked})}} isChecked={this.state.isChecked}/>
          <View style={{marginBottom: 180, alignContent: 'center', top: 50}}>
            <AppButton1 disabled={!this.state.isChecked} title={this.state.isChecked ? 'Create Account' : 'Please Accept Terms and Conditions'}  navigation={this.props.navigation} nextPage='Login'/>
            <AppButton2 title="Return to Login Page" navigation={this.props.navigation} nextPage='Login'/>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    padding: 15,
    alignContent: 'center',
    backgroundColor: 'rgba(8, 59, 102, 1)',
    flex: 1,
  },
  innerContainer: {
    top: 30,
    padding: 15,
    alignContent: 'center',
    flex: 1
  },
  input: {
   height: 45,
   color: 'rgba(230, 230, 230, 1)',
  //  backgroundColor: 'rgba(255,255,255,0.75)',
   backgroundColor: 'rgba(255,255,255,0)',
   marginBottom: 15,
   paddingLeft: 20,
   borderRadius: 10,
   fontSize: 16,
   borderBottomWidth :1,
   borderBottomColor: 'rgba(230 , 230, 230, 0.9)',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#083B66",
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 45,
    textAlign: 'center',
    marginBottom: 10,
    borderRadius: 50,
    fontSize: 16
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
  searchIcon: {
    position: 'absolute',
    left: '85%',
    top: '7%'
  },
  searchSection: {
    position: 'relative'
  },
})