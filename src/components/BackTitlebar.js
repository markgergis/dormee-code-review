import React from 'react';
import { 
  Image, 
  View, 
  Dimensions,
  TouchableWithoutFeedback
 } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ArrowBackword } from '../SVG';

const { height } = Dimensions.get('window');
const BackTitlebar = (props) => (
    <View style={{ height: height / 8 }} >
  <Image 
    style={{ flex: 1, zIndex: 1 }} 
    source={require('../assets/pics/shadow.png')} 
  /> 
      <TouchableWithoutFeedback onPress={props.onPress}>
      <Ionicons 
        style={{ 
          position: 'absolute', 
          left: 0, 
          top: 0, 
          margin: 20, 
          zIndex: 2,
          backgroundColor: 'transparent' }} 
        name="md-arrow-back" 
        size={32} 
        color="white" 
      />
      </TouchableWithoutFeedback>
    </View>
  );
export { BackTitlebar };
