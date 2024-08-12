import { UPDATE_MOBILE_NAV_BAR } from '../../../constants/action-types/mobile-nav-bar'

export function updateMobileNavBar(props) {
  return {
    type: UPDATE_MOBILE_NAV_BAR,
    props
  }
}
