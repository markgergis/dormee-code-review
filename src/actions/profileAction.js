//@providesModule firebase/firestore
import firebase from 'firebase';
import { 
  PROFILE_DATA_FETCH_SUCCESS, 
  PROFILE_DATE_CHANGED,
  PROFILE_GENDER_CHANGED,
  PROFILE_EMAIL_CHANGED,
  PROFILE_IMAGE_CHANGED,
  PROFILE_FIRST_NAME_CHANGED,
  PROFILE_LAST_NAME_CHANGED,
  PROFILE_PHONE_CHANGED,
  PROFILE_UDPATE } from './types';

  require('firebase/firestore');


export const profileDataFetch = () => (dispatch) => {
  // Initialize Cloud Firestore through Firebase
  firebase.firestore().collection('users').doc('rqc2kvL5Kbl8qBWfNEbw').get()
  .then((doc) => {
    if (doc.exists) {
      console.log(`${doc.id} mark => ${doc.data()}`);
      dispatch({ 
        type: PROFILE_DATA_FETCH_SUCCESS, 
        payload: { 
          phone: doc.data().phone,
          gender: doc.data().gender,
          birthDate: `${doc.data().birth_date.getDate()}/${doc.data().birth_date.getMonth() + 1}/${doc.data().birth_date.getFullYear()}`,
          profileUri: doc.data().profile_uri,
          firstName: doc.data().first_name,
          lastName: doc.data().last_name,
          verificationStatus: doc.data().verification_status,
          email: doc.data().email,
          date: doc.data().birth_date,
        }
      });
    }
  })
  .catch((error) => {
      console.log('Error getting documents: ', error);
  });
};

export const profileUpdate = ({ prop, value }) => ({
  type: PROFILE_UDPATE,
  payload: { prop, value }
}); 

export const birthdateChanged = ({ birthDate, date }) => ({
    type: PROFILE_DATE_CHANGED,
    payload: { birthDate, date }
  });

export const genderChanged = (gender) => ({
    type: PROFILE_GENDER_CHANGED,
    payload: gender
  });

export const emailChanged = (email) => ({
    type: PROFILE_EMAIL_CHANGED,
    payload: email
  });

export const firstNameChanged = (firstName) => ({
    type: PROFILE_FIRST_NAME_CHANGED,
    payload: firstName
  });
export const lastNameChanged = (lastName) => ({
    type: PROFILE_LAST_NAME_CHANGED,
    payload: lastName
  });

export const phoneNumberChanged = (phoneNumber) => ({
    type: PROFILE_PHONE_CHANGED,
    payload: phoneNumber
  });

export const imageChanged = (image) => ({
    type: PROFILE_IMAGE_CHANGED,
    payload: image
  });

