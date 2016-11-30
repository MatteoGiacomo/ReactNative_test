import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import firebase from 'firebase';
import CityList from './src/components/CityList';



class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyCAd4vIpM_ucN-3BYq7F_tYzk5_t_I-YSc",
		    authDomain: "cities-d5aaf.firebaseapp.com",
		    databaseURL: "https://cities-d5aaf.firebaseio.com",
		    storageBucket: "cities-d5aaf.appspot.com",
		    messagingSenderId: "912689096786"
		});
	}

	render() {
	    return (
	      <View style={{flex: 1}}>
	        <Header title='Cities'/>
	        <CityList />
	      </View>
	    );
	}
} 

AppRegistry.registerComponent('cities', () => App);