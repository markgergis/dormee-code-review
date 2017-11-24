import React from 'react';
import { Svg } from 'expo';
import { View } from 'react-native';

const ApartmentSVG = ({ strokeColor }) => (
    <View>
      <Svg
      width={24}
      height={24}
      viewBox="0 0 512 512"
      >
        <Svg.Path
          fill={strokeColor} d="M398.663,0H113.337c-10.695,0-19.366,8.671-19.366,19.366v473.267c0,10.695,8.671,19.366,19.366,19.366h90.752V400.072
          c0-10.695,8.671-19.366,19.366-19.366h65.09c10.695,0,19.366,8.671,19.366,19.366V512h90.752c10.695,0,19.366-8.671,19.366-19.366
          V19.366C418.03,8.671,409.359,0,398.663,0z M203.066,305.059c0,10.695-8.671,19.366-19.366,19.366s-19.366-8.671-19.366-19.366
          v-24.531c0-10.695,8.671-19.366,19.366-19.366s19.366,8.671,19.366,19.366V305.059z M203.066,209.519
          c0,10.695-8.671,19.366-19.366,19.366s-19.366-8.671-19.366-19.366v-24.531c0-10.695,8.671-19.366,19.366-19.366
          s19.366,8.671,19.366,19.366V209.519z M203.066,113.978c0,10.695-8.671,19.366-19.366,19.366s-19.366-8.671-19.366-19.366V89.448
          c0-10.695,8.671-19.366,19.366-19.366s19.366,8.671,19.366,19.366V113.978z M275.367,305.059c0,10.695-8.671,19.366-19.366,19.366
          c-10.695,0-19.366-8.671-19.366-19.366v-24.531c0-10.695,8.671-19.366,19.366-19.366c10.695,0,19.366,8.671,19.366,19.366V305.059
          z M275.367,209.519c0,10.695-8.671,19.366-19.366,19.366c-10.695,0-19.366-8.671-19.366-19.366v-24.531
          c0-10.695,8.671-19.366,19.366-19.366c10.695,0,19.366,8.671,19.366,19.366V209.519z M275.367,113.978
          c0,10.695-8.671,19.366-19.366,19.366c-10.695,0-19.366-8.671-19.366-19.366V89.448c0-10.695,8.671-19.366,19.366-19.366
          c10.695,0,19.366,8.671,19.366,19.366V113.978z M347.668,305.059c0,10.695-8.671,19.366-19.366,19.366
          s-19.366-8.671-19.366-19.366v-24.531c0-10.695,8.671-19.366,19.366-19.366s19.366,8.671,19.366,19.366V305.059z M347.668,209.519
          c0,10.695-8.671,19.366-19.366,19.366s-19.366-8.671-19.366-19.366v-24.531c0-10.695,8.671-19.366,19.366-19.366
          s19.366,8.671,19.366,19.366V209.519z M347.668,113.978c0,10.695-8.671,19.366-19.366,19.366s-19.366-8.671-19.366-19.366V89.448
          c0-10.695,8.671-19.366,19.366-19.366s19.366,8.671,19.366,19.366V113.978z"
        />
      </Svg>
    </View>
  );

export { ApartmentSVG };
