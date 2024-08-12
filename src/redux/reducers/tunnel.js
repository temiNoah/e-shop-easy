import { DISMISS_ERROR_MESSAGE, DISMISS_SUCCESS_MESSAGE, FLASH_ERROR_MESSAGE, FLASH_SUCCESS_MESSAGE, UPDATE_LOADING, FLASH_INFO_MESSAGE, DISMISS_INFO_MESSAGE } from '../constants/action-types/tunnel';
//import { ApiErrorHandler } from '../../../utils/error-handler';

//const apiErrorHandler = new ApiErrorHandler();

const initialState = {
  errorMessage: null,
  isLoading: false,
  loadingPercentage: 66
};

function _normalizeError(errorMessage) {
  const errorMessageObj = JSON.parse(errorMessage)
  if (errorMessageObj.errors && errorMessageObj.errors.length > 0) {
    return errorMessageObj.errors[0].errorMessage || errorMessageObj.errors[0].message
  }
  if (errorMessageObj.responseData && errorMessageObj.responseData.description) {
    return errorMessageObj.responseData.description
  }

  return errorMessageObj.description
}

export default function tunnelReducer(state = initialState, action) {
  switch (action.type) {
    case DISMISS_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: null
      }

    case DISMISS_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: null
      }

    case FLASH_ERROR_MESSAGE:

      let errorMessage = action.payload;
      const keywords = action.keywords;

      try {
        errorMessage = errorMessage // apiErrorHandler.handleApiErrorResponse(JSON.parse(errorMessage), keywords)
      } catch {
        errorMessage = errorMessage || process.env.REACT_APP_DEFAULT_ERROR_MESSAGE;
      }

      return {
        ...state,
        errorMessage: errorMessage
      }

    case FLASH_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload
      }
    case FLASH_INFO_MESSAGE:
      return {
        ...state,
        infoMessage: action.payload
      }

    case DISMISS_INFO_MESSAGE:
      return {
        ...state,
        infoMessage: null
      }

    case UPDATE_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading !== undefined ? action.payload.isLoading : action.payload,
        loadingPercentage: action.payload.percentage || 66
      }

    default:
      return state;
  }
};
