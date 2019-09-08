import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Colors from '../../constants/Colors';
import SingleList from './SingleList';

export default function SingleFriend(props) {
  getListElementColor = () => {
    return props.activeFriendId === props.friend.id
      ? Colors.gifterPink
      : Colors.gifterBlue
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          { backgroundColor: getListElementColor() },
          styles.listElement
        ]}
        onPress={() => props.setActiveFriendId(props.friend.id)}
      >
        <View style={styles.listElementHeader}>
          <Text style={[styles.listText, styles.listName]}>
            {props.friend.name} {props.friend.surname}
          </Text>
        </View>
        <View style={styles.listElementDescription}>
          <Text style={styles.listText}>
            {props.friend.email}
          </Text>
        </View>
      </TouchableOpacity>
      {
        props.activeFriendId === props.friend.id &&
        myLists.map((list, index) =>
          <SingleList key={index} list={list} invitedToList={props.friend.invitedToList}/>
        )
      }
    </View>
  );
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

const myLists = [
  {
    id: 1,
    ownerId: 3,
    name: 'First name',
    description: 'First description',
    dueDate: '12.09.2019',
    isActive: true,
  },
  {
    id: 2,
    ownerId: 3,
    name: 'Second name',
    description: 'Second description, this element should have longer description to chech if its display in proper way',
    dueDate: '21.11.2019',
    isActive: true,
  },
  {
    id: 3,
    ownerId: 3,
    name: 'Third name',
    description: 'Third description',
    dueDate: '02.02.2018',
    isActive: false,
  },
  {
    id: 4,
    ownerId: 3,
    name: 'Fourth name',
    description: '',
    dueDate: '12.12.2019',
    isActive: true,
  },
  {
    id: 5,
    ownerId: 3,
    name: 'Fifth name',
    description: 'Fifth description',
    dueDate: '02.07.2019',
    isActive: false,
  }
];
