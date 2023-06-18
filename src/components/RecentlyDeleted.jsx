import React, { useState, useEffect } from "react";

import { MdOutlineTransferWithinAStation } from "react-icons/md";
import Logo from "../assets/icon.svg";
import { motion } from "framer-motion";

function RecentlyAdded() {
	const [studData, setData] = useState({});

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
			<div className='flex justify-between items-center'>
				<h1 className='font-thin text-md '>Recently Removed Student</h1>
				<MdOutlineTransferWithinAStation />
			</div>
			<div className='flex flex-col'>
				<h1 className='font-semibold'>Student ID:</h1>
				<h1 className='font-semibold'>Student Program:</h1>
				<h1 className='font-semibold'>Student Name:</h1>
			</div>
		</motion.div>
	);
}

export default RecentlyAdded;
