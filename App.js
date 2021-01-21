import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import Home from './app/screens/Home';
 
const Stack = createStackNavigator();

function App( {navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator> 
          <Stack.Screen options={{ headerShown: false }} name="Login"  component={Login} navigation={navigation}/>
          <Stack.Screen options={{ headerTintColor: '#083B66', title: 'Register New User', headerStyle: { backgroundColor: '#8FCBFF'} }} name="Register" component={Register} navigation={navigation} />
          <Stack.Screen name="Home" component={Home} navigation={navigation} />
        </Stack.Navigator>
      </NavigationContainer>
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


export default App;