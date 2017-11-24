import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';

const ProfileImage = (props) => {
  const { 
    containerStyle, 
    nameContainerStyle, 
    nameStyle, 
    editProfileContainerStyle,
    profileTextStyle,
    imageStyle,
    imageContainerStyle 
  } = styles;
  return (
  <View style={containerStyle}>
    <View style={imageContainerStyle}>
      <Image 
      style={imageStyle}
      source={{ uri: props.uri }} 
      />
    </View>
    <View style={nameContainerStyle}>
    <Text style={nameStyle}>{props.name}</Text>
    </View>

    <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={editProfileContainerStyle}>
        <Text style={profileTextStyle}>EDIT PROFILE</Text>
    </View>
    </TouchableWithoutFeedback>
  </View>
  );
};

const styles = {
  nameStyle: {
    fontSize: 20,
    color: 'white',
  },
  nameContainerStyle: {
    paddingTop: 20,
    paddingBottom: 15,
    alignItems: 'center'
  },
  profileTextStyle: {
    fontSize: 13, 
    color: 'gray',
  },
  editProfileContainerStyle: {
    paddingBottom: 15,
    alignItems: 'center'
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    paddingTop: 48,
    marginRight: 10 
  },
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#20376B',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#20376B',
    position: 'relative'
  },
  imageStyle: {
    height: 130,
    width: 130,
    borderRadius: 65
  },
};


export { ProfileImage };
