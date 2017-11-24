import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

const EditPicker = (props) => (
  <View style={styles.textInputContainer}>
    <Text>{props.title}</Text>
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View>
        <Text
          style={styles.textStyle}
        >
        {props.value}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const styles = {
  textInputContainer: {
    paddingTop: 8, 
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(0,0,0,0.54)',
    flex: 1,
  },
  textStyle: {
    paddingHorizontal: 8,
    fontSize: 14,
    marginVertical: 8, 
    height: 16
  },
};

export { EditPicker };
