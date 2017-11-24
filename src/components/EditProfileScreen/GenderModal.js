import React, { Component } from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, Animated, Picker } from 'react-native';

class GenderModal extends Component {

state = {
    modalVisible2: false,
    opacity2: new Animated.Value(0.0),
    gender: this.props.gender
}
  
onDonePressed() {
  this.animate(false);
  this.props.genderChanged(this.state.gender);
}

setModalVisible(visible) {
    this.setState({ modalVisible2: visible });
}
animate(bool) {
  if (bool) {
    Animated.timing(this.state.opacity2, {
      duration: 200,
      toValue: 0.3
    }).start();
  } else {
      this.setState({ gender: this.props.gender });
      Animated.timing(this.state.opacity2, {
        delay: 50,
        duration: 200,
        toValue: 0.0
      }).start(() => { this.setModalVisible(false); });
  }
}

renderPickerScreen() {
  return (
    <View 
    style={{ 
      position: 'absolute',
      left: 0,
      justifyContent: 'center', 
      right: 0,
      flex: 1,
      bottom: 0,
      zIndex: 2,
      backgroundColor: '#fff' }}
    >
    <View 
    style={{ 
      height: 42, 
      alignItems: 'flex-end', 
      backgroundColor: 'rgba(0,0,0,0.12)', 
      justifyContent: 'center' }}
    >
      <TouchableWithoutFeedback onPress={this.onDonePressed.bind(this)}>
        <View>
          <Text style={{ marginHorizontal: 16, fontSize: 16 }}>Done</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    <View>
      <Picker
      selectedValue={this.state.gender}
      onValueChange={(gender, itemIndex) => this.setState({ gender })}
      >
        <Picker.Item label="male" value="male" />
        <Picker.Item label="female" value="female" />
      </Picker>
    </View>
      
    </View>
  );
}

render() {
  return (
  <View >
    <Modal
      animationType="slide"
      transparent
      visible={this.state.modalVisible2}
      onShow={() => { this.animate(true); }}
      onRequestClose={() => { 
         this.animate(false); 
      }}
    >
    <TouchableWithoutFeedback
      onPress={() => {
        this.animate(false);
      }}
    >
      <Animated.View 
        style={[{ flex: 1, backgroundColor: '#000' }, { opacity: this.state.opacity2 }]} 
      />
    </TouchableWithoutFeedback>
      {
        this.renderPickerScreen()
      }
    </Modal>
  </View>
  ); 
}

}

export { GenderModal };
