import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from 'react-native-vector-icons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet } from "react-native";


import Bands from './components/Bands';
import Stats from './components/Stats';
import Styles from './components/Styles';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          // style={styles.container}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Bands') {
                iconName = focused
                  ? 'fist-raised'
                  : 'fist-raised';
              } else if (route.name === 'Stats') {
                iconName = focused ? 'chart-line' : 'chart-line';
              } else if (route.name === 'Styles') {
                iconName = focused ? 'compact-disc' : 'compact-disc';
              }

              // You can return any component that you like here!
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#f00',
            tabBarInactiveTintColor: '#600',
            tabBarInactiveBackgroundColor: '#000',
            tabBarActiveBackgroundColor: '#111'
          })}
        >
        <Tab.Screen name="Bands" component={Bands} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Styles" component={Styles} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor: "black",
//     color: "white"
//   }
// })