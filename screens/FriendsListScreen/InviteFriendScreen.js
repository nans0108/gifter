import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Colors';
import { GifterInput } from '../../components';
import { Button } from 'react-native-elements';

export default function InviteFriendScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Invite new friend</Text>
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          label="email"
        />
      </View>
      <View style={styles.buttonPosition}>
        <Button
          onPress={() => props.handleInviteFriend(false)}
          title="Add"
          buttonStyle={{
            backgroundColor: Colors.gifterBlue,
          }}
        />
      </View>
      <View style={styles.buttonPosition}>
        <Button
          onPress={() => props.handleInviteFriend(false)}
          title="Cancel"
          buttonStyle={{
            backgroundColor: Colors.gifterPink,
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: Colors.gifterWhite,
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    color: Colors.gifterPink,
    fontFamily: 'vinc-hand',
    justifyContent: 'flex-end',
  },
  inputPosition: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonPosition: {
    marginTop: 20,
  },
});
