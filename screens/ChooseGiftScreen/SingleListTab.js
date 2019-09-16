import React from 'react';
import moment from 'moment';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Colors from '../../constants/Colors';

export default function SingleListTab(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          { backgroundColor: props.list.get('isActive')
            ? Colors.gifterBlue
            : Colors.gifterLightGrey
          },
          styles.listElement
        ]}
        onPress={() => props.setActiveListId && props.setActiveListId(props.list.get('id'))}
      >
        <View style={styles.listElementHeader}>
          <Text style={[styles.listText, styles.listName]}>
            {props.list.get('name')}
          </Text>
          <Text style={[styles.listText, styles.listDate]}>
            {moment(props.list.get('dueDate')).format('DD.MM.YYYY')}
          </Text>
        </View>
        <View style={styles.listElementDescription}>
          <Text style={styles.listText}>
            {props.list.get('description')}
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.listElementOwner}>
          <Text style={styles.listText}>
            {props.owner.get('name')} {props.owner.get('surname')}
          </Text>
        </View>
      </TouchableOpacity>
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
  listElementOwner: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  line: {
    justifyContent: 'center',
    flex: 0.8,
    borderWidth: 0.5,
    borderColor: Colors.gifterWhite,
    marginTop: 10,
  }
});
