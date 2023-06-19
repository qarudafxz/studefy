import React from "react";

import Navbar from "../components/Navbar";
import NumOfStudents from "../components/NumOfStudents";
import RecentlyAdded from "../components/RecentlyAdded";
import RecentlyDeleted from "../components/RecentlyDeleted";
import GroupDetails from "../components/GroupDetails";
import Students from "../components/Students";
import Requiremens from "../components/Requiremens";
import LiveClock from "../components/LiveClock";
import NumberOfStudentsFromSQL from "../components/NumberOfStudentsFromSQL";
import RecentlyAddedToDb from "../components/RecentlyAddedToDb";

function Home() {
	return (
		<div className='font-main flex flex-row'>
			<div className='mx-20 mt-10 w-9/12'>
				<Navbar />
				<div className='flex justify-between items-center mt-12'>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-4xl'>Dashboard</h1>
						<p className='font-thin text-sm italic'>
							Define the list of your students by adding new data
						</p>
					</div>
					<h1 className='flex flex-row gap-4 items-center bg-[#f1f1f1] py-2 px-4 rounded-md'>
						<LiveClock />
						{new Date().toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",

							timeZone: "Asia/Manila",
							timeZoneName: "short",
							weekday: "long",
						})}
					</h1>
				</div>
				<div className='grid grid-cols-3 mt-8 gap-4'>
					<RecentlyAdded />
					<RecentlyAddedToDb />
					<RecentlyDeleted />
					<NumOfStudents />
					<NumberOfStudentsFromSQL />
				</div>
				<div className='flex flex-col gap-4 mt-10'>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-4xl'>Student List</h1>
						<p className='font-thin text-sm italic'>
							These are the list of your students with their corresponding details. You
							can edit or delete their data
						</p>
					</div>
					<Students />
				</div>
			</div>
			<div className='mx-24 mt-10 w-5/12'>
				<GroupDetails />
				<Requiremens />
			</div>
		</div>
	);
}

export default Home;
