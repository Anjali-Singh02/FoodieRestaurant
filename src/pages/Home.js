import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<div className="home">
			<div className="header-container">
				<h1>Food!e SinghJ! Restaurant</h1>
				<p>Delicious Food of India</p>
				<Link to="/menu">
					<button>ORDER NOW</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
