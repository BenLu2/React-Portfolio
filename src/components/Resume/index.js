import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/0001.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div className="center bottom-spacing">
				<a href={require("../../assets/files/YudongLu Resume.pdf")} download>
					<h4>Download my Resume</h4>
				</a>
			</div>
			
		</section>
	);
}

export default Resume;
