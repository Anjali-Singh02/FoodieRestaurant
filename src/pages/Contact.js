// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import MailIcon from '@mui/icons-material/Mail';
// import CallIcon from '@mui/icons-material/Call';
import {
	Box,
	// Paper,
	// Table,
	// TableBody,
	// TableCell,
	// TableContainer,
	// TableHead,
	// TableRow,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
const Contact = () => {
	return (
		<>
			<Box
				sx={{
					my: 5,
					m: 10,
					textAlign: 'center',
					'& h4': { fontWeight: 'bold', mb: 2 },
					'& p': {
						textAlign: 'justify',
					},
				}}
			>
				<Typography variant="h4">Contact us</Typography>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
					odio beatae ducimus magni nobis culpa praesentium velit
					expedita quae, corrupti, pariatur inventore laboriosam
					consectetur modi impedit error, repudiandae obcaecati
					doloribus.
				</p>
			</Box>
			<Box
				sx={{
					m: 3,
					width: '600px',
					ml: 10,
					textAlign: 'center',
					'@media (max-width:600px)': {
						width: '300px',
					},
				}}
			>
				<div className="contact-form">
					<form>
						<input
							type="text"
							placeholder="Name"
							id="name"
							name="name"
							// value={user.name}
							// onChange={handleChange}
						/>
						<input
							type="email"
							placeholder="Email"
							id="email"
							name="email"
							// value={user.email}
							// onChange={handleChange}
						/>
						<textarea
							rows="4"
							cols="25"
							type="msg"
							placeholder="Message"
							id="msg"
							name="msg"
							// value={user.password}
							// onChange={handleChange}
						/>
						<button type="submit" className="btn btnRegister">
							Register
						</button>
					</form>
				</div>
			</Box>
		</>
	);
};

export default Contact;
