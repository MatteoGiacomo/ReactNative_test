import React, { Component }  from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const CityDetail = ({city}) => {
	const { title, thumbnail_image, image, url, country} = city;

	return (
		<Card>

			<CardSection>

				<View style= {styles.thumbnailContainerStyle} >
					<Image source = {{ uri: thumbnail_image}} style= {styles.thumbnailStyle}/>
				</View>
				<View style= {styles.headerContainerStyle}>
					<Text >{title}</Text>
					<Text >{country}</Text>
				</View>

			</CardSection>



			<CardSection>
				<Image style={styles.imageStyle} source = {{ uri: image }} />
			</CardSection>



			<CardSection>
				<Button funPass={() => Linking.openURL(url)}>Wikipedia</Button>
			</CardSection>
			
		</Card>
	);
};

const styles = {
	imageStyle: {
		height: 300,
		width: null,
		flex: 1 
	},

	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		marginLeft: 10,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerContainerStyle: {
		justifyContent: 'space-around',
		flexDirection: 'column'
	}
};

export default CityDetail;
