import React from 'react';
import Filter from './Filter';

const FilterContainer = ({ filterArray, clearFilters, removeFilter }) => {
	const filterElements = filterArray.map((row, index) => (
		<Filter key={index} name={row} removeFilter={() => removeFilter(row)} />
	));
	return (
		<div className="filter-container">
			<div className="filters">
				{filterElements.length > 0 ? filterElements : 'No filters'}
			</div>
			<div className="filter-clear-btn" onClick={clearFilters}>
				Clear
			</div>
		</div>
	);
};

export default FilterContainer;
