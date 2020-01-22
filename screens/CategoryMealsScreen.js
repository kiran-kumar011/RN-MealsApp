import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/colors';
import MealList from '../components/MealList';

class CategoryMealsScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			meals: null
		}
	}

	static navigationOptions = (navigationData) => {
		const catId = navigationData.navigation.getParam('categoryId');
		const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
		return {
			title : selectedCategory.title,
		}
	}

	UNSAFE_componentWillMount = () => {
		const categoryId = this.props.navigation.getParam('categoryId');
		let selectedCategory  = CATEGORIES.find(cat => cat.id === categoryId);
		let meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
		this.setState({ title:  selectedCategory.title, meals });
	}


	render() {
		const { navigation } = this.props;
		const { title, meals } = this.state;
		return <MealList meals={meals} navigation={ navigation }/>
	}
}



export default CategoryMealsScreen;

