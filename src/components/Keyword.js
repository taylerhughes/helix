import React from 'react';
import {Col} from 'react-bootstrap';

const Keyword = ({name, count, keywordChange}) => {
	return (
		<Col className=".d-md-inline-flex keyword-container"><a className="keyword" onClick={() => keywordChange(name)}>{name}<span>{count}</span></a></Col>
	);
}

export default Keyword;