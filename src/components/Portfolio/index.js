import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Sport Facts',
			description:
				'Sport facts is a website that can when entering the name of the basketball player in the search bar information such as current team, position, conference, and division about this player will show up',
			image: 'project1-screenshot.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'third-party API'
			],
			github: 'https://github.com/BenLu2/sport_facts',
		},
		{
			name: 'Campers United',
			description:
				'Campers United allows users to sign up an account, login, and review all other people’s post about their camping experiences. Or go to their own profiles and create reviews.',
			image: 'campersunited.png',
			technologies: [
				'GraphQL',
				'JavaScript',
				'Node.js',
				'MongoDB',
				'Mongoose ODM',
				'JWT token',
			],
			github: 'https://github.com/Williamskj/Project-3.git ',
			deployed: 'https://project-03-03-04-2022.herokuapp.com/',
		},
		{
			name: 'Social Network API',
			description:
				'This application is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.',
			image: 'social network API.gif',
			technologies: ['Express.js', ' MongoDB', 'Mongoose ODM'],
			github: ':https://github.com/BenLu2/Social-Network-API',
		},
		{
			name: 'Employee Management System',
			description:
				'This Employee Management System project is designed for company to track their employees role, salary and managers.',
			image: 'CRM.png',
			technologies: [
				'Inquirer',
				'MySQL2',
				'console.table',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/BenLu2/Employee-Management-System',
		},
		{
			name: 'Tech Blogs',
			description:
				'This is  a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
			image: 'Tech Blogs.gif',
			technologies: ['MySQL2', ' Sequelize','Handlebars.js'],
			github: 'https://github.com/BenLu2/Tech-Blog',
			
		},
		{
			name: 'Work Day Scheduler',
			description:
				'This is a simple calendar application that allows a user to save events for each hour of the day.',
			image: 'Work Day Scheduler.gif',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/BenLu2/Day-Planner',
			
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
