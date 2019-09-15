import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function LogoText() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 86, fontWeight: 'bold', fontFamily: 'vinc-hand', color: Colors.gifterPink }}>
        G
      </Text>
      <Text style={{ fontSize: 82, fontWeight: 'bold', fontFamily: 'vinc-hand', color: Colors.gifterBlue }}>
        ifter
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
