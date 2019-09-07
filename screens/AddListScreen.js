import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function AddListScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text> Add List </Text>
      </View>
    </ScrollView>
  );
}

AddListScreen.navigationOptions = {
  title: 'Add List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
