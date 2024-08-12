import { NAVIGATE_TO, UPDATE_CURRENT_PATHNAME, UPDATE_SCENE } from '../../../constants/action-types/navigation'

export function navigateTo(pendingUrl) {
  return {
    type: NAVIGATE_TO,
    pendingUrl
  }
}

export function updateCurrentPathName(pathName) {
  return {
    type: UPDATE_CURRENT_PATHNAME,
    pathName
  }
}

export function updateScene(scene) {
  return { 
    type: UPDATE_SCENE, 
    scene
  }
};
