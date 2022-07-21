import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  // находится в настройках андроида при установке выбирать там, где client_type: 3
  webClientId: '695757224814-61ciajro9cldortah1abck7svd0sespa.apps.googleusercontent.com',
});

async function onGoogleButtonPress(setIsLogged) {
  try {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const isAuth = auth().signInWithCredential(googleCredential);
    setIsLogged(true)
    return isAuth
  } catch (err) {
    setIsLogged(false)
  }
}

export const AuthScreen = ({setIsLogged}) => {
  return (
    <View style={styles.auth}>
      <Text>AuthScreen</Text>
      <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress(setIsLogged).then(() => console.log('Signed in with Google!'))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  auth: {
    marginTop: 192,
    paddingHorizontal: 24,
  }
});
