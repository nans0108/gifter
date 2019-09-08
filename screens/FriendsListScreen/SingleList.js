import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SingleList(props) {
  return (
    <View style={[
      { backgroundColor: props.list.isActive ? Colors.gifterWhite : '#fefefe' },
      styles.itemElement
    ]}>
      <View style={styles.header}>
        <View style={styles.listInfo}>
          <Text style={styles.itemText}>
            <Text style={styles.itemTextLabel}>Name: </Text>{props.list.name}
          </Text>
          <Text style={styles.itemText}>
            <Text style={styles.itemTextLabel}>Due date: </Text>{props.list.dueDate}
          </Text>
        </View>
        {
          props.list.isActive &&
          <TouchableOpacity
            style={styles.iconSection}
            onPress={() => console.log('delete item with id', props.list.id)}
          >
            <Ionicons
              name={
                props.invitedToList.includes(props.list.id)
                  ? Platform.OS === 'ios' ? 'ios-remove-circle' : 'md-remove-circle'
                  : Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'
              }
              size={30}
              color={
                props.invitedToList.includes(props.list.id)
                  ? Colors.gifterRed
                  : Colors.gifterGreen
              }
            />
          </TouchableOpacity>
        }
      </View>
      <Text style={styles.itemText}>
        <Text style={styles.itemTextLabel}>Description: </Text>{props.list.description}
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
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listInfo: {
    flex: 0.8,
    flexDirection: 'column',
  },
  iconSection: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: null,
  }
});
