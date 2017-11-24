import React from 'react';
import { Svg } from 'expo';
import { View } from 'react-native';

const SettingsSVG = ({ strokeColor }) => (
    <View>
      <Svg
      width={24}
      height={24}
      viewBox="0 0 512 512" 
      >
        <Svg.Path
          fill={strokeColor} d="M499.844,328l-53.885-45.104C447.333,273.49,448,264.646,448,256s-0.667-17.49-2.042-26.896L499.844,184
          c3.979-3.323,4.99-9.021,2.396-13.51L453.177,85.51c-2.594-4.479-8.021-6.458-12.896-4.688l-65.906,24.083
          c-14.094-11.031-29.75-20.042-46.677-26.844l-12.125-69.24C314.677,3.719,310.24,0,305.063,0h-98.125
          c-5.177,0-9.615,3.719-10.51,8.823l-12.125,69.24c-16.927,6.802-32.583,15.813-46.677,26.844L71.719,80.823
          c-4.844-1.802-10.312,0.198-12.896,4.688L9.76,170.49c-2.594,4.49-1.583,10.188,2.396,13.51l53.885,45.104
          C64.667,238.51,64,247.354,64,256s0.667,17.49,2.042,26.896L12.156,328c-3.979,3.323-4.99,9.021-2.396,13.51l49.063,84.979
          c2.604,4.49,8.083,6.469,12.896,4.688l65.906-24.083c14.094,11.031,29.75,20.042,46.677,26.844l12.125,69.24
          c0.896,5.104,5.333,8.823,10.51,8.823h98.125c5.177,0,9.615-3.719,10.51-8.823l12.125-69.24
          c16.927-6.802,32.583-15.813,46.677-26.844l65.906,24.083c4.844,1.74,10.302-0.198,12.896-4.688l49.063-84.979
          C504.833,337.021,503.823,331.323,499.844,328z M256,362.667c-58.813,0-106.667-47.854-106.667-106.667
          S197.187,149.333,256,149.333S362.667,197.188,362.667,256S314.813,362.667,256,362.667z" 
        />
      </Svg>
    </View>
  );

export { SettingsSVG };
