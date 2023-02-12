import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='bg-dark py-3'>
			<div className='container'>
				<div className='d-flex'>
					<h2 className='h2 text-white'>
						<Link className='text-reset text-decoration-none' to='/'>
							Countries
						</Link>
					</h2>
					<nav className='ms-auto'>
						<ul className='d-flex gap-3 list-unstyled'>
							<li className='fs-5'>
								<Link
									className='fw-bold text-white text-decoration-none'
									to='/'>
									Home
								</Link>
							</li>
							<li className='fs-5'>
								<Link
									className='fw-bold text-white text-decoration-none'
									to='/about'>
									About
								</Link>
							</li>
							<li className='fs-5'>
								<Link
									className='fw-bold text-white text-decoration-none'
									to='/users'>
									Users
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
