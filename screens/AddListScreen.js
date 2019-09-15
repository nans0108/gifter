import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { GifterInput, GifterDatePicker } from '../components';
import { Button } from 'react-native-elements';
import * as listActions from '../actions/listActions';


function AddListScreen(props) {
  addList = () => {
    props.addList({
      name: 'test',
      description: 'test',
      dueDate: '12.12.2019',
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Add new gifts list</Text>
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          label="list name"
        />
      </View>
      <View style={styles.datePickerContainer}>
        <GifterDatePicker
          label="due date"
        />
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          label="description"
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
});
