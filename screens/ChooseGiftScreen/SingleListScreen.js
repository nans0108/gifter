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
          props.list.items.length > 0
            ? props.list.items.map((item, index) =>
              <SingleItemTab
                key={index}
                item={item}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
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
