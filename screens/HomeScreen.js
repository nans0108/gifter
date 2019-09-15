import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/Colors';
import { LogoText } from '../components';
import * as authorizationActions from '../actions/authorizationActions';

function HomeScreen(props) {
  goToLoginPage = () => {
    !!props.authorization.get('id')
      ? props.setIsAuthorized(true)
      : props.setIsLoginPageActive(true);
  }

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
            onPress={goToLoginPage}
            title="Start"
            buttonStyle={{
              backgroundColor: Colors.gifterBlue,
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

const mapStateToProps = (state: Object) => ({
    authorization: state.authorization,
});

const mapDispachToProps = (dispatch) => bindActionCreators({
  ...authorizationActions,
}, dispatch);


export default connect(mapStateToProps, mapDispachToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gifterWhite,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 36,
    color: Colors.gifterBlue,
    fontFamily: 'vinc-hand',
    justifyContent: 'flex-end',
  },
  textSmaller: {
    fontSize: 20,
    color: Colors.gifterPink,
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
