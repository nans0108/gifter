import React, { createRef, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';
import { LogoText, GifterInput } from '../components';
import * as authorizationActions from '../actions/authorizationActions';

function LoginScreen(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const emailRef = createRef(null);
  const passwordRef = createRef(null);

  login = () => {
    props.login({
      email: emailRef.current.getValue(),
      password: passwordRef.current.getValue(),
    })
    .then(() => {
      props.setIsAuthorized(true);
      props.setIsLoginPageActive(false);
    })
    .catch(() => setIsErrorVisible(true));
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoPosition}>
        <LogoText/>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>Login to application</Text>
      </View>
      {
        isErrorVisible &&
        <View style={styles.errorMsg}>
          <Text style={styles.errorText}>User with this email doesn't exist</Text>
        </View>
      }
      <View style={styles.inputPosition}>
        <GifterInput
          ref={emailRef}
          label="email"
          keyboardType="email-address"
          iconName="envelope"
          iconSize={20}
        />
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          ref={passwordRef}
          label="password"
          secureTextEntry
          iconName="lock"
          iconSize={22}
          textContentType="oneTimeCode"
        />
      </View>
      <View style={styles.buttonPosition}>
        <Button
          onPress={login}
          title="Login"
          buttonStyle={{
            backgroundColor: Colors.gifterBlue,
          }}
        />
      </View>
      <View style={styles.registerInfo}></View>
      {/* <TouchableOpacity style={styles.registerInfo} onPress={() => {}}>
        <Text style={styles.registerText}>
          Register
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}

const mapStateToProps = (state: Object) => ({
    authorization: state.authorization,
});

const mapDispachToProps = (dispatch) => bindActionCreators({
  ...authorizationActions,
}, dispatch);


export default connect(mapStateToProps, mapDispachToProps)(LoginScreen);

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
    flex: 0.1,
    marginTop: 40,
  },
  registerInfo: {
    flex: 0.1,
    marginBottom: 40,
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.gifterLightGrey,
  },
  logoPosition: {
    flex: 0.3,
    alignItems: 'center',
  },
  errorMsg: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.gifterRed,
  },
});
