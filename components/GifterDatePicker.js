import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

export default function GifterDatePicker(props) {
  const [dateValue, setDateValue] = useState(new Date());

  setDate = (newDate) => {
    setDateValue(newDate);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.label}
      </Text>
      <DatePicker
        date={dateValue}
        onDateChange={setDate}
        placeholder="select date"
        format="DD.MM.YYYY"
        style={{
          width: 'auto',
        }}
        iconComponent={
          <Icon
            name="calendar"
            size={22}
            color={Colors.gifterLightGrey}
            style={{
              position: 'absolute',
              left: 2,
              top: 5,
              marginLeft: 0,
              marginRight: 5,
            }}
          />
        }
        customStyles={{
          dateTouchBody: {
            flex: 1,
            borderBottomColor: Colors.gifterLightGrey,
            borderBottomWidth: 1,
          },
          dateTouch: {
            flex: 1,
            backgroundColor: Colors.gifterPink,
          },
          dateInput: {
            borderWidth: 0,
          },
          dateText: {
            color: Colors.gifterDarkGrey,
            marginLeft: 30,
            fontSize: 18,
            alignSelf: 'flex-start',
          },
          btnTextConfirm: {
            color: Colors.gifterDarkGrey,
          },
          btnTextCancel: {
            color: Colors.gifterDarkGrey,
          },
        }}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 'auto',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.gifterDarkGrey,
  },
});
