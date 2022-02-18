import React from 'react';
import Job from './Job';
import jobsData from '../../data.json';

const Jobcontainer = ({ filterArray }) => {
	const jobs = jobsData;

	let newJobsData = [...jobs];
	if (filterArray.length > 0) {
		newJobsData = newJobsData.filter((job) => {
			return filterArray.find(
				(row) =>
					job.languages.find((language) => language.toLowerCase() === row) ||
					job.tools.find((tool) => tool.toLowerCase() === row)
			);
		});
	}
	const jobElements = newJobsData.map((job) => <Job key={job.id} {...job} />);
	return (
		<div className="jobs">
			{jobElements.length > 0 ? jobElements : <h2>No Jobs found</h2>}
		</div>
	);
};

export default Jobcontainer;
