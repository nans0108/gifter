import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import { Button } from 'react-native-elements';
import SingleListTab from './SingleListTab';
import SingleItemTab from './SingleItemTab';

export default function SingleListScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Choose gift for your friend</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <SingleListTab
          list={props.list}
          owner={props.owner}
        />
        {
          props.list.get('items').size > 0
            ? props.list.get('items').map((item, index) =>
              <SingleItemTab
                key={index}
                item={item}
                activeUserId={props.activeUserId}
                activeListId={props.activeListId}
                changeReservedByIdValue={props.changeReservedByIdValue}
              />
            )
            : <Text style={styles.emptyListText}>
              This list is empty!
            </Text>
        }
      </ScrollView>
      <View style={styles.buttonPosition}>
        <Button
          onPress={() => props.setActiveListId(null)}
          title="Back"
          buttonStyle={{
            backgroundColor: Colors.gifterPink,
          }}
        />
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: Colors.gifterPink,
    fontFamily: 'vinc-hand',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonPosition: {
    marginTop: 40,
  },
  emptyListText: {
    fontSize: 20,
    marginTop: 20,
    color: Colors.gifterLightGrey,
    alignSelf: 'center',
  }
});
