import React, { Component } from 'react';
import { 
  View, 
  ScrollView, 
  TouchableWithoutFeedback, 
  Image, 
  Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { 
  EditPlaceHolder,
  EditPhonePlaceholder,
  EditPicker, 
  PickerModal, 
  GenderModal, 
  CalenderModal } from '../components/EditProfileScreen';
import { 
  profileDataFetch,
  firstNameChanged,
  lastNameChanged,
  emailChanged,
  genderChanged,
  birthdateChanged,
  phoneNumberChanged,
  imageChanged } from '../actions';

class EditProfileScreen extends Component {
   static route = {
    navigationBar: {
      visible: true,
      title: 'Edit profile'
    }
  }

  renderModals() {
    const options = [
      { name: 'Take Photo' },
      { name: 'Choose Photo' }
    ];
    return (
      <View>
        <PickerModal 
          ref="ImageModal" 
          options={options} 
          floating 
        />
        <GenderModal 
        ref="GenderModal" 
        gender={this.props.viewProfile.gender} 
        genderChanged={this.props.genderChanged} 
        />
        <CalenderModal 
        ref="CalenderModal" 
        date={this.props.viewProfile.date}
        birthdateChanged={this.props.birthdateChanged} 
        />
      </View>
    );
  }

  renderNameImageSection() {
    const { 
      imageContainerStyle, 
      imageStyle, 
      nameImageContainer, 
    } = styles;
    return (
      <View style={nameImageContainer}>
        <TouchableWithoutFeedback onPress={() => this.refs.ImageModal.setModalVisible(true)}>
        <View style={imageContainerStyle}>
          <Image style={imageStyle} source={{ uri: this.props.viewProfile.profileUri }} />
        </View>
        </TouchableWithoutFeedback>
        <View style={{ flex: 2 }}>
          <EditPlaceHolder 
            text="First Name"
            onChangeText={(firstName) => this.props.firstNameChanged(firstName)}
            value={this.props.viewProfile.firstName}
            placeholder="your first name"
          />
          <EditPlaceHolder 
            text="Last Name"
            onChangeText={(lastName) => this.props.lastNameChanged(lastName)}
            value={this.props.viewProfile.lastName}
            placeholder="your last name"
          />
        </View>
      </View>
    );
  }

  renderInfo() {
    return (
      <View style={styles.infoContainer}>
        <EditPlaceHolder 
          text='Email'
          onChangeText={(email) => this.props.emailChanged(email)}
          value={this.props.viewProfile.email}
          placeholder="example@example.com"
        />
        <EditPhonePlaceholder 
          title="Phone Number"
          numberPre="+20"
          onChangeText={(phoneNumber) => this.props.phoneNumberChanged(phoneNumber)}
          value={this.props.viewProfile.phone}
          placeholder="01xxxxxxxxx"
        />
        <EditPicker 
          title="Gender" 
          value={this.props.viewProfile.gender} 
          onPress={() => this.refs.GenderModal.setModalVisible(true)}
        />          
        <EditPicker 
          title="Birthdate" 
          value={this.props.viewProfile.birthDate} 
          onPress={() => this.refs.CalenderModal.setModalVisible(true)}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView >
        {this.renderModals()}
        {this.renderNameImageSection()}
        {this.renderInfo()}
      </ScrollView>
    );
  }
}

const styles = {
  nameImageContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    width: Dimensions.get('window').width
  },
  imageContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#000'
  },
  modelCard: { 
    borderRadius: 10, 
    backgroundColor: '#fff', 
    borderColor: '#000' 
  },
  infoContainer: { 
    paddingHorizontal: 16, 
    paddingTop: 8 
  }
};
const mapStateToProps = state => (
  { viewProfile: state.viewProfile }
);

export default connect(mapStateToProps, { profileDataFetch,
  firstNameChanged,
  lastNameChanged,
  emailChanged,
  genderChanged,
  birthdateChanged,
  phoneNumberChanged,
  imageChanged })(EditProfileScreen);
