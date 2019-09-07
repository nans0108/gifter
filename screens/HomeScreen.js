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

import { LogoText } from '../components';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.logoPosition}>
          <LogoText/>
        </View>
        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              START
            </Text>
          </TouchableOpacity>
        </View>
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
  helpContainer: {
    marginTop: 15,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
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
