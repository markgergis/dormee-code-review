import React from 'react';
import { View, Text, TextInput } from 'react-native';

const EditPhonePlaceholder = (props) => (
  <View style={styles.textInputContainer}>
    <Text>{props.title}</Text>
    <View style={styles.phonePreContainer}>
      <View style={styles.phonePreStyle}>
        <Text>{props.numberPre}</Text>
      </View>
      <TextInput 
        style={styles.textStyle}
        autoCorrect={false}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
      />
    </View>            
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
    width: '75%',
  },
  phonePreContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  phonePreStyle: { 
    borderWidth: 1, 
    borderRadius: 6, 
    paddingHorizontal: 8 
  }
};

export { EditPhonePlaceholder };
