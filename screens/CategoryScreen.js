import React from 'react';
import { View, 
	Text, 
	StyleSheet, 
	Button, 
	FlatList, 
	TouchableOpacity, 
	Platform, 
	TouchableNativeFeedback,
	Dimensions 
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/colors';


let TouchableCmp = TouchableOpacity;
class CategoryScreen extends React.Component  {

	static navigationOptions = (navigationData) => {
		return {
			title : 'Meals Categories',
			headerLeft: () => (
				<Ionicons 
					name='ios-menu' 
					title='Menu'
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

	componentDidMount = () => {
		if(Platform.OS === 'android' && Platform.Version >= 21) {
			TouchableCmp = TouchableNativeFeedback;
		}
	}

	renderGridItem = (itemData) => {
		return (
			<View style={styles.gridItem}>
				<TouchableCmp style={{flex: 1}} onPress={() => {
					this.props.navigation.navigate({ 
						routeName: 'CategoryMeals',
						params: {
							categoryId : itemData.item.id
						}
					})
				}}>
				<View style={{ ...styles.container, ...{ backgroundColor: itemData.item.color } }}>
					<Text numberOfLines={1} style={styles.title}>{itemData.item.title}</Text>
				</View>
			</TouchableCmp>
			</View>
		)
	}

	render() {
		return(
			<SafeAreaView>
				<FlatList numColumns={2} renderItem={this.renderGridItem} data={CATEGORIES}/>
			</SafeAreaView>
		)
	}

}



const styles = StyleSheet.create({
  gridItem: {
  	flex: 1,
  	margin: 10,
  	height: Math.round(Dimensions.get('window').width / 2.3),
  	borderRadius: 10,
  	// overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  	// elevation: 5,
  },
  container : {
  	flex: 1,
  	borderRadius: 10,
  	padding: 15,
  	justifyContent: 'flex-end',
  	alignItems: 'flex-end',
  	shadowColor: 'black',
  	shadowOpacity: 0.26,
  	shadowOffset: { width: 0, height: 2},
  	shadowRadius: 10,
  }, 
  title: {
  	fontSize: 22,
  	fontWeight: 'bold',
  	textAlign: 'right'
  }
});


export default CategoryScreen;




