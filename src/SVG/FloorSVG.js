import React from 'react';
import { Svg } from 'expo';
import { View } from 'react-native';

const FloorSVG = ({ strokeColor }) => (
    <View>
      <Svg
      width={24}
      height={24}
      viewBox="0 0 453.946 453.946"
      >
        <Svg.Path
          fill={strokeColor} d="M453.946,42.138V72.4h-129.12v109.396H215.879v121.064H102.895v108.947H0v-30.264h72.631V272.599h112.984V151.534h108.947
          V42.138H453.946z M173.419,85.298L90.541,96.132c-1.212,0.154-2.155,1.103-2.323,2.308c-0.171,1.203,0.482,2.373,1.596,2.861
          l33.277,14.431l-55.218,55.212c-1.052,1.064-1.058,2.772,0,3.831l19.115,19.115c1.052,1.058,2.767,1.052,3.824,0l55.219-55.219
          l14.431,33.272c0.481,1.111,1.652,1.773,2.855,1.602c0.605-0.089,1.138-0.37,1.537-0.769c0.408-0.405,0.686-0.949,0.768-1.561
          l10.835-82.881c0.109-0.833-0.169-1.664-0.769-2.261C175.097,85.487,174.255,85.197,173.419,85.298z" 
        />
      </Svg>
    </View>
  );

export { FloorSVG };