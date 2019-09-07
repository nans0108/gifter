import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
