import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text> Second view </Text>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Second view',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
