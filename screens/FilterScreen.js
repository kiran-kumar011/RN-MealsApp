import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';


const FilterItem = (props) => {
	return (
		<View style={styles.filterContainer}>
			<Text style={styles.filterTitle}>{props.label}</Text>
			<Switch 
				trackColor={{true: Colors.primaryColor}}
				thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
				value={props.state} 
				onValueChange={props.onChange}
			/>
		</View>
	)
}

class FiltersScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			isGluteenFree: false
		}
	}

	static navigationOptions = navigationData => {
		return {
			title: 'Filtered Meals',
			headerLeft: () => (
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

	handleIsGluteenFree = () => this.setState({ isGluteenFree : !this.state.isGluteenFree})

	handleIsVegan = () => this.setState({ isVegan: !this.state.isVegan})

	handleIsLactoseFree = () => this.setState({ isLactoseFree: !this.state.isLactoseFree})

	handleIsVegetarian = () => this.setState({ isVegetarian : !this.state.isVegetarian})

	render() {
		const { isGluteenFree, isVegan, isLactoseFree, isVegetarian } = this.state;
		return(
			<View style={styles.container}>
				<Text style={styles.title}>Available Filters</Text>
				<FilterItem 
					label='Gluten-Free' 
					name='isGluteenFree'
					state={isGluteenFree} 
					onChange={this.handleIsGluteenFree}
				/>
				<FilterItem 
					label='Vegan'
					name='isVegan'
					state={isVegan} 
					onChange={this.handleIsVegan}
				/>
				<FilterItem 
					label='Lactose-Free'
					name='isLactoseFree' 
					state={isLactoseFree} 
					onChange={this.handleIsLactoseFree}
				/>
				<FilterItem 
					label='Vegetarian' 
					name='isVegetarian'
					state={isVegetarian} 
					onChange={this.handleIsVegetarian}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container : {
  	flex: 1,
 		alignItems: 'center',
  	// justifyContent: 'center'
  },
  filterContainer : {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'center',
  	padding: 10,
  	marginVertical: 10,
  	width: '80%',
  },
  title: {
  	fontSize: 22,
  	textAlign: 'center'
  },
  filterTitle : {
  	fontSize: 18
  }
});


export default FiltersScreen;