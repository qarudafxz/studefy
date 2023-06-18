import React from "react";
import Fra from "../assets/fra.png";

import { BsFacebook, BsBrowserChrome, BsGithub } from "react-icons/bs";

function GroupDetails() {
	const icons = [
		{
			icon: <BsFacebook size={20} />,
			link: "https://www.facebook.com/paragotravels",
		},
		{
			icon: <BsBrowserChrome size={20} />,
			link: "http://parago.vercel.app",
		},
		{
			icon: <BsGithub size={20} />,
			link: "https://github.com/qarudafxz/it106_final_project",
		},
	];
	return (
		<div className='shadow-xl text-center bg-[#f1f1f1] rounded-md m-auto p-8 py-12'>
			<img
				src={Fra}
				className='w-24 h-auto m-auto rounded-full border-4'
			/>
			<div className='mt-4'>
				<h1 className='font-bold text-xl'>Francis Tin-ao</h1>
				<p>@francis.tinao</p>
			</div>
			<div className='flex gap-4 mt-6'>
				<div className='flex flex-row gap-4 m-auto'>
					{icons.map((item, index) => {
						return (
							<div
								key={index}
								className='flex flex-col gap-2'>
								<a
									href={item.link}
									target='_blank'
									className='bg-gradient-to-tr from-slate-700 to-slate-400 text-white p-2 rounded-full'>
									{item.icon}
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default GroupDetails;
