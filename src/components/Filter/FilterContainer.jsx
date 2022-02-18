import React from 'react';
import Filter from './Filter';

const FilterContainer = () => {
	return (
		<div className="filter-container">
			<div className="filters">
				<Filter name="Frontend" />
			</div>
			<div className="filter-clear-btn">Clear</div>
		</div>
	);
};

export default FilterContainer;
