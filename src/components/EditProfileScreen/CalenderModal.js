/**
 * A modal component made for calenders to act on touch as a slide up menu 
 */
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Modal, 
  TouchableWithoutFeedback, 
  Animated, 
  DatePickerAndroid, 
  DatePickerIOS,
Platform } from 'react-native';

class CalenderModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
    modalVisible2: false,
    opacity2: new Animated.Value(0.0),
    date: this.props.date
    };
    if (Platform.OS === 'android') {
      DatePickerAndroid.open({
      date: this.props.date
    }).then(this.handleDatePicker.bind(this));
    }
  }
  
onDonePressed() {
  this.animate(false);
  const { date } = this.state; 
  const birthDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  this.props.birthdateChanged(birthDate, date);
}

setModalVisible(visible) {
    this.setState({ modalVisible2: visible });
}

handleDatePicker({ action, year, month, day }) {
  if (action !== DatePickerAndroid.dismissedAction) {
    const birthDate = `${day}/${month + 1}/${year}`;
    const date = new Date(year, month, day);
    this.props.birthdateChanged(birthDate, date);
  }
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

renderCalenderScreen() { 
  if (Platform.OS === 'android') {
    return (<View />);
  }
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
      <DatePickerIOS 
      date={this.state.date} 
      mode='date' 
      onDateChange={(date) => this.setState({ date })} 
      />
      
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
        this.renderCalenderScreen()
      }
    </Modal>
  </View>
  ); 
}

}

export { CalenderModal };
