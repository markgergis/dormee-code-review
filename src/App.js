import React from 'react';
import { Asset, AppLoading } from 'expo';
import { Image } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import {
  NavigationProvider,
  StackNavigation,
  NavigationContext,
} from '@expo/ex-navigation';
import Store from './state/Store';
import Router from './Router';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
});

global.Image = function () { };

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

export default class App extends React.Component {
  state = {
    appLoaded: false,
  };

  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyAdbxoXA3Mchr8xFscxnHJH-M0Rd6ERVt0',
    authDomain: 'dormee-mobile-app.firebaseapp.com',
    databaseURL: 'https://dormee-mobile-app.firebaseio.com',
    projectId: 'dormee-mobile-app',
    storageBucket: 'dormee-mobile-app.appspot.com',
    messagingSenderId: '1017692570126'
  };
  firebase.initializeApp(config);
   this.appLoaded();
 }

  // loading assets at the begining of the app
  async appLoaded() {
    const imageAssets = cacheImages([
      require('./assets/pics/shadow.png'),
      require('./assets/pics/shadow.png'),
    ]);

    await Promise.all([...imageAssets]);
    this.setState({
      appLoaded: true,
    });
  }
 
  render() {
    // please comment these lines for testing

    // this is for loading static assets while the app is loading
    if (!this.state.appLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation
            navigatorUID='mainStack' 
            initialRoute={Router.getRoute('profile')} 
          />
        </NavigationProvider>
      </Provider>
    );
    //   // ...
  }

}
