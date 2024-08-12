import { DISMISS_ERROR_MESSAGE, DISMISS_SUCCESS_MESSAGE, FLASH_ERROR_MESSAGE, FLASH_SUCCESS_MESSAGE, UPDATE_LOADING, FLASH_INFO_MESSAGE, DISMISS_INFO_MESSAGE } from '../constants/action-types/tunnel'

export function dismissErrorMessage() {
  return {
    type: DISMISS_ERROR_MESSAGE
  }
}

export function dismissSuccessMessage() {
  return {
    type: DISMISS_SUCCESS_MESSAGE
  }
}

export function showErrorMessage(payload, keywords) {
  return {
    type: FLASH_ERROR_MESSAGE,
    payload,
    keywords
  }
}

export function showSuccessMessage(payload) {
  return {
    type: FLASH_SUCCESS_MESSAGE,
    payload
  }
}

export function updateLoading(payload) {
  return {
    type: UPDATE_LOADING,
    payload
  }
};

export function showInfoMessage(payload) {
  return {
    type: FLASH_INFO_MESSAGE,
    payload
  }
};

export function dismissInfoMessage() {
  return {
    type: DISMISS_INFO_MESSAGE
  }
}
