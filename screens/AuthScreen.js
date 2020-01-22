import React from 'react';
import { LinearGradient, 
	ScrollView, 
	KeyBoardAvoidingView, 
	TextInput,
	View,
	Text,
	StyleSheet,
	Button,
	Dimension,
	ActivityIndicator, 
	AsyncStorage
} from 'react-native';

class Authentication extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}

	static navigationOptions = navData => {
		return {
			title : 'Login'
		}
	}

	componentDidMount = async () => {
		try {
			const data = JSON.parse(await AsyncStorage.getItem('user'));
			console.log(data, 'data after retreiving');
		}catch (err) {
			// error handling...
		}
	}

	handleLogin = async () => {
		try {
			console.log('handleLogin function');
			const { email, password } = this.state;
			if(!email.trim() || !password) return;

			await AsyncStorage.setItem('user', JSON.stringify({email, password}));
			// this.setState({ })
		} catch(err) {

		}
	}


	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputWrapper}>
					<TextInput 
						style={styles.input} 
						placeholder="Enter your E-mail"
						onChangeText={email => {
							this.setState({ email })
						}}
					/>
				</View>
				<View style={styles.inputWrapper}>
					<TextInput 
						style={styles.input} 
						secureTextEntry
						maxLength={6}
						type='password'
						placeholder="Enter password" 
						onChangeText={password => {
							this.setState({ password })
						}}
					/>
				</View>
				<View style={styles.buttonWrapper}>
					<Button title="Login" onPress={this.handleLogin}/>
				</View>
				<View style={styles.buttonWrapper}>
					<Button title="Sign Up" onPress={this.handleLogin}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	inputWrapper : {
		width: '100%',
		alignItems: 'center',
		marginVertical: 5,
	},
	input : {
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderColor: 'grey',
		borderRadius: 5,
		width: '80%',
		textAlign: 'center'
	},
	buttonWrapper : {
		width: '40%',
		marginVertical: 5
	}
})

export default Authentication;