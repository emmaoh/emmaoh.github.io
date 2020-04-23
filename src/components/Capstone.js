import React, { Component } from 'react';
import '../css/Capstone.css';

import image1 from '../images/capstone/1.png'



class Capstone extends Component {
	render() {
		return(
			<div className="capstone-section">
				<div className="capstone-header">
					<h1>My Capstone</h1>
				</div>
				<div className="description">
				<p>
					For my capstone project I've decided to create my own portfolio website using a JavaScript library called React.js. My brother is currently studying Computer Science at UBC, and with him being a huge influence in who I am today, it motivated me to create something of my own. With the help of my brother, I've made my own website for photography of my family, friends and travels! <br/><br/>
     
	                This website was created by JavaScript and CSS for styling aspects. <br/><br/>

					Evidence of My Capstone: <br/><br/>
					</p>
				</div>
				<div className="photos">
					<div className="column">
						<div className="box">
								<img src={ image1 }></img>
								<div className="text">Washington Park</div>
						</div>
					</div>
				</div>
			</div>);

					
	}
}

	

export default Capstone;