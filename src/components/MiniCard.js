import React, { Component } from 'react';
import { Text, 
  Image, 
  View, 
  TouchableWithoutFeedback,
 } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Card, Button, Divider } from 'react-native-elements';

class MiniCard extends Component {
  render() {
    const { 
      title = '', 
      description = '', 
      status = '', 
      imageSource,
      rightButtonName, 
      leftbuttonName, 
      mapCard,
      onPress,
      onCardPress 
    } = this.props;
    const { 
      imageContainer, 
      body, 
      textContainer, 
      text, 
      divider,
      buttonContainer,
      button,
      arrowDown
    } = styles;
    
    return (
      
      <Card flexDirection='row' containerStyle={{ padding: 0 }} >
        <TouchableWithoutFeedback onPress={onCardPress}>
        <View flexDirection='row' style={{ flex: 1 }} >
        <Image style={imageContainer}source={{ uri: imageSource }} />
        <View style={body} >
          <View style={textContainer}>
            { title !== '' ?
            (<Text style={text} >{title}</Text>) : null
            }
            { description !== '' ?
              (<Text style={text} >{description}</Text>) : null
            }
            { status !== '' ?
              (<View flexDirection='row'>
                <Text style={{ fontSize: 18, margin: 2, marginRight: -2 }} >Status: </Text>
                <Text style={{ fontSize: 18, margin: 2, fontWeight: 'bold' }} >{status}</Text>
                </View>
              ) : null
            }
          </View>
          {
            mapCard ? null : (
              <View>
                <Divider style={divider} />
                <View style={buttonContainer}>
                  <Button 
                  backgroundColor='rgba(0,0,0,0)' 
                  buttonStyle={button} 
                  color='#000' 
                  title={leftbuttonName} 
                  />
                  <Button 
                  backgroundColor='rgba(0,0,0,0)' 
                  buttonStyle={button} 
                  color='#000' 
                  title={rightButtonName} 
                  />
                </View>
              </View>
            )
          } 
        </View>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={arrowDown}>
            <Entypo name="chevron-down" size={32} color="green" />
          </View>
        </TouchableWithoutFeedback>
        </View>
        </TouchableWithoutFeedback>
      </Card>

    );
  }
}

const styles = {
  imageContainer: {
    width: 100, 
    height: 100, 
    backgroundColor: '#000', 
    margin: 8
  },
  body: {
    flex: 1, 
    flexDirection: 'column', 
    marginTop: 16,
    marginRight: 8 
  },
  text: { 
    fontSize: 18, 
    margin: 2 
  },
  divider: { 
    backgroundColor: 'rgba(0, 0, 0, .12)', 
    margin: 8 
  },
  textContainer: {
    paddingLeft: 8 
  },
  button: {
    padding: -8, 
    marginRight: -8
 },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 8
  },
  arrowDown: { 
    alignItems: 'flex-end', 
    padding: 8 
  }
};
export { MiniCard };
