import React from 'react';

import { View, Text } from 'react-native';

const Header = (props) => {
	
	const { textStyle, viewStyle } = styles;

	return (

		<View style={viewStyle}>
			<Text style={textStyle} >{props.title}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		height: 64,
		backgroundColor: '#f8f8f8',
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 2,
		position: 'relative' 
	},

	textStyle: {
		fontSize: 20

	}
};

export default Header;