import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
	return (
		<Box
			sx={{
				my: 15,
				mx: 10,
				p: 2,
				textAlign: 'center',
				'& h4': {
					fontWeight: 'bold',
					color: '#14213d',
					my: 2,
				},
				'& p': {
					textAlign: 'justify',
					fontSize: '1.2rem',
				},
				'@media (max-width: 600px)': {
					mt: 0,
					mx: 2,
					'& h4': {
						fontSize: '1.4rem',
					},
					'& p': {
						fontSize: '1rem',
					},
				},
			}}
		>
			<Typography variant="h4">
				Welcome to Foodie Singhji Restaurant
			</Typography>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. A
				molestiae eaque maxime est provident quod sint minima, ea
				dolorum praesentium officiis cumque? A, ex facilis enim placeat
				dolorum quos temporibus fugit quisquam ipsa natus odit saepe.
				Repellat, placeat, cum ea fuga quisquam reprehenderit, rerum
				incidunt hic voluptas est molestiae ad. Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Veniam et ullam iste quasi
				distinctio non obcaecati culpa, beatae repellat omnis eos
				laborum quam rerum qui ab quaerat mollitia! Nobis, officia.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
				eveniet facere iusto aliquam doloremque quae reiciendis
				consectetur veritatis nulla, molestias sequi cumque eaque aut in
				deserunt perspiciatis necessitatibus deleniti maiores?Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Natus, omnis
				unde culpa reiciendis inventore sapiente consectetur non
				possimus aut quam. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Illo corrupti a doloremque animi nam deleniti,
				commodi aperiam corporis blanditiis impedit.
			</p>
		</Box>
	);
};

export default About;
