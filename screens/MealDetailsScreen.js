import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/colors';


const ListItem = props => {
	console.log(props, 'props.children');
	return (
		<View style={styles.listItem}>
			<Text>{props.children}</Text>
		</View>
	)
}



class MealsDetailsScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			text: '',
			meal: {}
		}
	}

	static navigationOptions = (navigationData) => {
		const mealId = navigationData.navigation.getParam('mealId');
		const meal = MEALS.find(meal => meal.id === mealId);
		
		return {
			title : meal.title.substring(0, 20).concat(' ...'),
			headerRight: () => (
				<Ionicons 
					title='Favourite' 
					name="ios-star"
					size={30}
					color={ Platform.OS === 'android' ? 'white' : Colors.primaryColor }
					style={{marginHorizontal: 10}}
					onPress={() => {
						console.log('add favourite')
					}}
				/>
			)
		}
	}
	

	UNSAFE_componentWillMount() {
		const mealId = this.props.navigation.getParam('mealId');
		const meal = MEALS.find(meal => meal.id === mealId);
		this.setState({ text: meal.title, meal });
	}


	render() {
		const { navigation } = this.props;
		const { meal } = this.state;
		console.log(this.state.meal, 'meal Details screen');
		return (
			<ScrollView>
				<Image source={{uri: meal.imageUrl }} style={styles.image}/>
				<View style={styles.details}>
					<Text>{meal.duration}m</Text>
					<Text>{meal.complexity.toUpperCase()}</Text>
					<Text>{meal.affordability.toUpperCase()}</Text>
				</View> 
				<Text style={styles.title}>Ingredients</Text>
				{meal.ingredients.map(ingredient => <ListItem children={ingredient}/>)}
				<Text style={styles.title}>Steps</Text>
				{meal.method.map(step => <ListItem children={step}/>)}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container : {
		padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
  	flexDirection: 'row',
  	padding: 15,
  	justifyContent: 'space-around'
  },
  image : {
  	width: '100%',
  	height: 200
  },
  title: {
  	fontSize: 22,
  	textAlign: 'center'
  },
  listItem : {
  	marginVertical: 10,
  	marginHorizontal: 20,
  	borderColor: '#ccc',
  	borderWidth: 1,
  	padding: 10
  }
});


export default MealsDetailsScreen;