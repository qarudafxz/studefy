import React from "react";
import { FaDatabase } from "react-icons/fa";

import { motion } from "framer-motion";

function NumberOfStudentsFromSQL() {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className='flex flex-col gap-2 p-4 border border-[#D5D5D5] rounded-md shadow-xl bg-gradient-to-tr from-slate-700 to-slate-400 text-white'>
			<div className='flex justify-between items-center'>
				<h1 className='font-thin text-md'>Number of Students from Database</h1>
				<FaDatabase />
			</div>
			<p className='font-semibold text-7xl'>Static</p>
		</motion.div>
	);
}

export default NumberOfStudentsFromSQL;
