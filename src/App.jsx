import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logo from "./assets/logo.svg";

import Home from "./pages/Home";
function App() {
	const [loading, setIsLoading] = useState(true);

	useEffect(() => {
		asyncFun().then(() => {
			setIsLoading(false);
		});
	}, []);

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen loading'>
				<img src={Logo} />
			</div>
		);
	}
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
			</Routes>
		</Router>
	);
}

function asyncFun() {
	return new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});
}

export default App;
