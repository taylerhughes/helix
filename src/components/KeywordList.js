import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './KeywordList.css';
import Keyword from './Keyword.js';

const KeywordList = ({keywords, keywordChange}) => {
	return (
		<Col xs={12} md={9}>
			<Row className="keywords-title">
				<p>Suggested Keywords</p>
			</Row>
			<Row className="flex">{
				if(keywords.length === 0) {
					return <Col><div className="none"><p>There are none...</p></div></Col>;
				} else {
					keywords.map((keyword, i) => {
						return <Keyword name={keyword[0]} count={keyword[1]} keywordChange={keywordChange}/>;
					})
				}
			}
			</Row>
		</Col>
	);
}

export default KeywordList;