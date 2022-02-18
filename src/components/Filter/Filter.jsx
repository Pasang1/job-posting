import React from 'react';

const Filter = ({ name }) => {
	return (
		<div className="filter">
			<span className="filter-text">{name}</span>
			<div className="remove-filter">
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
