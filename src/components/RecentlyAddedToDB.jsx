import React from "react";
import { motion } from "framer-motion";
import { BsDatabaseCheck } from "react-icons/bs";
import Logo from "../assets/icon.svg";

function RecentlyAddedToDb() {
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
				<h1 className='font-thin text-md'>Recently Added Student to Databse</h1>
				<BsDatabaseCheck size={30} />
			</div>
			<div className='flex flex-col'>
				<h1 className='font-semibold'>
					Student ID: <span className='font-thin'>Static</span>
				</h1>
				<h1 className='font-semibold'>
					Student Program: <span className='font-thin'>Static</span>
				</h1>
				<h1 className='font-semibold'>
					Student Name: <span className='font-thin'>Static</span>
				</h1>
			</div>
		</motion.div>
	);
}

export default RecentlyAddedToDb;
