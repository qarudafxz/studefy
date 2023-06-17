import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

import { BiPlusCircle } from "react-icons/bi";
import AddStudent from "../components/AddStudent";

import { motion } from "framer-motion";

function Navbar() {
	const [isClick, setIsClick] = useState(false);

	const map = [
		{
			name: "Dashboard",
			path: "/",
		},
	];

	return (
		<div className='flex justify-between items-center font-main'>
			{isClick && (
				<AddStudent
					isClick={isClick}
					setIsClick={setIsClick}
				/>
			)}
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					delay: 0.9,
					ease: [0, 0.71, 0.2, 1.01],
				}}>
				<img
					src={Logo}
					className='h-auto w-36'
				/>
			</motion.div>
			<div className='flex gap-8'>
				{map.map((item, index) => {
					return (
						<div
							key={index}
							className='py-2 px-4 font-thin hover:bg-[#D5D5D5] duration-300 rounded-full'>
							<Link to={item.path}>{item.name}</Link>
						</div>
					);
				})}
				<button
					onClick={() => setIsClick(!isClick)}
					className='font-thin flex gap-4 items-center py-2 px-4 hover:bg-[#D5D5D5] duration-300 rounded-full'>
					<BiPlusCircle />
					Insert Record
				</button>
			</div>
		</div>
	);
}

export default Navbar;
