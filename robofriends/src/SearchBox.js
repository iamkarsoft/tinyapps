import React from 'react';
const SearchBox = ({ searchfield, searchChange }) =>{
	return(
		<div class="w-full">
			<input type="search" 
			placehodler="searchbox"  
			className="text-center px-4 py-2 border-2 rounded-lg" 
			onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;