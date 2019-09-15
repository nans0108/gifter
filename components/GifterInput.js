import React, { PureComponent } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

class GifterInput extends PureComponent {
  constructor(props: Object) {
    super(props);
    this.state = {
      isFocused: !!this.props.deafultValue ? true : false,
      textInputValue: !!this.props.deafultValue ? this.props.deafultValue : '',
    };
  }

  handleFocus = () => this.setState({isFocused: true})

  handleBlur = () => {
    if (!this.state.textInputValue) {
      this.setState({isFocused: false})
    }
  };

  onChange = (text) => this.setState({textInputValue: text})

  getValue = () => this.state.textInputValue;

  render(): React$Element<*> {
    return (
      <Input
        {...this.props}
        value={this.state.textInputValue}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChangeText={(text) => this.onChange(text)}
        placeholder={this.props.placeholder}
        selectionColor={Colors.gifterDarkGrey}
        labelStyle = {{
          position: 'absolute',
          left: this.props.iconName && !this.state.isFocused ? 35 : 10,
          top: !this.state.isFocused ? 8 : -12,
          fontSize: !this.state.isFocused ? 18 : 12,
          fontWeight: this.state.isFocused ? 'bold' : null,
          color: !this.state.isFocused ? Colors.gifterLightGrey : Colors.gifterDarkGrey,
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
          this.props.iconName
            ? <Icon
              name={this.props.iconName}
              size={this.props.iconSize}
              color={Colors.loginInputsIcons}
            />
            : null
        }
      />
    );
  }
}

export default GifterInput;
