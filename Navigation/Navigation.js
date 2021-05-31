import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, Switch } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Accueil from '../Components/Accueil'
import Contact from '../Components/Contact'
import Calendrier from '../Components/Calendrier'
import Jeux from '../Components/Jeux'

const Nav = createBottomTabNavigator()

export default function MainTabNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator
                tabBarOptions={
                {
                    activeTintColor: '#ff0000',
                    inactiveTintColor: 'black',
                    labelPosition: 'below-icon'
                }
            }
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = "";

                    if (Platform.OS === "android") {
                      iconName += "md-";
                    } else if (Platform.OS === "ios") {
                      iconName += "ios-";
                    }

                    switch (route.name) {
                      case "Accueil": {
                        iconName += "beer";
                        break;
                      }
                      case "Evenements": {
                        iconName += "calendar";
                        break;
                      }
                      case "Jeux": {
                        iconName += "game-controller";
                        break;
                      }
                      case "Contact": {
                        iconName += "chatbubbles";
                        break;
                      }
                      default: {
                        break;
                      }
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                  }
                })
              }>
                <Nav.Screen
                    name='Accueil'
                    component={Accueil}
                />
                <Nav.Screen
                    name='Evenements'
                    component={Calendrier}
                />
                <Nav.Screen
                    name='Jeux'
                    component={Jeux}
                />
                <Nav.Screen
                    name='Contact'
                    component={Contact}
               />
            </Nav.Navigator>
        </NavigationContainer>
    )
}
