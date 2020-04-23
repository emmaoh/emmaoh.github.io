import React, { Component } from 'react';

import ProfilePhoto from '../images/profilephoto.png';
import Background from '../images/profilebackground.jpg';
import Typer from './Typer';
import '../css/Profile.css';

const typedMessages = [
    'Emma Oh'
  ];

const preloadImages = ['../images/profilebackground.jpg', '../images/profilephoto.png'];

class Profile extends Component {
	componentDidMount() {
		preloadImages.forEach((image) => {
			new Image().src = image;
		});
	}

	render() {
		return(
			<div className="homepage">
			<div className="profile" style={{
					backgroundImage: `url(${Background})`
				}}>
					<div className="profile-photo">
						<img src={ ProfilePhoto }></img>
					</div>
					<div className="profile-title">
						{ this.renderTypedMessages() }
					</div>	
			</div>
			<div className="main-nav">
			<ul className="home-nav-menu">
			  <div className="nav-menu">
				  <li><a href='#about'>About</a></li>
				  <li><a href='#photos'>Photos</a></li>
				  <li><a href='#capstone'>Capstone</a></li>
				 
				  
			  </div>
			</ul>
			<ul>
			  
			 
			</ul>
		  </div>
		  </div>
		);
	}

	renderTypedMessages() {
		return (
		  <Typer
		  	dataText={ typedMessages }
		  />
		);
	  }
}

export default Profile;