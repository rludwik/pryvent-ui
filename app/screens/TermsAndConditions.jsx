import React, {Component, useState} from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Ionicons, Entypo  } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';
export default class TermsAndConditions extends Component {

  constructor() {
    super();
    this.state = {
      test: null
    }
  }

  render(){    
    return (
      <KeyboardAwareScrollView>
        <View>

        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({

});