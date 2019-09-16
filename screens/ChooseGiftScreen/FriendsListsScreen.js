import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import SingleListTab from './SingleListTab';

export default function FriendsListsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Choose a friend list</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {
          props.friends.size > 0 &&
          props.lists.map((list, index) =>
            <SingleListTab
              key={index}
              list={list}
              owner={props.friends.find(friend => friend.get('id') === list.get('ownerId'))}
              setActiveListId={props.setActiveListId}
            />
          )
        }
      </ScrollView>
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
});
