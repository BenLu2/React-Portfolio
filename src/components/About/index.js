import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<p>
				Knowledgeable IT customer support engineer with three years of experience assisting top 500 enterprise customers, providing cloud configuration, dedicated solution support, performance optimization, and in-depth troubleshooting. 
Experienced with cloud platforms such as AWS and Google Cloud, and other monitoring platforms include Catchpoint and Cedexis.
Currently studying full-stack development, with newly developed skills in JavaScript, CSS, React.js, and responsive web design.
			
				</p>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/Picture.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			
		</section>
	);
}

export default About;
