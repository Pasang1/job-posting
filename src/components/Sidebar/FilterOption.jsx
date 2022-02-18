import React from 'react';

const Filteroption = ({ name, value, checked, changeFilterArray }) => {
	return (
		<div className="filter-option">
			<input
				type="checkbox"
				name={name}
				checked={checked}
				onChange={changeFilterArray}
			/>
			<label htmlFor={name}>{value}</label>
		</div>
	);
};

export default Filteroption;
