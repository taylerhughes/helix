import React from 'react';
import Card from './Card';
import { Row } from 'react-bootstrap';

const CardList = ({images}) => {
	return (
		<Row className="card-container">
			{
				images.map((image, i) => {
					return (
						<Card key={i} image={images[i].img} labels={images[i].labels}/>
					);
				})
			}
		</Row>
	);
}

export default CardList;