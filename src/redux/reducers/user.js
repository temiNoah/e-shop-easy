import { 
  END_LOAD_USER_DATA,
  IS_LOADING_USER_DATA,
  NULLIFY_LOAD_USER_DATA,
  START_LOAD_USER_DATA 
} from '../../../constants/action-types/user';

const initialState = {
  loadUserStatus: null
};

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case START_LOAD_USER_DATA:
      return {
        ...state,
        loadUserStatus: START_LOAD_USER_DATA,
      }
      
    case IS_LOADING_USER_DATA:
      return {
        ...state,
        loadUserStatus: IS_LOADING_USER_DATA,
      }
      
    case END_LOAD_USER_DATA:
      return {
        ...state,
        loadUserStatus: END_LOAD_USER_DATA,
      }

    case NULLIFY_LOAD_USER_DATA:
      return {
        ...state,
        loadUserStatus: null,
      }

    default: 
      return state;
  }
};
