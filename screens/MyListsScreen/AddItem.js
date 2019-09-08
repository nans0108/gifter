import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Colors';
import { GifterInput } from '../../components';
import { Button } from 'react-native-elements';

export default function AddItem() {
  return (
    <View style={styles.itemElement}>
      <View style={styles.header}>
        <Text style={styles.text}>Add new element to list</Text>
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          label="name"
        />
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          label="description"
        />
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          label="place to buy"
        />
      </View>
      <View style={styles.buttonPosition}>
        <Button
          onPress={() => console.log('save item')}
          title="Add"
          buttonStyle={{
            backgroundColor: Colors.gifterBlue,
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemElement: {
    borderRadius: 3,
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: Colors.gifterLightGrey,
    backgroundColor: Colors.gifterWhite,
  },
  header: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 16,
    color: Colors.gifterBlue,
  },
  inputPosition: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonPosition: {
    marginTop: 10,
  },
});
