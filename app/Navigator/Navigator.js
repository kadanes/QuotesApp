import React from 'react'
import { createBottomTabNavigator } from "react-navigation"
import Ionicons from 'react-native-vector-icons/Ionicons'

import FavouriteQuotesList from '../Components/FavouriteQuotesList'
import CategoriesNavigator from './CategoriesNavigator'

const Navigator = createBottomTabNavigator(
    {
      Favourites: FavouriteQuotesList,
      Categories: CategoriesNavigator 
    }, 
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName; 
          if (routeName === 'Favourites') {
            iconName = `ios-bookmark`;
          } else if (routeName === 'Categories') {
            iconName = `ios-quote`;
          }
          return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  )

  export default Navigator