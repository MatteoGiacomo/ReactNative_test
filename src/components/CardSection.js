import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {

	return (

		<View style={ styles.cardSectionStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	cardSectionStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		borderColor: '#ddd',
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	}

};


export default CardSection;