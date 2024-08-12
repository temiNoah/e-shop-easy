import { UPDATE_MOBILE_NAV_BAR } from '../../../constants/action-types/mobile-nav-bar';

const initialState = {
  mobileNavBar: {}
};

export default function mobileNavBarReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MOBILE_NAV_BAR:
      return {
        ...state,
        mobileNavBar: {
          ...state.mobileNavBar,
          ...action.props
        }
      }

    default: 
      return state;
  }
};
