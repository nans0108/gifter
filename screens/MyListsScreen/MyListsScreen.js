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

  getLists = () => {
    return props.lists.filter((list) => list.get('ownerId') === props.authorization.get('id'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Mine gifts lists</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {
          getLists().size !== 0
            ? getLists().map((list, index) =>
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
    authorization: state.authorization
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
