import React from 'react';

const SearchBox = ({searchfield, searchChange, inputValue}) => {
	return (
		<div>
			<input 
			type="search"
			value={inputValue}
			onChange={searchChange}
			placeholder="Search images..."
			/>
		</div>
	);
}

export default SearchBox;