import { combineReducers } from 'redux';
// import mobileNavBarReducer from './mobile-nav-bar';
// import navigationReducer from './navigation';
//import tempReducer from './temp';
import tunnelReducer from './tunnel';
//import userReducer from './user';

export default combineReducers({
  // mobileNavBar: mobileNavBarReducer,
  // navigation: navigationReducer,
  // temp: tempReducer,
  tunnel: tunnelReducer,
  // user: userReducer
})
