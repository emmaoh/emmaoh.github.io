import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
	render() {
		return(
			<div className="about-section">
				<div className="about-header">
					<h1>Welcome!</h1>
				</div>			    	
				<div className="description">
					<p> 
							I am currently a Grade 12 student at R.E. Mountain Secondary School! I plan to attend UBC starting Fall 2020 for General Sciences and hopefully one day work in air traffic control.<br/><br/>

							


							

					     My hobbies include playing tennis, exercising in general, adventuring with my best friends, travelling with my family, watching movies, being outdoors and many more.   <br/><br/>

						 The reason I decided to create a website by using a program called React.js is because I wanted to explore my interests. Recently, I went to a Hackathon with my brother and a couple of his friends, and our team ended up
						 winning first place. As I had no strong background on Computer Science, and really only watched the process of their project, I thought this was the perfect opportunity to determine whether or not it's something I have an interest in.   <br/><br/>


							

					</p>
				</div>
			</div>
		);
	}
}
export default About;