import React, { useState } from "react";
import { tableRows } from "../data/constants";

import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
//for testing only
import { students } from "../data/students.js";

function Students() {
	const pageSize = 6; // Number of rows per page
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	// Calculate pagination variables
	const totalStudents = students.length;
	const totalPages = Math.ceil(totalStudents / pageSize);
	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const currentStudents = students.slice(startIndex, endIndex);

	return (
		<div>
			<table className='w-full mt-4'>
				<thead>
					{/* Table header */}
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
					{currentStudents.map((student, index) => (
						<tr
							key={index}
							className={`border ${
								index % 2 === 0 ? "bg-[#eeeeee]" : "bg-[#D5D5D5]"
							}`}>
							<td className='text-sm p-4 border border-white'>{student.id}</td>
							<td className='text-sm p-4 border border-white'>{student.name}</td>
							<td className='text-sm p-4 border border-white'>{student.program}</td>
							<td className='text-sm p-4 border border-white'>{student.age}</td>
							<td className='text-sm p-4 border border-white'>{student.address}</td>
							<td className='text-sm p-4 border border-white'>{student.contact}</td>
							<td className='flex gap-4 items-center p-4 pl-6'>
								<h1 className='flex gap-2 items-center bg-[#32a827] px-2 text-white cursor-pointer rounded-md'>
									<FiEdit
										className='p-2'
										size={30}
									/>
									Edit
								</h1>
								<h1 className='flex gap-2 items-center bg-[#c42828] px-2 text-white cursor-pointer rounded-md'>
									<BsTrash3
										className='p-2'
										size={30}
									/>
									Delete
								</h1>
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
											? "font-bold bg-[#D5D5D5] rounded-full py-2 px-4"
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
