import React from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';
import { LogoText, GifterInput } from '../components';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoPosition}>
        <LogoText/>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>Register to application</Text>
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          placeholder="email"
          keyboardType="email-address"
          iconName="envelope"
          iconSize={20}
        />
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          placeholder="password"
          secureTextEntry
          iconName="lock"
          iconSize={22}
          textContentType="oneTimeCode"
        />
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          placeholder="confirm password"
          secureTextEntry
          iconName="lock"
          iconSize={22}
          textContentType="oneTimeCode"
        />
      </View>
      <View style={styles.buttonPosition}>
        <Button
          onPress={() => {}}
          title="Register"
          buttonStyle={{
            backgroundColor: Colors.gifterBlue,
          }}
        />
      </View>
      <TouchableOpacity style={styles.loginInfo} onPress={() => {}}>
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: Colors.gifterWhite,
  },
  header: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 36,
    color: Colors.gifterBlue,
    fontFamily: 'vinc-hand',
    justifyContent: 'flex-end',
  },
  inputPosition: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonPosition: {
    flex: 0.15,
    marginTop: 40,
  },
  loginInfo: {
    marginTop: 10,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.gifterLightGrey,
  },
  logoPosition: {
    flex: 0.3,
    alignItems: 'center',
  },
});
