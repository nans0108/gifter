import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function FriendsListScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text> Friends </Text>
      </View>
    </ScrollView>
  );
}

FriendsListScreen.navigationOptions = {
  title: 'Friends',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
