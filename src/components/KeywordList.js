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
					keywords.map((keyword, i) => {
						return <Keyword key={keyword[0]} name={keyword[0]} count={keyword[1]} keywordChange={keywordChange}/>;
					})
				}
			</Row>
		</Col>
	);
}

export default KeywordList;