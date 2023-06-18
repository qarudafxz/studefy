import React, { useState } from "react";
import { Link } from "react-router-dom";

import TopLoadingBar from "react-top-loading-bar";

import Logo from "../assets/logo.svg";
import Extracted from "./Extracted";

import { BiPlusCircle } from "react-icons/bi";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import AddStudent from "../components/AddStudent";

import { motion } from "framer-motion";

function Navbar() {
	const [isClick, setIsClick] = useState(false);
	const [isExtract, setIsExtract] = useState(null);
	const [message, setMessage] = useState("");
	const [progress, setProgress] = useState(0);

	const extractDataInJava = async () => {
		setIsExtract(false);
		setProgress(30);
		try {
			setTimeout(() => {
				setProgress(60);
			}, 1200);
			await fetch("http://localhost:3001/api/extractData", {
				method: "GET",
			}).then((res) => {
				if (res.ok) {
					const data = res.json();
					data.then((data) => {
						setMessage(data.message);
						setIsExtract(true);
						setProgress(100);
					});
				}
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='flex justify-between items-center font-main'>
			<TopLoadingBar
				color='#3F4A61'
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
				height={12}
			/>
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
				<button
					onClick={() => setIsClick(!isClick)}
					className='font-thin flex gap-4 items-center py-2 px-4 border border-[#D5D5D5] rounded-full hover:bg-[#D5D5D5] duration-300'>
					<BiPlusCircle />
					Add Student
				</button>
				<button
					onClick={extractDataInJava}
					className='font-thin flex gap-4 items-center py-2 px-4 border border-[#D5D5D5] rounded-full hover:bg-[#D5D5D5] duration-300'>
					<BsFillFileEarmarkCodeFill />
					Extract Data
				</button>
			</div>
			<Extracted
				setIsExtract={setIsExtract}
				isExtract={isExtract}
				message={message}
			/>
		</div>
	);
}

export default Navbar;
