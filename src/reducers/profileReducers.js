import { 
  PROFILE_DATA_FETCH_SUCCESS, 
  PROFILE_DATE_CHANGED,
  PROFILE_GENDER_CHANGED,
  PROFILE_EMAIL_CHANGED,
  PROFILE_IMAGE_CHANGED,
  PROFILE_FIRST_NAME_CHANGED,
  PROFILE_LAST_NAME_CHANGED,
  PROFILE_PHONE_CHANGED,
  PROFILE_UDPATE } from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    phone: '',
    gender: '',
    birthDate: '',
    profileUri: '',
    firstName: '',
    lastName: '',
    verificationStatus: '',
    date: null,
    facebook: ''

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_UDPATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case PROFILE_PHONE_CHANGED:
            return { ...state, phone: action.payload };
        case PROFILE_DATE_CHANGED:
            return { ...state, birthDate: action.payload.birthDate, date: action.payload.date };
        case PROFILE_FIRST_NAME_CHANGED:
            return { ...state, firstName: action.payload };
        case PROFILE_LAST_NAME_CHANGED:
            return { ...state, lastName: action.payload };
        case PROFILE_IMAGE_CHANGED:
            return { ...state, profileUri: action.payload };
        case PROFILE_GENDER_CHANGED:
            return { ...state, gender: action.payload };
        case PROFILE_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PROFILE_DATA_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
