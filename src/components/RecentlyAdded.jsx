import React, { useState, useEffect } from "react";

import { BsFillPersonBadgeFill } from "react-icons/bs";

function RecentlyAdded() {
	const [studData, setData] = useState({});

	useEffect(() => {
		fetch("http://localhost:3001/api/last")
			.then((res) => res.json())
			.then((data) => {
				const trimmedLastNode = data.lastNode.trim();

				// Extract student ID
				const studentIdMatch = trimmedLastNode.match(/id="([^"]+)"/);
				const studentId = studentIdMatch ? studentIdMatch[1] : null;

				// Extract program ID
				const programIdMatch = trimmedLastNode.match(
					/<programid>(.*?)<\/programid>/
				);
				const programId = programIdMatch ? programIdMatch[1] : null;

				// Extract name
				const nameMatch = trimmedLastNode.match(/<name>(.*?)<\/name>/);
				const name = nameMatch ? nameMatch[1] : null;

				setData({
					id: studentId,
					program: programId,
					name: name,
				});

				console.log(studData);
			});
	}, []);

	return (
		<div className='flex flex-col gap-2 p-4 border border-[#D5D5D5] rounded-md shadow-xl'>
			<div className='flex justify-between items-center'>
				<h1 className='font-thin text-md'>Recently Added Student</h1>
				<BsFillPersonBadgeFill />
			</div>
			<div className='flex flex-col'>
				<h1 className='font-semibold'>
					Student ID: <span className='font-thin'>{studData.id}</span>
				</h1>
				<h1 className='font-semibold'>
					Student Program: <span className='font-thin'>{studData.program}</span>
				</h1>
				<h1 className='font-semibold'>
					Student Name: <span className='font-thin'>{studData.name}</span>
				</h1>
			</div>
		</div>
	);
}

export default RecentlyAdded;