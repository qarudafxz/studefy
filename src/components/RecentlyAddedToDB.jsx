import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsDatabaseCheck } from "react-icons/bs";
import Logo from "../assets/icon.svg";

function RecentlyAddedToDb() {
	const [recentlyAdded, setRecentlyAdded] = useState({});

	const fetchRecentlyAdded = async () => {
		try {
			const result = await fetch("http://localhost:3002/api/last_student", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await result.json();
			setRecentlyAdded(data.result[0]);
			console.log(data.result[0]);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchRecentlyAdded();
	}, []);

	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className='font-main flex flex-col gap-2 p-4 border border-[#D5D5D5] rounded-md shadow-xl'
			style={{
				background: `url(${Logo})`,
				backgroundSize: "cover",
				backgroundPosition: "right",
				position: "relative",
				backgroundRepeat: "no-repeat",
			}}>
			<div className='absolute top-0 left-0 right-0 bottom-0'></div>
			<div className='relative flex justify-between items-center gap-8'>
				<h1 className='font-thin text-md'>Recently Added Student to Database</h1>
				<BsDatabaseCheck size={30} />
			</div>
			<div className='flex flex-col'>
				<h1 className='font-semibold'>
					Student ID: <span className='font-thin'>{recentlyAdded.student_id}</span>
				</h1>
				<h1 className='font-semibold'>
					Student Program: <span className='font-thin'>{recentlyAdded.program}</span>
				</h1>
				<h1 className='font-semibold'>
					Student Name: <span className='font-thin'>{recentlyAdded.name}</span>
				</h1>
			</div>
		</motion.div>
	);
}

export default RecentlyAddedToDb;
