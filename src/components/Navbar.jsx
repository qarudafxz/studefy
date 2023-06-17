import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

import { BiPlusCircle } from "react-icons/bi";
import AddStudent from "../components/AddStudent";

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
			<img
				src={Logo}
				className='h-auto w-36'
			/>
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
