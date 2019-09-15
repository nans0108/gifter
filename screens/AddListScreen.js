import React, { useState, createRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { GifterInput, GifterDatePicker } from '../components';
import { Button } from 'react-native-elements';
import * as listActions from '../actions/listActions';

function AddListScreen(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const listNameRef = createRef(null);
  const listDueDateRef = createRef(null);
  const listDescriptionRef = createRef(null);

  addList = () => {
    setIsErrorVisible(false);
    !!listNameRef.current.getValue()
      ? props.addList({
        name: listNameRef.current.getValue(),
        description: listDescriptionRef.current.getValue(),
        dueDate: listDueDateRef.current.getValue(),
      })
      .then(() => {
        clearInputs();
        props.navigation.navigate('MyLists');
      })
      : setIsErrorVisible(true);
  }

  clearInputs = () => {
    listNameRef.current.clear();
    listDescriptionRef.current.clear();
    listDueDateRef.current.clear();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Add new gifts list</Text>
      </View>
      {
        isErrorVisible &&
        <View style={styles.errorMsg}>
          <Text style={styles.errorText}>List name cannot be empty to save!</Text>
        </View>
      }
      <View style={styles.inputPosition}>
        <GifterInput
          ref={listNameRef}
          label="list name"
          defaultValue="New List"
        />
      </View>
      <View style={styles.datePickerContainer}>
        <GifterDatePicker
          ref={listDueDateRef}
          label="due date"
        />
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          ref={listDescriptionRef}
          label="description"
          defaultValue="New List description"
        />
      </View>
      <View style={styles.buttonPosition}>
        <Button
          onPress={addList}
          title="Save"
          buttonStyle={{
            backgroundColor: Colors.gifterBlue,
          }}
        />
      </View>
    </ScrollView>
  );
}

AddListScreen.navigationOptions = {
  title: 'Add List',
  headerTintColor: Colors.gifterBlue
};

const mapStateToProps = (state: Object) => ({
    lists: state.lists,
});

const mapDispachToProps = (dispatch) => bindActionCreators({
  ...listActions,
}, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(AddListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: Colors.gifterWhite,
  },
  header: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 36,
    color: Colors.gifterPink,
    fontFamily: 'vinc-hand',
    justifyContent: 'flex-end',
  },
  datePickerContainer: {
    marginTop: 30,
    justifyContent: 'center',
  },
  inputPosition: {
    marginTop: 30,
  },
  buttonPosition: {
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'flex-end',
  },
  errorMsg: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.gifterRed,
  },
});
