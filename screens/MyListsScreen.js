import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function MyListsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>My Lists</Text>
      </View>
    </ScrollView>
  );
}

MyListsScreen.navigationOptions = {
  title: 'My Lists',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
