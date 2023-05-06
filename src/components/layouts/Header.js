import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/style.css';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import {
	AppBar,
	Divider,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';

const Header = () => {
	// state for menu drawer to open and close
	const [mobileOpen, setMobileOpen] = useState(false);
	// handle menu drawer on click menuIcon
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	// menu drawer function
	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: 'center' }}
			edge="end"
		>
			<Typography
				color={'#14213d'}
				variant="h5"
				component="div"
				fontWeight="bolder"
				sx={{ flexGrow: '1', padding: '10px', bgcolor: '#e3d5ca' }}
			>
				<RestaurantMenuOutlinedIcon />
				Food!e SinghJ!
			</Typography>
			<Divider />
			<ul className="nav-drawer">
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<Link to="/menu">Menu</Link>
				</li>

				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</Box>
	);
	return (
		<>
			<Box>
				<AppBar component={'nav'} sx={{ bgcolor: '#e3d5ca' }}>
					<Toolbar>
						<Typography
							color={'#14213d'}
							variant="h5"
							component="div"
							fontWeight="bolder"
							sx={{ flexGrow: '1' }}
						>
							<RestaurantMenuOutlinedIcon />
							Food!e SinghJ!
						</Typography>

						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							<ul className="nav-bar">
								<li>
									<Link to="/">Home</Link>
								</li>

								<li>
									<Link to="/menu">Menu</Link>
								</li>

								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</Box>
						<IconButton
							color="#14213d"
							aria-label="open drawer"
							edge="start"
							sx={{
								me: 2,
								display: { sm: 'none' },
							}}
							onClick={handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						sx={{
							display: { xs: 'block', sm: 'none' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: '240px',
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
				<Box sx={{ p: 0 }} />
				<Toolbar />
			</Box>
		</>
	);
};

export default Header;
