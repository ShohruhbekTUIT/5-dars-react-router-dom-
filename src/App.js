import React from 'react';
import Header from './Components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './Pages/About/About';
import Users from './Pages/Users/Users';
import Home from './Pages/Home/Home';
import Posts from './Pages/Posts/Posts';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/users' element={<Users />} />
				<Route path='/about/:posts' element={<Posts />} />
				<Route path='/users/posts/:id' element={<Posts />} />
			</Routes>
		</>
	);
}

export default App;
