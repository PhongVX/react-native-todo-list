import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import Splash from './views/Splash';
import Home from './views/Home';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName='Splash'
      >
          <RootStack.Screen
            name='Splash'
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
           <RootStack.Screen
            name="Home"
            component={Home}
          />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
