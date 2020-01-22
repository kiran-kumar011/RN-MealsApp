import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';


const color = Platform.OS === 'android' ? 'white' : Colors.primaryColor;
const CustomHeaderButton = (props) => {
	return <HeaderButton {...props} IconComponent={Ionicons} size={30} color={color}/>
}

export default CustomHeaderButton;

// react-navigation-material-bottom-tabs
// react-native-papers