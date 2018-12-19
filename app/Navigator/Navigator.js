import { createStackNavigator } from 'react-navigation'

import AppNavigator from './AppNavigator'
import ConfirmFavourite from '../Components/ConfirmFavourite'

const Navigator = createStackNavigator(
  {
    App: {
      screen: AppNavigator
    },
    ConfirmModal: {
      screen: ConfirmFavourite
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default Navigator