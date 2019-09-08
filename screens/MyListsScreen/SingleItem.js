import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SingleItem(props) {
  return (
    <View style={styles.itemElement}>
      <View style={styles.header}>
        <Text style={[styles.itemText, styles.itemName]}>
          Name: {props.item.name}
        </Text>
        <TouchableOpacity
          style={styles.deleteItem}
          onPress={() => console.log('delete item with id', props.item.id)}
        >
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'}
            size={22}
            color={Colors.gifterLightGrey}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.itemText}>
        <Text style={styles.itemTextLabel}>Description: </Text>{props.item.description}
      </Text>
      <Text style={styles.itemText}>
        <Text style={styles.itemTextLabel}>Place to buy: </Text>{props.item.placeToBuy}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteItem: {
    height: 25,
    width: 20,
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
    fontWeight: 'bold',
    color: Colors.gifterBlue,
  },
  itemTextLabel: {
    color: Colors.gifterBlue,
  }
});
