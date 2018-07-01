import React from 'react';
import Card from './Card';
import { Row } from 'react-bootstrap';

const CardList = ({images}) => {
	if (images.length === 0) {
		return (
			<div className="none-title">
				<p>There are no images to display.</p>
			</div>
		);
	} else {
		return (
			<Row className="card-container">
				{images.map((image, i) => {
					return (
						<Card key={i} image={images[i].img} labels={images[i].labels}/>
					);
				})}
			</Row>
		)
	}
}

export default CardList;