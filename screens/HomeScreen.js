import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';

import { LogoText } from '../components';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
          Welcome in application
        </Text>
        <View style={styles.logoPosition}>
          <LogoText/>
        </View>
        <View style={styles.buttonPosition}>
          <Button
            onPress={() => props.setIsAuthorized(true)}
            title="Start"
            buttonStyle={{
              backgroundColor: '#99ccff',
            }}
          />
        </View>
        <Text style={[styles.text, styles.textSmaller]}>
          Please press button to begin
        </Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 36,
    color: '#99ccff',
    fontFamily: 'vinc-hand',
    justifyContent: 'flex-end',
  },
  textSmaller: {
    fontSize: 20,
    color: '#ff99cc',
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  logoPosition: {
    flex: 0.4,
  },
  buttonPosition: {
    flex: 0.4,
    justifyContent: 'flex-end',
  },
});



// Style for differnent systems
// tabBarInfoContainer: {
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   right: 0,
//   ...Platform.select({
//     ios: {
//       shadowColor: 'black',
//       shadowOffset: { width: 0, height: -3 },
//       shadowOpacity: 0.1,
//       shadowRadius: 3,
//     },
//     android: {
//       elevation: 20,
//     },
//   }),
//   alignItems: 'center',
//   backgroundColor: '#fbfbfb',
//   paddingVertical: 20,
// },
