import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default function SingleItem(props) {
  return (
    <View style={styles.itemElement}>
      <Text style={[styles.itemText, styles.itemName]}>
        Name: {props.item.name}
      </Text>
      <Text style={styles.itemText}>
        Description: {props.item.description}
      </Text>
      <Text style={styles.itemText}>
        Place to buy: {props.item.placeToBuy}
      </Text>
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
  itemElementDescription: {
    marginTop: 10,
  },
  itemText: {
    color: Colors.gifterDarkGrey,
    fontSize: 16,
  },
  itemName: {
    fontSize: 18,
    color: Colors.gifterBlue,
  },
});
