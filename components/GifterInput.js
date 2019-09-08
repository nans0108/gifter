import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

export default function GifterInput(props) {
  const [isFocused, setFocus] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');

  useEffect(() => {
    if (!!props.deafultValue) {
      setTextInputValue(props.deafultValue);
      setFocus(true);
    }
  }, []);

  handleFocus = () => {
    setFocus(true);
  }

  handleBlur = () => {
    if (!textInputValue) {
      setFocus(false)
    }
  }

  onChange = (text) => {
    setTextInputValue(text)
  };

  return (
    <Input
      {...props}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={(text) => onChange(text)}
      placeholder={props.placeholder}
      selectionColor={Colors.gifterDarkGrey}
      labelStyle = {{
        position: 'absolute',
        left: props.iconName && !isFocused ? 35 : 10,
        top: !isFocused ? 8 : -12,
        fontSize: !isFocused ? 18 : 12,
        fontWeight: isFocused ? 'bold' : null,
        color: !isFocused ? Colors.gifterLightGrey : Colors.gifterDarkGrey,
      }}
      inputStyle={{
        color: Colors.gifterDarkGrey,
      }}
      inputContainerStyle={{
        borderBottomColor: Colors.gifterLightGrey,
      }}
      leftIconContainerStyle={{
        marginRight: 5,
        marginLeft: 0,
      }}
      leftIcon={
        props.iconName
          ? <Icon
            name={props.iconName}
            size={props.iconSize}
            color={Colors.loginInputsIcons}
          />
          : null
      }
    />
  );
}
