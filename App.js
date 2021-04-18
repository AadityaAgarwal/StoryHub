import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput,Image } from 'react-native';
import { Header } from 'react-native-elements';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStory from './screens/WriteStory'
import ReadStory from './screens/ReadStory'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Write: {
    screen: WriteStory
  },
  Read: {
    screen: ReadStory
  },
  },
  {

   
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ }) => {
        const routeName = navigation.state.routeName;

        if (routeName === 'Write') {
          return (
            <Image source={require('./assets/write.png')}
              style={{
                width: 40,
                height: 40,
              }}
            />
          )

        } else if (routeName === 'Read') {
          return (
            <Image source={require('./assets/read.png')}
              style={{
                width: 40,
                height: 40,
              }}
            />
          )
        }

        // You can return any component that you like here!
        //    return <Ionicons name={iconName} size={size} color={color} />;
      },
    })
    } ,
)

const AppContainer=createAppContainer(TabNavigator);
