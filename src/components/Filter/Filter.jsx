import React from 'react';

const Filter = ({ name, removeFilter }) => {
	return (
		<div className="filter">
			<span className="filter-text">{name}</span>
			<div className="remove-filter" onClick={removeFilter}>
				<img
					src="images/icon-remove.svg"
					alt=""
					className="remove-filter-icon"
				/>
			</div>
		</div>
	);
};

export default Filter;
