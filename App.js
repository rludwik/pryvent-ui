import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import Login from './app/screens/Login'

export default function App() {

  //TODO: Make an onPress event that fires data to the API

  return (
    <SafeAreaView style={styles.container}>
          <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FCBFF',
    alignItems: 'baseline',
    flexDirection: "row",
    justifyContent: 'space-evenly',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  }
});
