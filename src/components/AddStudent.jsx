import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { IoCloseCircleSharp, IoReturnUpBackOutline } from "react-icons/io5";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../assets/logo.svg";

function AddStudent({ ...props }) {
	const [id, setStudentid] = useState("");
	const [program, setProgram] = useState("");
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [address, setAddress] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProgress(30);

		if (!id || !program || !name || !age || !address || !contactNumber) {
			toast.error("Please enter all student information!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			setProgress(100);
			return;
		}

		await fetch("http://localhost:3001/api/insert", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id,
				program,
				name,
				age,
				address,
				contact_number: contactNumber,
			}),
		}).then((res) => {
			if (res.status === 500) {
				const data = res.json();

				toast.error(data.message, {
					position: "top-right",
					autoClose: 4000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				return;
			} else {
				toast.success("Student added successfully! \n Please wait...", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				setProgress(100);
				setTimeout(() => {
					window.location.reload();
				}, 3300);
				return;
			}
		});
	};

	useEffect(() => {}, []);
	return (
		<div className='absolute bg-white w-9/12 rounded-md shadow-md'>
			<ToastContainer
				position='top-right'
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
			{/* Same as */}
			<ToastContainer />
			<div
				className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${
					blur ? "backdrop-blur-lg" : ""
				}`}>
				<motion.form
					onSubmit={handleSubmit}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className='flex flex-col gap-4 p-10 w-5/12 bg-white absolute z-10 left-62 top-42 rounded-xl bg-blend-overlay shadow-2xl'>
					<div className='flex justify-between items-center'>
						<img
							src={Logo}
							className='h-auto w-32'
						/>
						<h1 className='font-bold text-2xl'>Add New Student</h1>
						<IoCloseCircleSharp
							className='cursor-pointer'
							size={40}
							onClick={() => props.setIsClick(!props.isClick)}
						/>
					</div>
					<div className='flex flex-col gap-4 mt-8'>
						<h1 className='font-semibold'>Student ID:</h1>
						<input
							type='text'
							className='border border-[#D5D5D5] py-2 pl-2 rounded-md focus:outline-none'
							onChange={(e) => setStudentid(e.target.value)}
						/>
						<h1 className='font-semibold'>Student Program:</h1>
						<input
							type='text'
							className='border border-[#D5D5D5] py-2 pl-2 rounded-md focus:outline-none'
							onChange={(e) => setProgram(e.target.value)}
						/>
						<h1 className='font-semibold'>Student Name:</h1>
						<input
							type='text'
							className='border border-[#D5D5D5] py-2 pl-2 rounded-md focus:outline-none'
							onChange={(e) => setName(e.target.value)}
						/>
						<h1 className='font-semibold'>Student Age:</h1>
						<input
							type='text'
							className='border border-[#D5D5D5] py-2 pl-2 rounded-md focus:outline-none'
							onChange={(e) => setAge(e.target.value)}
						/>
						<h1 className='font-semibold'>Student Address:</h1>
						<input
							type='text'
							className='border border-[#D5D5D5] py-2 pl-2 rounded-md focus:outline-none'
							onChange={(e) => setAddress(e.target.value)}
						/>
						<h1 className='font-semibold'>Student Contact Number:</h1>
						<input
							type='text'
							className='border border-[#D5D5D5] py-2 pl-2 rounded-md focus:outline-none'
							onChange={(e) => setContactNumber(e.target.value)}
						/>
						<button
							type='submit'
							className='mt-12 bg-gradient-to-tr from-slate-700 to-slate-400 text-white font-bold py-3 rounded-md'>
							Add Record
						</button>
					</div>
				</motion.form>
			</div>
		</div>
	);
}

export default AddStudent;
