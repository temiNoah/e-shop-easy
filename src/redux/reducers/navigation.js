import { UPDATE_CURRENT_PATHNAME, UPDATE_SCENE, NAVIGATE_TO } from '../../../constants/action-types/navigation';

const initialState = {
  scene: 'dashboard',
  pathName: '',
  history: [],
  pendingUrl: null
};

export default function navigationReducer(state = initialState, action) {
  switch(action.type) {
    case NAVIGATE_TO:
      return {
        ...state,
        pendingUrl: action.pendingUrl
      }

    case UPDATE_CURRENT_PATHNAME: 
      return {
        ...state,
        pathName: action.pathName,
        history: [...state.history, action.pathName]
      }

    case UPDATE_SCENE:
      return {
        ...state,
        scene: action.scene
      }

    default: 
      return state;
  }
};
