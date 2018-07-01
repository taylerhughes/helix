import React from 'react';
import { Col } from 'react-bootstrap';
import './Card.css';
import pencil from '../utils/pencil.png';
import { Link } from 'react-router-dom';

const Card = ({image, labels}) => {
	return (
		<Col xs={12} md={2}>
			<div className="card-box">
				<div className="img-container">
					<div className="edit">
						<Link to={{ pathname: '/edit', state: { imageuri: image} }}>
							<img src={pencil} alt=""/>
						</Link>
					</div>
					<img src={`https://storage.googleapis.com/${image}`} alt="test"/>
				</div>
				<div className="card-labels">
					<p>{
						labels.map(label => {
							return label + ', ';
						})
					}</p>
				</div>
			</div>
		</Col>
	);
}

export default Card;