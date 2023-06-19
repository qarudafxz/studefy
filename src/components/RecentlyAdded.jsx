import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import Logo from "../assets/icon.svg";

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
			});
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
			<div className='relative flex justify-between items-center'>
				<h1 className='font-thin text-md'>Recently Added Student to XML</h1>
				<BsFillPersonBadgeFill size={20} />
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
		</motion.div>
	);
}

export default RecentlyAdded;
