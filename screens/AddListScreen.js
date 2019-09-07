import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

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
  headerTintColor: Colors.gifterBlue
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.gifterWhite,
  },
});
