import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
	let [users, setUsers] = useState({
		isLoading: false,
		data: [],
		isError: false,
	});

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((data) => setUsers(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='mt-5'>
			<h2 className='text-center'>Users</h2>
			<ul className='list-group w-50 mx-auto'>
				{users.data.map((el) => (
					<li className='list-group-item list-group-item-action'>
						<Link
							to={`/users/posts/${el.id}`}
							className='text-reset text-decoration-none d-block'>
							<strong className='me-2'>{el.id}.</strong>
							<strong className='me-2'>{el.username}</strong>
							<em>{el.name}</em>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Users;
