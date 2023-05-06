import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<>
			<div className="layout-style">
				<Header />
				<div className="children">{children}</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
