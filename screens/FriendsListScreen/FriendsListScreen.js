import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import SingleFriend from './SingleFriend';
import InviteFriendScreen from './InviteFriendScreen';
import { Button } from 'react-native-elements';
import * as friendActions from '../../actions/friendActions';
import * as listActions from '../../actions/listActions';

function FriendsListScreen(props) {
  const [activeFriendId, setActiveFriendId] = useState(null);
  const [isInviteFriendScreenActive, setIsActiveInviteFriendView] = useState(false);

  useEffect(() => {
    props.getFriends();
  }, []);

  handleSetActiveListId = (friendId) => {
    activeFriendId !== friendId
      ? setActiveFriendId(friendId)
      : setActiveFriendId(null);
  }

  handleInviteFriend = (isActive) => setIsActiveInviteFriendView(isActive);

  return (
    isInviteFriendScreenActive
      ? <InviteFriendScreen handleInviteFriend={handleInviteFriend}/>
      : <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>My friends</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
        {
          props.friends &&
          props.friends.map((friend, index) =>
            <SingleFriend
              key={index}
              friend={friend}
              lists={props.lists}
              setActiveFriendId={handleSetActiveListId}
              activeFriendId={activeFriendId}
              addContibutor={props.addContibutorToList}
              removeContibutor={props.removeContibutorFromList}
            />
          )
        }
        </ScrollView>
        <View style={styles.buttonPosition}>
          <Button
            onPress={() => handleInviteFriend(true)}
            title="Invite friend"
            buttonStyle={{
              backgroundColor: Colors.gifterPink,
            }}
          />
        </View>
      </View>
  );
}

FriendsListScreen.navigationOptions = {
  title: 'Friends',
  headerTintColor: Colors.gifterBlue
};

const mapStateToProps = (state: Object) => ({
    friends: state.friends,
    lists: state.lists,
});

const mapDispachToProps = (dispatch) => bindActionCreators({
  ...friendActions,
  ...listActions,
}, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(FriendsListScreen);

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
  buttonPosition: {
    marginTop: 40,
  },
});
