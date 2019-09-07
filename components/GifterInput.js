import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

export default function GifterInput(props) {
  return (
    <Input
      {...props}
      placeholder={props.placeholder}
      selectionColor={Colors.gifterDarkGrey}
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
