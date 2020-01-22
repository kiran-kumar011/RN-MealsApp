import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import store from './store/store';
import MealsNavigator from './navigation/MealsNavigation';
import openSans from './assets/fonts/OpenSans-Regular.ttf'; 
import openSansBold from './assets/fonts/OpenSans-Bold.ttf';


// const fetchFonts = () => {
// 	return Font.loadAsync({
// 		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
// 		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
// 	});
// }
console.log(store.getState(), 'store from app');
enableScreens();

export default function App() {
	// const [fontLoaded, setFontLoaded] = useState(false);

	// if(!fontLoaded) {
	// 	return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
	// }

  return (
    <Provider store={store}>
  	 <MealsNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
