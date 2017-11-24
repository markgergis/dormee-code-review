import React from 'react';
import { Svg } from 'expo';
import { View } from 'react-native';

const ArrowBackword = ({ strokeColor }) => (
    <View>
      <Svg
      width={24}
      height={24}
      viewBox="0 0 54.14 49.03"
      >
        <Svg.Path
          fill={strokeColor} d="M51.14,22H8.83L26,4.87a2.6,2.6,0,0,0,.28-3.45,2.5,2.5,0,0,0-3.71-.19L1.38,22.39a3,3,0,0,0,0,4.24L22.54,
          47.8a2.5,2.5,0,0,0,3.67-.15,2.61,2.61,0,0,0-.25-3.5L8.83,27H51a2.6,2.6,0,0,0,2.63-2.24A2.5,2.5,0,0,0,51.14,22Z" 
        />
      </Svg>
    </View>
  );

export { ArrowBackword };
