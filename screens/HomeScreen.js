import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// import utils text - can use it to make utils button, input and so one
import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>GIFTER</MonoText>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              START
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
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
