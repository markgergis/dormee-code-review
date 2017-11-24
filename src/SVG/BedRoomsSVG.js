import React from 'react';
import { Svg } from 'expo';
import { View } from 'react-native';

const BedRoomsSVG = ({ strokeColor }) => (
    <View>
      <Svg
      width={24}
      height={24}
      viewBox="0 0 492.5 492.5"
      >
        <Svg.Path
          fill={strokeColor} d="M184.646,0v21.72H99.704v433.358h31.403V53.123h53.539V492.5l208.15-37.422v-61.235V37.5L184.646,0z M222.938,263.129
          c-6.997,0-12.67-7.381-12.67-16.486c0-9.104,5.673-16.485,12.67-16.485s12.67,7.381,12.67,16.485
          C235.608,255.748,229.935,263.129,222.938,263.129z" 
        />
      </Svg>
    </View>
  );

export { BedRoomsSVG };
