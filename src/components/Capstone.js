import React, { Component } from 'react';
import '../css/Capstone.css';

import image1 from '../images/capstone/1.png'
import image2 from '../images/capstone/2.png'
import image3 from '../images/capstone/3.png'
import image4 from '../images/capstone/4.png'
import image5 from '../images/capstone/col.png'
import image6 from '../images/capstone/edit.png'
import image7 from '../images/capstone/7.png'
import image8 from '../images/capstone/8.png'


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
     
	                The reason I decided to create a website by using a program called React.js is because I wanted to explore my interests. Recently, I went to a Hackathon with my brother and a couple of his friends, and the team ended up
						 winning first place. As I had no strong background on Computer Science, and really only watched the process of their project, I thought this was the perfect opportunity to determine whether or not it's something I could potentially have an interest in.   <br/><br/> 
	                This website was created by JavaScript and CSS for styling aspects. The photos below are examples of how I created the website. <br/><br/>

					Evidence of My Capstone: <br/><br/>
					</p>
				</div>
				<div className="photos">
					<div className="column">
						<div className="box">
								<img src={ image1 }></img>
								<div className="text">Capstone Js</div>
						</div>
						<div className="box">
								<img src={ image3 }></img>
								<div className="text">Photos Js</div>
						</div>
						<div className="box">
								<img src={ image5 }></img>
								<div className="text">Collection of Photos</div>
						</div>
						<div className="box">
								<img src={ image7}></img>
								<div className="text">About Js</div>
						</div>

					</div>
					<div className="column">
						<div className="box">
								<img src={ image2 }></img>
								<div className="text">Capstone Css</div>
						</div>
						<div className="box">
								<img src={ image4}></img>
								<div className="text">Photos Css</div>
						</div>
						<div className="box">
								<img src={ image6}></img>
								<div className="text">Editing Photos</div>
						</div>
						<div className="box">
								<img src={ image8}></img>
								<div className="text">About Css</div>
						</div>



						</div>
				</div>
			</div>);

					
	}
}

	

export default Capstone;