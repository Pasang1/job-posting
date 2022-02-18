import React from 'react';
import Filteroption from './FilterOption';
import filterOptionData from '../../filterOption.json';

const Sidebar = ({ filterArray, changeFilterArray }) => {
	const filterOptionElements = filterOptionData.map((filter) => (
		<Filteroption
			key={filter.id}
			{...filter}
			checked={filterArray.includes(filter.name)}
			changeFilterArray={() => changeFilterArray(filter.name)}
		/>
	));
	return (
		<div className="sidebar">
			<div className="sidebar-title">Filter by Tech Stack</div>
			<div className="sidebar-body">
				<div className="filter-option-container">{filterOptionElements}</div>
			</div>
		</div>
	);
};

export default Sidebar;
