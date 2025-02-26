//import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
//screens
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './components/screens/SplashScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ForgetPassword from './components/screens/ForgetPassword';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import ForgetPasswordSuccessFul from './components/screens/ForgetPasswordSuccessFul';
import DashBoard from './components/screens/DashBoard';
import TabScreen from './components/screens/TabScreen';

// import { DrawerScreenProps } from '@react-navigation/drawer';
// navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screens/HomeScreen';
import paymentScreen from './components/screens/Payment';
import BookingEvent from './components/screens/BookingEvent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="e-Society" screenOptions={{headerShown:false}}>
       
      <Drawer.Screen name="e-Society"  component={TabScreen} />
        
    </Drawer.Navigator>
  )
}


function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name="SplashScreen" options = {{headerShown :false}} component={SplashScreen}/>
        <Stack.Screen name="WelcomeScreen" options = {{headerShown :false}} component={WelcomeScreen} />
        <Stack.Screen name="SignIn" options = {{headerShown :false}} component={SignIn} />
        <Stack.Screen name="SignUp" options = {{headerShown :false}}  component={SignUp} />
        <Stack.Screen name="paymentScreen" options = {{headerShown :false}}  component={paymentScreen} />
        <Stack.Screen name="ForgetScreen" options = {{headerShown :false}}  component={ForgetPassword} />
        <Stack.Screen name="ForgetPasswordSuccessFul" options = {{headerShown :false}}  component={ForgetPasswordSuccessFul} />
        <Stack.Screen name="TabScreen" options = {{headerShown :false}} component={DrawerRoutes} />
        <Stack.Screen name="Booking Event" options = {{headerShown :false}} component={BookingEvent} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App
