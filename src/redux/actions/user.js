import { 
  END_LOAD_USER_DATA,
  IS_LOADING_USER_DATA,
  NULLIFY_LOAD_USER_DATA,
  START_LOAD_USER_DATA,
} from '../../../constants/action-types/user';

export function nullifyUserStatus() {
  return {
    type: NULLIFY_LOAD_USER_DATA,
  }
}

export function startLoadUserData() {
  return {
    type: START_LOAD_USER_DATA,
  }
}

export function setLoadingUserData() {
  return {
    type: IS_LOADING_USER_DATA,
  }
}

export function endLoadUserData() {
  return {
    type: END_LOAD_USER_DATA,
  }
}
