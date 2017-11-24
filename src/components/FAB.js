import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, PixelRatio } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FAB = (props) => {
  const bkground = props.disabled ? 'rgba(0,0,0,0.12)' : props.FABColor;
  const underlay = props.disabled ? 'transparent' : '#000';
  const active = props.disabled ? 1 : 0.85;
  const iconColor = props.disabled ? 'rgba(0,0,0,0.26)' : props.iconColor;
  return (
    <View style={styles.FABContainerStyle} >
      <TouchableHighlight
        style={styles.containerStyle} 
        onPress={props.disabled ? () => null : props.onPress}
        underlayColor={underlay}
        activeOpacity={active}
      >
        <View style={[styles.iconStyle, { backgroundColor: bkground }]}>
          <MaterialIcons 
            name={props.iconName} 
            size={32} 
            color={iconColor} 
          />
        </View>
      </TouchableHighlight>
    </View>
);
};

const styles = {
  FABContainerStyle: {
    position: 'absolute',
    right: 16,
    bottom: 24
  },
  containerStyle: {
    shadowColor: '#000',
    borderRadius: 50,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4
  },
  iconStyle: {
    padding: 16,
    borderRadius: 50,
  }
};

FAB.propTypes = {
  FABColor: PropTypes.string,
  disabled: PropTypes.bool,
  iconColor: PropTypes.string,
  onPress: PropTypes.func
};
FAB.defaultProps = {
  FABColor: '#fff',
  disabled: false,
  iconColor: 'green',
  onPress: null
};

export { FAB };
