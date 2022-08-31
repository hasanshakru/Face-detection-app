import React from 'react';
import Tilt from 'react-tilt';
import FaceDetectionlogo from './FaceDetectionlogo.png'
import './Logo.css';


const Logo = () => {
	return (
		<div className='ma4 mt0'> 
			<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 120, width: 120 }} >
				<div className="Tilt-inner pa3">
					<img style={{paddingTop: '5px', paddingRight:'2px' }}alt='logo' src={FaceDetectionlogo}/>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;
