import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import SingleFriend from './SingleFriend';

export default function FriendsListScreen() {
  const [activeFriendId, setActiveFriendId] = useState(null);

  handleSetActiveListId = (friendId) => {
    activeFriendId !== friendId
      ? setActiveFriendId(friendId)
      : setActiveFriendId(null);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>My friends</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
      {
        friendsList.map((friend, index) =>
          <SingleFriend
            key={index}
            friend={friend}
            setActiveFriendId={handleSetActiveListId}
            activeFriendId={activeFriendId}
          />
        )
      }
      </ScrollView>
    </View>
  );
}

FriendsListScreen.navigationOptions = {
  title: 'Friends',
  headerTintColor: Colors.gifterBlue
};

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
});

const friendsList = [
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
