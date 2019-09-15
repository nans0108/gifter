import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import FriendsListsScreen from './FriendsListsScreen';
import SingleListScreen from './SingleListScreen';

export default function ChooseGiftScreen() {
  const [activeListId, setActiveListId] = useState(null);

  handleSetActiveListId = (listId) => {
    activeListId !== listId
      ? setActiveListId(listId)
      : setActiveListId(null);
  }

  getActiveList = () => {
    return (
      lists.find(list => list.id === activeListId)
    )
  }

  getOwnerOfActiveList = () => {
    const ownerId = getActiveList().ownerId;
    return (
      friends.find(friend => friend.id === ownerId)
    )
  }

  return (
    <View style={styles.container}>
      {
        activeListId
          ? <SingleListScreen
            list={getActiveList()}
            owner={getOwnerOfActiveList()}
            setActiveListId={handleSetActiveListId}
            activeUserId={1}
          />
          : <FriendsListsScreen
            lists={lists}
            friends={friends}
            setActiveListId={handleSetActiveListId}
          />
      }
    </View>
  );
}

ChooseGiftScreen.navigationOptions = {
  title: 'Choose Gift',
  headerTintColor: Colors.gifterBlue
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: Colors.gifterWhite,
  },
});

const lists = [
  {
    id: 1,
    ownerId: 2,
    name: 'List name',
    description: 'List description',
    dueDate: '12.09.2019',
    isActive: true,
    items: [],
  },
  {
    id: 2,
    ownerId: 7,
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
        reservedById: 6,
      },
      {
        id: 2,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
        reservedById: 3,
      },
      {
        id: 3,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
        reservedById: null,
      },
      {
        id: 4,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
        reservedById: 1,
      },
    ],
  },
  {
    id: 3,
    ownerId: 7,
    name: 'List name',
    description: 'List description',
    dueDate: '02.02.2018',
    isActive: false,
    items: [],
  },
  {
    id: 4,
    ownerId: 2,
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
        reservedById: null,
      },
      {
        id: 2,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
        reservedById: 1,
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
        reservedById: 2,
      },
      {
        id: 2,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
        reservedById: null,
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
        reservedById: 1,
      },
      {
        id: 5,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: '',
        reservedById: 4,
      },
      {
        id: 6,
        name: 'Item name',
        description: 'Item description',
        placeToBuy: 'Place to buy this item',
        reservedById: null,
      },
    ],
  }
];

const friends = [
  {
    id: 1,
    name: 'Janek',
    surname: 'Bliski',
    email: 'jan@bliski.pl',
    invitedToList: [2, 5],
  },
  {
    id: 2,
    name: 'Iwona',
    surname: 'Malostka',
    email: 'iwo.malostka.leszpa@kontakt.pl',
    invitedToList: [3, 4, 5],
  },
  {
    id: 3,
    name: 'Marek',
    surname: 'Kostrzak',
    email: 'maro@karoski.pl',
    invitedToList: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    name: 'Zbigniew',
    surname: 'Mila',
    email: 'zbigi@mila.pl',
    invitedToList: [2, 5],
  },
  {
    id: 5,
    name: 'Ilona',
    surname: 'Kawalczykowska',
    email: 'ilona.kowalczykowska@kontak.pl',
    invitedToList: [],
  },
  {
    id: 6,
    name: 'Małgorzta Anna',
    surname: 'Białoruska Kotrzebaska',
    email: 'mal@kotrzeba.pl',
    invitedToList: [1],
  },
  {
    id: 7,
    name: 'Ania',
    surname: 'Kowalska',
    email: 'anna@kowal.pl',
    invitedToList: [1, 5],
  },
];
