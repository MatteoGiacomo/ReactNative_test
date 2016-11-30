import React, { Component }  from 'react';
import { ScrollView, Text } from 'react-native';
import firebase from 'firebase';
import CityDetail from './CityDetails';

class CityList extends Component {

	state = { cities: [] };

	componentWillMount(){

		// recupero dati da database di firebase
		firebase.database().ref('cities')
			.on('value', snapshot => {

				const cityList = [];

				// ciclo per asseganre i file caricati da databse all'array cityList
				snapshot.forEach(child =>{
					const city = child.val();
					cityList.push(city);
				});

				this.setState ({ cities: cityList })

			});

	}

	renderCities (){
		return this.state.cities.map(city => 
			<CityDetail key={city.title} city={city} />
		
		);
	}

	render(){
		return(

			<ScrollView>

				{this.renderCities()}

			</ScrollView>
		);
	}
}


export default CityList;




