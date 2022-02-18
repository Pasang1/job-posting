import React from 'react';
import JobTag from './JobTag';

const Job = (props) => {
	const {
		company,
		logo,
		new: isNew,
		featured: isFeatured,
		position,
		role,
		level,
		postedAt,
		contract,
		location,
		languages,
		tools,
	} = props;
	const languageElements = languages.map((value, index) => (
		<JobTag key={index} value={value} />
	));
	const toolElements = tools.map((value, index) => (
		<JobTag key={index} value={value} />
	));
	return (
		<div className="job">
			<div className="company-logo">
				<img src={logo} alt="" />
			</div>
			<div className="job-information">
				<div className="company-name-container">
					<span className="company-name">{company}</span>
					{isNew && <span className="badge new">New</span>}
					{isFeatured && <span className="badge featured">Featured</span>}
				</div>
				<div className="job-position">{position}</div>
				<div className="job-info">
					<span className="job-posted-time">{postedAt} </span>&#8226;
					<span className="job-contract"> {contract} </span>&#8226;
					<span className="job-location"> {location}</span>
				</div>
			</div>
			{(languages.length > 0 || tools.length > 0) && (
				<div className="job-tags">
					{languages.length > 0 && languageElements}
					{tools.length > 0 && toolElements}
				</div>
			)}
		</div>
	);
};

// "key": 1,
//     "company": "Photosnap",
//     "logo": "./images/photosnap.svg",
//     "new": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []

export default Job;
