import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text> Third view </Text>
      </View>
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Third view',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
