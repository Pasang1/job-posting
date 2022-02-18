import React from 'react';
import FilterContainer from './components/Filter/FilterContainer';
import Job from './components/Job/Job';
import jobsData from './data.json';
import './style.css';

const App = () => {
	const jobElements = jobsData.map((job) => <Job key={job.id} {...job} />);
	const data = {
		id: 1,
		company: 'Photosnap',
		logo: './images/photosnap.svg',
		new: true,
		featured: true,
		position: 'Senior Frontend Developer',
		role: 'Frontend',
		level: 'Senior',
		postedAt: '1d ago',
		contract: 'Full Time',
		location: 'USA Only',
		languages: ['HTML', 'CSS', 'JavaScript'],
		tools: [],
	};
	return (
		<div className="container">
			<header></header>
			<FilterContainer />
			<div className="jobs">
				{jobElements.length > 0 ? jobElements : <h2>No Jobs found</h2>}
			</div>
		</div>
	);
};

export default App;
