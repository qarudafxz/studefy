import React from "react";

import Navbar from "../components/Navbar";
import NumOfStudents from "../components/NumOfStudents";
import RecentlyAdded from "../components/RecentlyAdded";

function Home() {
	return (
		<div className='mx-24 mt-10'>
			<Navbar />
			<h1 className='font-bold text-4xl mt-12'>Dashboard</h1>
			<div className='grid grid-cols-5 mt-8 gap-4'>
				<RecentlyAdded />
				<NumOfStudents />
			</div>
			<div className='flex flex-col gap-4 mt-10'>
				<h1 className='font-bold text-4xl'>Student List</h1>
			</div>
		</div>
	);
}

export default Home;
