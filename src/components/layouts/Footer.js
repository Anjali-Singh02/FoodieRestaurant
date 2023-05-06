import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<Box
				sx={{
					textAlign: 'center',
					bgcolor: '#e3d5ca',
					padding: '10px',
					color: '#14213d',
				}}
			>
				{/* icons */}
				<Box
					sx={{
						my: 1,
						'& svg': {
							fontSize: '30px',
							cursor: 'pointer',
							mr: 1,
						},
						'& svg:hover': {
							transform: 'translateX(5px)',
							transition: 'all 400ms',
						},
						'& a': {
							color: '#14213d',
						},
					}}
				>
					<Link to="https://twitter.com/Anjali04051502">
						<TwitterIcon />
					</Link>
					<Link to="https://www.linkedin.com/in/anjali-singh015/">
						<LinkedInIcon />
					</Link>
					<Link to="https://github.com/AnjaliSingh02">
						<GitHubIcon />
					</Link>
					<Link to="">
						<InstagramIcon />
					</Link>
				</Box>

				<Typography
					variant="h6"
					sx={{
						'@media (max-width:600px)': {
							fontSize: '1rem',
						},
					}}
				>
					All Rights Reserved &copy; Foodie Singhji
				</Typography>
			</Box>
		</>
	);
};

export default Footer;
