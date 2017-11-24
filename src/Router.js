import {
  createRouter
} from '@expo/ex-navigation';
import StarterScreen from './screens/StarterScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';
import SignUpNameScreen from './screens/SignUpNameScreen';
import SingUpEmPassScreen from './screens/SingUpEmPassScreen';
import SignupBirthGenderScreen from './screens/SignupBirthGenderScreen';
import SignUpPhoneScreen from './screens/SignUpPhoneScreen';
import PhoneVerifcationScreen from './screens/PhoneVerifcationScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import CategoryScreen from './screens/CategoryScreen';
import SlidingTabScreen from './screens/SlidingTabScreen';
import HomeScreen from './screens/HomeScreen';
import MapsScreen from './screens/MapsScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import ListingTypeScreen from './screens/AddNewListing/ListingTypeScreen';
import ListingMainScreen from './screens/AddNewListing/ListingMainScreen';
import ListingDetailsScreen from './screens/AddNewListing/ListingDetailsScreen';
import ListingTitleScreen from './screens/AddNewListing/ListingTitleScreen';
import ListingPriceScreen from './screens/AddNewListing/ListingPriceScreen';
import ListingLocationScreen from './screens/AddNewListing/ListingLocationScreen';
import ListingCameraScreen from './screens/AddNewListing/ListingCameraScreen';
import DetailsScreen from './screens/DetailsScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PaymentCCardScreen from './screens/PaymentCCardScreen';
import FiltersScreen from './screens/FiltersScreen';
import TabScreen from './screens/TabScreen';
import BookingScreen from './screens/BookingScreen';
import MyListingsScreen from './screens/MyListingsScreen';

export default createRouter(() => ({
  // starter: () => StarterScreen,
  // login: () => AuthenticationScreen,
  // signUpName: () => SignUpNameScreen,
  // signUpEmPass: () => SingUpEmPassScreen,
  // signUpBirthGender: () => SignupBirthGenderScreen,
  // signUpPhone: () => SignUpPhoneScreen,
  // phoneVerification: () => PhoneVerifcationScreen,
  // category: () => CategoryScreen,
  // mainTabs: () => SlidingTabScreen,
  // main: () => TabScreen,
  // home: () => HomeScreen,
  // bookings: () => BookingScreen,
  // favourites: () => FavouritesScreen,
  // maps: () => MapsScreen,
  // settings: () => SettingsScreen,
  profile: () => ProfileScreen,
  editProfile: () => EditProfileScreen,
  // searchResults: () => SearchResultsScreen,
  // newType: () => ListingTypeScreen,
  // newMain: () => ListingMainScreen,
  // newDetails: () => ListingDetailsScreen,
  // newTitle: () => ListingTitleScreen,
  // newPrice: () => ListingPriceScreen,
  // newLocation: () => ListingLocationScreen,
  // newCamera: () => ListingCameraScreen,
  // newAmenities: () => ListingAmenitiesScreen,
  // detailsScreen: () => DetailsScreen,
  // myListings: () => MyListingsScreen,
  // paymentMethod: () => PaymentMethodScreen,
  // paymentCCard: () => PaymentCCardScreen,
  // filters: () => FiltersScreen
}));

