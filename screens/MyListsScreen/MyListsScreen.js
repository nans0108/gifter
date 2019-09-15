import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import SingleList from './SingleList';
import * as listActions from '../../actions/listActions';

function MyListsScreen(props) {
  const [activeListId, setActiveListId] = useState(null);

  handleSetActiveListId = (listId) => {
    activeListId !== listId
      ? setActiveListId(listId)
      : setActiveListId(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Mine gifts lists</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {
          props.lists.size !== 0
            ? props.lists.map((list, index) =>
              <SingleList
                key={index}
                list={list}
                setActiveListId={handleSetActiveListId}
                activeListId={activeListId}
                addElement={props.addElementToList}
                removeElement={props.removeElementFromList}
              />
            )
            : <Text style={styles.emptyListText}>
              You don't have any list yet!
            </Text>
        }
      </ScrollView>
    </View>
  );
}

MyListsScreen.navigationOptions = {
  title: 'My Lists',
  headerTintColor: Colors.gifterBlue
};

const mapStateToProps = (state: Object) => ({
    lists: state.lists,
});

const mapDispachToProps = (dispatch) => bindActionCreators({
  ...listActions,
}, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(MyListsScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: Colors.gifterWhite,
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
  emptyListText: {
    fontSize: 20,
    marginTop: 20,
    color: Colors.gifterLightGrey,
    alignSelf: 'center',
  }
});

const myLists = [
  {
    id: 1,
    ownerId: 3,
    name: 'List name',
    description: 'List description',
    dueDate: '12.09.2019',
    isActive: true,
    items: [],
  },
  {
    id: 2,
    ownerId: 3,
    name: 'List name',
    description: 'List description',
    dueDate: '21.11.2019',
    isActive: true,
    items: [
      {
        id: 1,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
      },
      {
        id: 2,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
      },
      {
        id: 3,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
      },
      {
        id: 4,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
      },
    ],
  },
  {
    id: 3,
    ownerId: 3,
    name: 'List name',
    description: 'List description',
    dueDate: '02.02.2018',
    isActive: false,
    items: [],
  },
  {
    id: 4,
    ownerId: 3,
    name: 'List name',
    description: 'List description',
    dueDate: '12.12.2019',
    isActive: true,
    items: [
      {
        id: 1,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
      },
      {
        id: 2,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
      },
    ],
  },
  {
    id: 5,
    ownerId: 3,
    name: 'List name',
    description: 'List description',
    dueDate: '02.07.2019',
    isActive: false,
    items: [
      {
        id: 1,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
      },
      {
        id: 2,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
      },
      {
        id: 3,
        name: 'First name',
        description: '',
        placeToBuy: 'Place to buy this item',
      },
      {
        id: 4,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
      },
      {
        id: 5,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: '',
      },
      {
        id: 6,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
      },
    ],
  }
];
