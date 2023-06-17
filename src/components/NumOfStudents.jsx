import React, { useEffect, useState } from "react";
import { ImUsers } from "react-icons/im";

import { motion } from "framer-motion";

function NumOfStudents() {
	const [count, setCount] = useState(0);

	const fetchNumberOfStudents = async () => {
		await fetch("http://localhost:3001/api/count")
			.then((res) => res.json())
			.then((data) => {
				setCount(data.count);
			});
	};
	useEffect(() => {
		fetchNumberOfStudents();
	}, []);

	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className='flex flex-col gap-2 p-4 border border-[#D5D5D5] rounded-md shadow-xl bg-gradient-to-tr from-slate-700 to-slate-400 text-white'>
			<div className='flex justify-between items-center'>
				<h1 className='font-thin text-md'>Number of Students</h1>
				<ImUsers />
			</div>
			<p className='font-semibold text-7xl'>{count}</p>
		</motion.div>
	);
}

export default NumOfStudents;
