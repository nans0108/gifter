import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

export default function SingleItemTab(props) {
  return (
    <View style={styles.itemElement}>
      <View style={styles.header}>
        <Text style={[styles.itemText, styles.itemName]}>
          Name: {props.item.name}
        </Text>
      </View>
      <Text style={styles.itemText}>
        <Text style={styles.itemTextLabel}>Description: </Text>{props.item.description}
      </Text>
      <Text style={styles.itemText}>
        <Text style={styles.itemTextLabel}>Place to buy: </Text>{props.item.placeToBuy}
      </Text>
      <View style={styles.buttonPosition}>
        {
          props.item.reservedById === props.activeUserId &&
          <Button
            onPress={() => {}}
            title="Cancel reservation"
            buttonStyle={{
              backgroundColor: Colors.gifterRed,
            }}
          />
        }
        {
            props.item.reservedById !== props.activeUserId &&
            (
              !!props.item.reservedById
              ? <Text style={[styles.itemText, styles.reservedInfo]}>
                Already reserved by someone else
              </Text>
              : <Button
                onPress={() => {}}
                title="Reserve item"
                buttonStyle={{
                  backgroundColor: Colors.gifterGreen,
                }}
              />
            )
        }
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
  },
  reservedInfo: {
    color: Colors.gifterRed,
    height: 40,
  },
  buttonPosition: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
