import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Colors';
import { GifterInput } from '../../components';
import { Button } from 'react-native-elements';

function AddItem(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const elementNameRef = useRef(null);
  const elementDescriptionRef = useRef(null);
  const placeToBuyRef = useRef(null);

  addElement = () => {
    setIsErrorVisible(false);
    !!elementNameRef.current.getValue()
      ? props.addElement({
        name: elementNameRef.current.getValue(),
        description: elementDescriptionRef.current.getValue(),
        placeToBuy: placeToBuyRef.current.getValue(),
      }, props.listId)
        .then(() => {
          elementNameRef.current.clear();
          elementDescriptionRef.current.clear();
          placeToBuyRef.current.clear();
        })
      : setIsErrorVisible(true);
  }

  return (
    <View style={styles.itemElement}>
      <View style={styles.header}>
        <Text style={styles.text}>Add new element to list</Text>
      </View>
      {
        isErrorVisible &&
        <View style={styles.errorMsg}>
          <Text style={styles.errorText}>Element name cannot be empty to save!</Text>
        </View>
      }
      <View style={styles.inputPosition}>
        <GifterInput
          ref={elementNameRef}
          label="name"
          defaultValue="New element"
        />
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          ref={elementDescriptionRef}
          label="description"
          defaultValue="New element description"
        />
      </View>
      <View style={styles.inputPosition}>
        <GifterInput
          ref={placeToBuyRef}
          label="place to buy"
          // defaultValue="New element place to buy"
        />
      </View>
      <View style={styles.buttonPosition}>
        <Button
          onPress={addElement}
          title="Add"
          buttonStyle={{
            backgroundColor: Colors.gifterBlue,
          }}
        />
      </View>
    </View>
  )
}

export default React.memo(AddItem);

const styles = StyleSheet.create({
  itemElement: {
    borderRadius: 3,
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: Colors.gifterLightGrey,
    backgroundColor: Colors.gifterWhite,
  },
  header: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 16,
    color: Colors.gifterBlue,
  },
  inputPosition: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonPosition: {
    marginTop: 10,
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
