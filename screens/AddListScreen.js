import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { GifterInput, GifterDatePicker } from '../components';

export default function AddListScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}> Add new gifts list </Text>
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          label="list name"
        />
      </View>
      <View style={styles.datePickerContainer}>
        <GifterDatePicker
          label="choose date"
        />
      </View>
    </ScrollView>
  );
}

AddListScreen.navigationOptions = {
  title: 'Add List',
  headerTintColor: Colors.gifterBlue
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.gifterWhite,
  },
  header: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 36,
    color: Colors.gifterPink,
    fontFamily: 'vinc-hand',
    justifyContent: 'flex-end',
  },
  datePickerContainer: {
    justifyContent: 'center',
  }
});
