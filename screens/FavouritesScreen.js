import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


class FavouritesScreen extends React.Component {
	constructor() {
		super();
		this.state = {}
	}

	static navigationOptions = (navigationData) => {
		return {
			title : 'Your Favourites',
			headerLeft : () => (
				<Ionicons 
					name='ios-menu'
					size={30}
					color={ Platform.OS === 'android' ? 'white' : Colors.primaryColor }
					style={{marginHorizontal: 10}}
					onPress={() => {
						navigationData.navigation.toggleDrawer();
					}}
				/>
			)
		}
	}

	UNSAFE_componentWillMount = () => {
		let meals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
		this.setState({  meals });
	}

	render() {
		const { meals } = this.state;
		return <MealList meals={meals} navigation={this.props.navigation}/>
	}
}




export default FavouritesScreen;