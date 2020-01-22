import React from 'react';
import { 
	FlatList, 
	View, 
	Text, 
	TouchableOpacity, 
	ImageBackground,
	Platform,
	Button,
	StyleSheet,
	Dimensions
} from 'react-native';


const MealList = (props) => {

	const renderMealsItem = (itemData) => {
		const { title, duration, affordability, complexity, imageUrl, id } = itemData.item;
		return (
			<View style={styles.mealItem}>
				<TouchableOpacity onPress={() => {
					props.navigation.navigate({
						routeName: 'MealDetails',
						params : {
							mealId: id
						}
					})
				}}>
					<View>
						<ImageBackground style={styles.bgImage} source={{ uri: imageUrl }}> 
							<Text style={styles.title} numberOfLines={1}>{title}</Text>
							<View style={{...styles.mealRow, ...styles.mealDetails}}>
								<Text>{duration}m</Text>
								<Text>{complexity.toUpperCase()}</Text>
								<Text>{affordability.toUpperCase()}</Text>
							</View> 
						</ImageBackground>
					</View>
				</TouchableOpacity>
			</View>
		)
	}

	const { navigation, meals, title } = props;
	return (
		<View style={styles.container}>
			<FlatList 
				data={meals}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealsItem}
				style={{width: '100%'}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container : {
		padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mealRow : {
  	flexDirection: 'row',
  },
  bgImage: {
  	width: '100%',
  	height: '100%',
  	justifyContent: 'flex-end'
  },
  mealItem : {
  	height: Math.round(Dimensions.get('window').height / 3),
  	width: '100%',
  	overflow: 'hidden',
  	marginVertical: 10,
  	borderRadius: 10,
  },
  mealHeader: {
  	height: '85%'
  },
  mealDetails: {
  	paddingHorizontal: 20,
  	justifyContent: 'space-between',
  	backgroundColor: '#ccc',
  	alignItems: 'center',
  	padding: 1,
  	height: '15%'
  },
  title : {
  	fontSize: 22,
  	color: 'white',
  	backgroundColor: 'rgba(0,0,0,0.3)',
  	paddingHorizontal: 12,
  	textAlign: 'center'
  }
});


export default MealList;







