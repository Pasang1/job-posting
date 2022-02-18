import React, { useEffect, useState } from 'react';
import FilterContainer from './components/Filter/FilterContainer';
import Jobcontainer from './components/Job/JobContainer';
import Sidebar from './components/Sidebar/Sidebar';
import filterOptionArray from './filterOption.json';

const App = () => {
	const [filterArray, setFilterArray] = useState([]);

	useEffect(() => {
		window.history.pushState(
			{},
			null,
			`/${filterArray.length > 0 ? `?fiter=${filterArray.join(',')}` : ''}`
		);
	}, [filterArray]);

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const params = Object.fromEntries(urlSearchParams.entries());
		if (params.filter) {
			const newFilterArray = params.filter
				.split(',')
				.filter((key) => filterOptionArray.find((row) => row.name === key));
			setFilterArray(newFilterArray);
		}
	}, []);

	const changeFilterArray = (name) => {
		setFilterArray((prev) =>
			!filterArray.includes(name)
				? [...prev, name]
				: prev.filter((row) => row !== name)
		);
	};

	const removeFilter = (name) => {
		setFilterArray((prev) => prev.filter((row) => row !== name));
	};

	const clearFilters = () => setFilterArray([]);

	return (
		<div className="container">
			<header></header>
			<FilterContainer
				filterArray={filterArray}
				clearFilters={clearFilters}
				removeFilter={removeFilter}
			/>
			<div className="two-columns">
				<Jobcontainer filterArray={filterArray} />
				<Sidebar
					filterArray={filterArray}
					changeFilterArray={changeFilterArray}
				/>
			</div>
		</div>
	);
};

export default App;
