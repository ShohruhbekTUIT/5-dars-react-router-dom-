import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<h2>About</h2>
			<Link
				className='text-decoration-none text-reset position-absolute end-0 bottom-0'
				to='/about/posts'>
				<button className='btn btn-light'>post</button>
			</Link>
		</div>
	);
};

export default About;
