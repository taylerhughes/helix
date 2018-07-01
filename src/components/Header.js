import React from 'react';
import './Header.css';
import {Col, Row} from 'react-bootstrap';

const Header = (props) => {
	return (
		<Row className="header">
			<Col xs={12} md={3} className="search">
				{props.children[0]}
        <a href="#" className="clear" onClick={() => props.onClear()}>Clear</a>
			</Col>
			{props.children[1]}
		</Row>
	);
}

export default Header;