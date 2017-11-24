/**
 * A modal component made for image upload to act on touch as a slide up menu 
 */
import React, { Component } from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, Animated } from 'react-native';

class PickerModal extends Component {

state = {
    modalVisible: false,
    opacity: new Animated.Value(0.0)
}

setModalVisible(visible) {
    this.setState({ modalVisible: visible });
}
animate(bool) {
  if (bool) {
    Animated.timing(this.state.opacity, {
        duration: 200,
        toValue: 0.3
    }).start();
  } else {
    Animated.timing(this.state.opacity, {
        delay: 50,
        duration: 200,
        toValue: 0.0
    }).start(() => { this.setModalVisible(false); });
  }
}

renderFloatingScreen(options) {
  const list = [];
  for (let i = 0; i < options.length - 1; i++) {
    list.push(<Text key={i * 2} style={styles.modalText}>{options[i].name}</Text>);
    list.push(
      <View key={(i * 2) + 1} style={{ backgroundColor: 'rgba(0,0,0,0.12)', height: 1 }} />
    );
  } 
  list.push(
    <Text 
      key={(options.length - 1) + 1} 
      style={styles.modalText}
    >{options[options.length - 1].name}</Text>
  );
  return (
    <View 
    style={{ 
      position: 'absolute',
      left: 0,
      justifyContent: 'center', 
      margin: 12,
      right: 0,
      flex: 1,
      bottom: 12,
      zIndex: 2 }}
    >
    
      <View style={styles.modelCard}>
        {list}
      </View>
      <View style={[styles.modelCard, { marginTop: 8 }]}>
          <TouchableWithoutFeedback 
            onPress={() => {
              this.animate(false);
            }}
          >
            <View>
              <Text 
              style={{ fontSize: 20, textAlign: 'center', margin: 16, fontWeight: 'bold' }}
              >Cancel</Text>
            </View>
          </TouchableWithoutFeedback>

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
      visible={this.state.modalVisible}
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
        style={[{ flex: 1, backgroundColor: '#000' }, { opacity: this.state.opacity }]} 
      />
    </TouchableWithoutFeedback>
      {
        this.renderFloatingScreen(this.props.options) 
      }
    </Modal>
  </View>
  ); 
}

}

const styles = {
  modelCard: { borderRadius: 10, backgroundColor: '#fff', borderColor: '#000' },
  modalText: { fontSize: 20, textAlign: 'center', margin: 16 },
};

export { PickerModal };
