import React, { useState, useEffect } from "react";
import { tableRows } from "../data/constants";

import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UpdateStudent from "./UpdateStudent";

function Students() {
	const [progress, setProgress] = useState(0);
	const [studentData, setStudentData] = useState([] || studentData);
	const pageSize = 2; // Number of rows per page
	const [currentPage, setCurrentPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [dataForEdit, setDataForEdit] = useState({});

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	// Calculate pagination variables
	const totalStudents = studentData?.data?.length;
	const totalPages = Math.ceil(totalStudents / pageSize);
	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const currentStudents = studentData?.data?.slice(startIndex, endIndex);

	const handleFetchData = async () => {
		try {
			await fetch("http://localhost:3002/api/all", {
				method: "GET",
			})
				.then((res) => res.json())
				.then((data) => {
					setStudentData(data);
				});
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async (id) => {
		try {
			await fetch(`http://localhost:3002/api/delete/${id}`, {
				method: "DELETE",
			}).then((res) => {
				if (res.status === 500) {
					const data = res.json();

					toast.error(data.message, {
						position: "top-right",
						autoClose: 2900,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
					return;
				} else {
					toast.success("Student successfully deleted \n Please wait...", {
						position: "top-right",
						autoClose: 2900,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
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
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		handleFetchData();
	}, []);

	return (
		<div>
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
			{isModalOpen && (
				<UpdateStudent
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					dataForEdit={dataForEdit}
					setDataForEdit={setDataForEdit}
				/>
			)}
			<table className='w-full'>
				<thead>
					{/* Table header */}
					{}
					<tr className='border'>
						{tableRows.map((row, index) => (
							<th
								key={index}
								className={`font-bold text-sm p-4 ${
									index === tableRows.length - 1
										? "bg-gradient-to-tr from-slate-700 to-slate-500 text-white"
										: "border border-white bg-[#D5D5D5]"
								}`}>
								{row.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{/* Table rows */}
					{currentStudents?.map((student, index) => (
						<tr
							key={index}
							className={`border ${
								index % 2 === 0 ? "bg-[#eeeeee]" : "bg-[#D5D5D5]"
							}`}>
							<td className='text-sm p-4 border border-white'>{student.id}</td>
							<td className='text-sm p-4 border border-white'>{student.student_id}</td>
							<td className='text-sm p-4 border border-white'>{student.name}</td>
							<td className='text-sm p-4 border border-white'>{student.program}</td>
							<td className='text-sm p-4 border border-white'>{student.age}</td>
							<td className='text-sm p-4 border border-white'>{student.address}</td>
							<td className='text-sm p-4 border border-white'>
								{student.contact_number}
							</td>
							<td className='flex gap-4 items-center p-4 pl-6'>
								<button
									className='flex gap-2 items-center bg-[#32a827] px-2 text-white cursor-pointer rounded-md hover:bg-[#13550e] duration-150'
									onClick={() => {
										setIsModalOpen(true);
										setDataForEdit(student);
									}}>
									<FiEdit
										className='p-2'
										size={30}
									/>
									Edit
								</button>
								<button
									className='flex gap-2 items-center bg-[#c42828] px-2 text-white cursor-pointer rounded-md hover:bg-[#851313] duration-150'
									onClick={() => {
										handleDelete(student.id);
									}}>
									<BsTrash3
										className='p-2'
										size={30}
									/>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Pagination */}
			{totalPages > 1 && (
				<div className='mt-4 flex justify-center'>
					<ul className='flex gap-2 items-center'>
						{Array.from({ length: totalPages }, (_, index) => index + 1).map(
							(page) => (
								<li
									key={page}
									className={`${
										page === currentPage
											? "font-bold bg-gradient-to-tr from-slate-700 to-slate-500 text-white rounded-full py-2 px-4"
											: "hover:bg-[#D5D5D5] duration-150 py-2 px-4 rounded-full"
									} cursor-pointer`}
									onClick={() => handlePageChange(page)}>
									{page}
								</li>
							)
						)}
					</ul>
				</div>
			)}
		</div>
	);
}

export default Students;
