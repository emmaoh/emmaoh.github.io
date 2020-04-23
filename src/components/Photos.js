import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Photos.css';

import image1 from '../images/main/washpark.jpg'
import image2 from '../images/main/ggb.jpg'
import image3 from '../images/main/maui.jpg'
import image4 from '../images/main/sas.jpg'
import image5 from '../images/main/me.jpg'
import image6 from '../images/main/cannonb.jpg'
import image7 from '../images/main/oosoyos.jpg'
import image8 from '../images/main/empstate.jpg'
import image9 from '../images/main/rainier.jpg'
import image10 from '../images/main/tantalus.jpg'
import image11 from '../images/main/pearl.jpg'
import image12 from '../images/main/hawaii.jpg'
import image13 from '../images/main/brandy.jpg'
import image14 from '../images/main/2005.jpg'
import image15 from '../images/main/pebble.jpg'
import image16 from '../images/main/sunset.jpg'
import image17 from '../images/main/ed.jpg'
import image18 from '../images/main/parents.jpg'
import image19 from'../images/main/tulip.jpg'
import image20 from'../images/main/wash.jpg'
import image21 from '../images/main/sf.jpg'
import image22 from '../images/main/niagara.jpg'
import image23 from '../images/main/hal.jpg'
import image24 from '../images/main/mont.jpg'
import image25 from '../images/main/friends.jpg'
import image26 from '../images/main/hanauma.jpg'
import image27 from '../images/main/hawater.jpg'
import image28 from '../images/main/cheese.jpg'
import image29 from '../images/main/honolulu.jpg'
import image30 from '../images/main/tennis.jpg'
import image31 from '../images/main/lake.jpg'
import image32 from '../images/main/joffres.jpg'
import image33 from '../images/main/mom.jpg'
import image34 from '../images/main/seattle.jpg'
import image35 from '../images/main/posey.jpg'
import image36 from '../images/main/washington.jpg'
import image37 from '../images/main/rocky.jpg'
import image38 from '../images/main/philly.jpg'
import image39 from '../images/main/bff.jpg'
import image40 from '../images/main/dc.jpg'
import image41 from '../images/main/siblings.jpg'
import image42 from '../images/main/beach.jpg'
import image43 from '../images/main/diamond.jpg'
import image44 from '../images/main/peyto.jpg'
import image45 from '../images/main/othello.jpg'
import image46 from '../images/main/uss.jpg'
import image47 from '../images/main/oregon.jpg'
import image48 from '../images/main/fam.jpg'
import image49 from '../images/main/sunsets.jpg'
import image50 from '../images/main/cali.jpg'
import image51 from '../images/main/liberty.jpg'
import image52 from '../images/main/yankee.jpg'
import image53 from '../images/main/trails.jpg'
import image54 from '../images/main/east.jpg'
import image55 from '../images/main/blowhole.jpg'
import image56 from '../images/main/korea.jpg'
import image57 from '../images/main/august.jpg'
import image58 from '../images/main/edmund.jpg'
import image59 from '../images/main/roads.jpg'
import image60 from '../images/main/roadtrip.jpg'
import image61 from '../images/main/diablo.jpg'
import image62 from '../images/main/japan.jpg'


class Photos extends Component {

	render() {
		return(
			<div className="photos-section">
				<div className="photos-header">
					<h1>My Photos</h1>
				</div>
				<div className="photos">
					<div className="column">
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image1 }></img>
								<div className="text">Washington Park</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image42 }></img>
								<div className="text">Centennial Beach</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image15}></img>	
								<div className="text">Pebble Beach</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <Link to="/album/rainier"> */}
								<img src={ image2 }></img>
								<div className="text">Golden Gate Bridge</div>
							{/* </Link> */}
						</div> 
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image9}></img>	
								<div className="text">Mount Rainier</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image12}></img>	
								<div className="text">Halona Blowhole Lookout</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image16}></img>	
								<div className="text">Oregon Sunsets</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image19}></img>	
								<div className="text">Tulip Festival</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image22}></img>
								<div className="text">Niagara Falls</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image26 }></img>
								<div className="text">Hanauma Bay</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image32 }></img>
								<div className="text">Joffre Lakes Provincial Park</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image36 }></img>
								<div className="text">Washington Views</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image37 }></img>
								<div className="text">Rocky Mountains</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image40 }></img>
								<div className="text">Washington D.C.</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image43 }></img>
								<div className="text">Diamond Head</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image46 }></img>
								<div className="text">USS Bowfin</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image49 }></img>
								<div className="text">Sunsets</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image53 }></img>
								<div className="text">Washington Trails</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image56 }></img>
								<div className="text">South Korea</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image61 }></img>
								<div className="text">Diablo Lake</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image62}></img>
								<div className="text">Our Trip to Japan</div>
							{/* </Link>  */}
						</div>
					
					</div>
					<div className="column">
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image3 }></img>
								<div className="text">Maui</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image4 }></img>
								<div className="text">Sas</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image10}></img>	
								<div className="text">Tantalus Lookout</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image13}></img>	
								<div className="text">Brandywine Waterfalls</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image14}></img>	
								<div className="text">July 2005</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image17}></img>	
								<div className="text">Edmund</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image20}></img>
								<div className="text">Washington Monument</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image23 }></img>
								<div className="text">Haleakala National Park</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image27 }></img>
								<div className="text">Hawaii</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image31 }></img>
								<div className="text">Lake Days</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image33 }></img>
								<div className="text">My mom and I</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image35 }></img>
								<div className="text">Buster Posey</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image39 }></img>
								<div className="text">My Best Friend</div>
							{/* </Link>  */}
						</div>
						
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image47 }></img>
								<div className="text">Oregon</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image50 }></img>
								<div className="text">California</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image55 }></img>
								<div className="text">Nakalele Blowhole</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image57 }></img>
								<div className="text">August 2005</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image58 }></img>
								<div className="text">Ed 2007</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image60 }></img>
								<div className="text">Family Hikes</div>
							{/* </Link>  */}
						</div>
					
					</div>
					<div className="column">
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image5 }></img>	
								<div className="text">Me</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image6 }></img>	
								<div className="text">Cannon Beach</div>
							{/* </Link> */}
						</div>		
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image7}></img>	
								<div className="text">Oosoyos</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image8}></img>	
								<div className="text">New York</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image11}></img>	
								<div className="text">Pearl Harbour</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <to="/album/goldenears"> */}
								<img src={ image18}></img>	
								<div className="text">Parents</div>
							{/* </Link> */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image21 }></img>
								<div className="text">San Francisco</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image24 }></img>
								<div className="text">Montreal</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image25 }></img>
								<div className="text">Friends</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image28 }></img>
								<div className="text">Cheesin' 2007</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image29 }></img>
								<div className="text">Honolulu</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image30 }></img>
								<div className="text">Tennis</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image34 }></img>
								<div className="text">Seattle</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image38 }></img>
								<div className="text">Philadelphia</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image41 }></img>
								<div className="text">Siblings</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image44 }></img>
								<div className="text">Peyto Lake</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image45}></img>
								<div className="text">Othello Tunnels</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image48 }></img>
								<div className="text">My Family</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image51 }></img>
								<div className="text">Statue of Liberty</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image52 }></img>
								<div className="text">Yankee Stadium</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image54 }></img>
								<div className="text">East Coast</div>
							{/* </Link>  */}
						</div>
						<div className="box">
							{/* <Link to="/album/oregon"> */}
								<img src={ image59 }></img>
								<div className="text">Haleakala Crater</div>
							{/* </Link>  */}
						</div>
						
					</div>  	  		  
				</div>
				<div className="photos-link">
					photo section in progress...
				</div>
			</div>
		);
	}

}


export default Photos;