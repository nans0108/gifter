import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import { Button } from 'react-native-elements';

export default function SingleListScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Choose gift for your friend</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>

      </ScrollView>
      <View style={styles.buttonPosition}>
        <Button
          onPress={() => props.setActiveListId(null)}
          title="Back"
          buttonStyle={{
            backgroundColor: Colors.gifterPink,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    color: Colors.gifterPink,
    fontFamily: 'vinc-hand',
    justifyContent: 'flex-end',
  },
  buttonPosition: {
    marginTop: 40,
  },
});
