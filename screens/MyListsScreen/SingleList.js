import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import SingleItem from './SingleItem';

export default function SingleList(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          { backgroundColor: props.list.isActive ? Colors.gifterBlue : Colors.gifterLightGrey },
          styles.listElement
        ]}
        onPress={() => console.log('show list with id', props.list.id)}
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
        props.list.items.map((item, index) =>
          <SingleItem key={index} item={item}/>
        )
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
