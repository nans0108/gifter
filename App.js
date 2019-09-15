import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, YellowBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import configureStore from './store';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AppNavigator from './navigation/AppNavigator';

const store = configureStore();

export default function App(props) {
  YellowBox.ignoreWarnings(['Remote debugger']);

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoginPageActive, setIsLoginPageActive] = useState(false);

  getView = () => {
    if (!isLoadingComplete && !props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={() => handleFinishLoading(setLoadingComplete)}
        />
      );
    } else if (!isAuthorized && isLoginPageActive) {
      return (
        <View style={styles.container}>
          <LoginScreen
            setIsAuthorized={setIsAuthorized}
            setIsLoginPageActive={setIsLoginPageActive}
          />
        </View>
      );
    } else if (isAuthorized) {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <HomeScreen
            setIsAuthorized={setIsAuthorized}
            setIsLoginPageActive={setIsLoginPageActive}
          />
        </View>
      )
    }
  }

  return (
    <Provider store={store}>
      {getView()}
    </Provider>
  );
}

async function loadResourcesAsync() {
  await Promise.all([
    // load images
    Asset.loadAsync([]),
    Font.loadAsync({
      ...Ionicons.font,
      'vinc-hand': require('./assets/fonts/VINCHAND.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
