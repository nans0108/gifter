import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Colors from '../../constants/Colors';
import SingleItem from './SingleItem';
import AddItem from './AddItem';

export default function SingleList(props) {
  getListElementColor = () => {
    return props.activeListId === props.list.id
      ? Colors.gifterPink
      : props.list.isActive
        ? Colors.gifterBlue
        : Colors.gifterLightGrey;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          { backgroundColor: getListElementColor() },
          styles.listElement
        ]}
        onPress={() => props.setActiveListId(props.list.id)}
      >
        <View style={styles.listElementHeader}>
          <Text style={[styles.listText, styles.listName]}>
            {props.list.name}
          </Text>
          <Text style={[styles.listText, styles.listDate]}>
            {props.list.dueDate}
          </Text>
        </View>
        <View style={styles.listElementDescription}>
          <Text style={styles.listText}>
            {props.list.description}
          </Text>
        </View>
      </TouchableOpacity>
      {
        props.activeListId === props.list.id &&
        props.list.items.map((item, index) =>
          <SingleItem key={index} item={item} isPossibleToDeleteItem={props.list.isActive}/>
        )
      }
      {
        props.list.isActive &&
        props.activeListId === props.list.id &&
        <AddItem/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listElement: {
    borderRadius: 3,
    marginTop: 10,
    padding: 10,
    ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
  },
  listElementHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  listElementDescription: {
    marginTop: 10,
  },
  listText: {
    color: Colors.gifterWhite,
    fontSize: 16,
  },
  listName: {
    flex: 0.7,
    fontSize: 20,
  },
  listDate: {
    flex: 0.3,
    alignSelf: 'flex-end',
  },
});
