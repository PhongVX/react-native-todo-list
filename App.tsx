import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import Splash from './screens/Splash';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import { ThemeProvider } from './theme';
import DefaultTheme from './styles/DefaultTheme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Splash'
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: DefaultTheme.colors.surface
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name='Splash'
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({

});
