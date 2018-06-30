import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div>
			<input 
			type="search"
			onChange={searchChange}
			placeholder="Search images..."
			/>
		</div>
	);
}

export default SearchBox;