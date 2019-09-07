import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function ChooseGiftScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text> ChooseGift </Text>
      </View>
    </ScrollView>
  );
}

ChooseGiftScreen.navigationOptions = {
  title: 'Choose Gift',
  headerTintColor: Colors.gifterBlue
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.gifterWhite,
  },
});
