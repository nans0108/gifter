import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Colors from '../../constants/Colors';
import SingleList from './SingleList';

export default function SingleFriend(props) {
  getListElementColor = () => {
    return props.activeFriendId === props.friend.get('id')
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
        onPress={() => props.setActiveFriendId(props.friend.get('id'))}
      >
        <View style={styles.listElementHeader}>
          <Text style={[styles.listText, styles.listName]}>
            {props.friend.get('name')} {props.friend.get('surname')}
          </Text>
        </View>
        <View style={styles.listElementDescription}>
          <Text style={styles.listText}>
            {props.friend.get('email')}
          </Text>
        </View>
      </TouchableOpacity>
      {
        props.activeFriendId === props.friend.get('id') &&
        props.lists.size > 0 &&
        props.lists.map((list, index) =>
          <SingleList
            key={index}
            list={list}
            friendId={props.friend.get('id')}
            addContibutor={props.addContibutor}
            removeContibutor={props.removeContibutor}
          />
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
