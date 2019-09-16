import React from 'react';
import moment from 'moment';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SingleList(props) {
  decideOnContributor = () => {
    props.list.get('contributors').includes(props.friendId)
      ? props.removeContibutor(props.friendId, props.list.get('id'))
      : props.addContibutor(props.friendId, props.list.get('id'));
  }

  return (
    <View style={[
      { backgroundColor: props.list.get('isActive') ? Colors.gifterWhite : '#fefefe' },
      styles.itemElement
    ]}>
      <View style={styles.header}>
        <View style={styles.listInfo}>
          <Text style={styles.itemText}>
            <Text style={styles.itemTextLabel}>Name: </Text>{props.list.get('name')}
          </Text>
          <Text style={styles.itemText}>
            <Text style={styles.itemTextLabel}>Due date: </Text>{moment(props.list.get('dueDate')).format('DD.MM.YYYY')}
          </Text>
        </View>
        {
          props.list.get('isActive') &&
          <TouchableOpacity
            style={styles.iconSection}
            onPress={decideOnContributor}
          >
            <Ionicons
              name={
                props.list.get('contributors').includes(props.friendId)
                  ? Platform.OS === 'ios' ? 'ios-remove-circle' : 'md-remove-circle'
                  : Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'
              }
              size={30}
              color={
                props.list.get('contributors').includes(props.friendId)
                  ? Colors.gifterRed
                  : Colors.gifterGreen
              }
            />
          </TouchableOpacity>
        }
      </View>
      <Text style={styles.itemText}>
        <Text style={styles.itemTextLabel}>Description: </Text>{props.list.get('description')}
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
