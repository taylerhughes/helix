import React from 'react';
import Card from './Card';
import { Grid, Row } from 'react-bootstrap';

const CardList = ({images}) => {
	if (images.length === 0) {
		return (
		<Grid className="container-fluid">
			<div className="none-title">
				<p>There are no images to display.</p>
			</div>
		</Grid>
		);
	} else {
		return (
		<Grid className="container-fluid">
			<Row className="card-container">
				{images.map((image, i) => {
					return (
						<Card key={i} image={images[i].img} labels={images[i].labels}/>
					);
				})}
			</Row>
		</Grid>
		)
	}
}

export default CardList;