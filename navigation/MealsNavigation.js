import React from 'react';
import { Platform, Button, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoriesScreen from '../screens/CategoryScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import FavoriteScreen from '../screens/FavouritesScreen';
import FilterScreen from '../screens/FilterScreen';
import AuthScreen from '../screens/AuthScreen';
import Colors from '../constants/colors';



const defaultStackNavigatoroptions = {
	mode: 'Modal',
	headerTintColor: Platform.OS === 'android' ? "white" : Colors.primaryColor,
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
	},
	headerTitleStyle: {

	}
}

const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen
	},
	CategoryMeals: {
		screen: CategoryMealsScreen
	},
	MealDetails: {
		screen: MealDetailScreen,
	}
}, 
{
	defaultNavigationOptions : defaultStackNavigatoroptions,
});


const FavNavigator = createStackNavigator({
	Favorites: FavoriteScreen,
	MealDetails: MealDetailScreen
},
{
	defaultNavigationOptions : defaultStackNavigatoroptions,
});

const tabScreenConfig = {
	Meals: { 
		screen: MealsNavigator, 
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
			},
			tabBarColor: Colors.primaryColor
		}
	},
	Favorites : {
		screen: FavNavigator, 
		navigationOptions: {
			tabBarIcon: (tabInfo) => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>,
			tabBarLabel: 'Favorites!',
			tabBarColor: Colors.accentColor
		}
	}
}


const MealsFavBottomNav = Platform.OS === 'android' 
?  createMaterialBottomTabNavigator(tabScreenConfig, {
	activeTintColor: Colors.accentColor,
	shifting: true
})
: createBottomTabNavigator(tabScreenConfig, {
	tabBarOptions: {
		activeTintColor: Colors.accentColor,
	},
	defaultNavigationOptions: {}
});


const FilterNavigator = createStackNavigator({
	Filters: FilterScreen
}, 
{
	defaultNavigationOptions : defaultStackNavigatoroptions,
})

const mainNavigator = createDrawerNavigator({
	// Auth: AuthScreen,
	MealsFavs: { screen: MealsFavBottomNav, navigationOptions: {
		drawerLabel: 'Meals'
	}},
	Filter : FilterNavigator
}, 
{
	drawerWidth: Math.round(Dimensions.get('window').width / 1.5),
	contentOptions : {
		activeTintColor: Colors.accentColor,
	}
})


// const AuthNavigator = createStackNavigator({
// 	Auth: AuthScreen
// })

export default createAppContainer(mainNavigator);





