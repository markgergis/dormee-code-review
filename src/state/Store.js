import { createNavigationEnabledStore, NavigationReducer } from '@expo/ex-navigation';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import profileReducers from '../reducers/profileReducers';


const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});
//configure redux store
function configureStore(initialState) {
  //this is to compose extra middleware functions in redux
  const enhancer = compose(
    applyMiddleware(
      ReduxThunk, // lets us dispatch() functions
    ),
  );

  return createStoreWithNavigation(
    /* combineReducers and your normal create store things here! */
    combineReducers({
      navigation: NavigationReducer,
      // other reducers
      viewProfile: profileReducers,
    }),
    initialState,
    enhancer
  );
}

const store = configureStore({});

export default store;
