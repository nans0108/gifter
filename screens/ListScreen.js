import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function ListScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text> First view </Text>
      </View>
    </ScrollView>
  );
}

ListScreen.navigationOptions = {
  title: 'First view',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
