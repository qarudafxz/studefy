import React, { useState, useEffect } from "react";

import { BsTrash3 } from "react-icons/bs";

function RecentlyAdded() {
	const [studData, setData] = useState({});

	return (
		<div className='font-main flex flex-col gap-2 p-4 border border-[#D5D5D5] rounded-md shadow-xl'>
			<div className='flex justify-between items-center'>
				<h1 className='font-thin text-md '>Recently Deleted Student</h1>
				<BsTrash3 />
			</div>
			<div className='flex flex-col'>
				<h1 className='font-semibold'>Student ID:</h1>
				<h1 className='font-semibold'>Student Program:</h1>
				<h1 className='font-semibold'>Student Name:</h1>
			</div>
		</div>
	);
}

export default RecentlyAdded;