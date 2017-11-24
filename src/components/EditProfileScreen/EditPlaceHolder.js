/**
 * a textInput form for text with title  
 */
import React from 'react';
import { View, Text, TextInput } from 'react-native';

const EditPlaceHolder = (props) => (
  <View style={styles.textInputContainer}>
    <Text>{props.text}</Text>
    <TextInput 
      style={styles.textStyle}
      autoCorrect={false}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
      editable={props.editable}
    />
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
    height: 32,

  },
};

export { EditPlaceHolder };
