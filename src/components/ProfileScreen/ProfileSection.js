/**
 * a component to hold a profile info in the profile screen
 */
import React from 'react';
import { View, Text } from 'react-native';

const ProfileSection = (props) => (
  <View style={styles.infoCardSectionContainer}>
    <Text style={styles.leftSideText}>{props.title}</Text>
    <Text style={styles.rightSideText}>{props.subTitle}</Text>
  </View>
);

const styles = {
  infoCardSectionContainer: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    marginLeft: 10,
    marginRight: 10,
    position: 'relative'
  }, 
  rightSideText: {
    paddingBottom: 10,
  },
  leftSideText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: 'rgba(0,0,0,0.54)'
  },
};

export { ProfileSection };
