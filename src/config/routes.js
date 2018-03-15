import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Decks, Deck, CreateDeck } from '../views'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Tabs = TabNavigator({
  Decks:{ screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='format-list-bulleted' size={30} color={tintColor} />
    }},
  CreateDeck: { screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'New',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='add-box'  size={30} color={tintColor} />
    }},
},
  {
    tabBarPosition:'bottom',
    tabBarOptions:{
      showIcon:true
    }
  }
)

const Navigator = StackNavigator({
  Home:{ screen: Tabs, navigationOptions:{ header:null}},
  Deck:{ screen: Deck }
})

export default Navigator