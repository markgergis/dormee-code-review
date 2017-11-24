import React, { Component } from 'react';
import { View, ScrollView, Text, } from 'react-native';
import { connect } from 'react-redux';
import { ProfileImage, ProfileSection, } from '../components/ProfileScreen';
import { profileDataFetch } from '../actions';
import { BackTitlebar } from '../components';
import Router from '../Router';

class ProfileScreen extends Component {
  
  componentWillMount() {
    this.props.profileDataFetch();
  }

  renderHeader() {
      return (
        <ProfileImage 
          uri={this.props.viewProfile.profileUri} 
          name={`${this.props.viewProfile.firstName} ${this.props.viewProfile.lastName}`}
          onPress={() => this.props.navigator.push(
            Router.getRoute('editProfile'))} 
        />

      );
  }

  renderPersonalDetails() {
  const { infoCardContainerStyle } = styles;
  return (
    <View style={infoCardContainerStyle}>
      <ProfileSection 
        title="Email" subTitle={this.props.viewProfile.email} 
      />
      <ProfileSection 
        title="Phone number" subTitle={this.props.viewProfile.phone} 
      />
      <ProfileSection 
        title="Gender" subTitle={this.props.viewProfile.gender} 
      />
      <ProfileSection 
        title="Birthdate" subTitle={this.props.viewProfile.birthDate} 
      />
      <ProfileSection 
        title="Verification" subTitle={this.props.viewProfile.verificationStatus} 
      />
    </View>
  );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.backButtonContainer} >
          <BackTitlebar onPress={() => { this.props.navigator.pop(); }} />
        </View>
      <ScrollView style={{ paddingBottom: 20 }}>
          {this.renderHeader()}
          <View style={styles.titleContainerStyle}>
            <Text style={{ fontSize: 15 }}>Personal Details</Text>
          </View>
          {this.renderPersonalDetails()}
      </ScrollView>
      </View>
    );   
  }
}

const styles = {
  titleContainerStyle: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15
  },
  infoCardContainerStyle: {
    borderRadius: 3,
    backgroundColor: 'white',
    marginRight: 10,
    marginLeft: 10
  },
  backButtonContainer: { 
    position: 'absolute', 
    left: 0, 
    top: 0, 
    right: 0, 
    zIndex: 4 }
};

const mapStateToProps = state => ({ viewProfile: state.viewProfile });

export default connect(mapStateToProps, { profileDataFetch })(ProfileScreen);
