import React from "react";

import { CONSTANTS } from "../data/constants";

import { motion } from "framer-motion";

function Requiremens() {
	return (
		<div className='shadow-xl flex flex-col gap-4 border-2 border-[#f1f1f1] rounded-md mt-6 px-4 py-6'>
			<h1 className='font-bold text-xl'>Requirements</h1>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-4'>
					<h1 className='font-semibold'>{CONSTANTS.client.name}</h1>
					{CONSTANTS.client?.details?.map((desc, idx) => {
						return (
							<motion.div
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.8,
									delay: 0.9,
									ease: [0, 0.71, 0.2, 1.01],
								}}
								key={idx}
								className='flex flex-row gap-8 items-center bg-[#f1f1f1] rounded-md p-2'>
								{desc.icon}
								<h1 className='font-thin text-sm'>{desc.desc}</h1>
							</motion.div>
						);
					})}
					<h1 className='font-semibold'>{CONSTANTS.server.name}</h1>
					{CONSTANTS.server?.details?.map((desc, idx) => {
						return (
							<motion.div
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.8,
									delay: 0.9,
									ease: [0, 0.71, 0.2, 1.01],
								}}
								key={idx}
								className='flex flex-row gap-8 items-center bg-[#f1f1f1] rounded-md p-2'>
								{desc.icon}
								<h1 className='font-thin text-sm'>{desc.desc}</h1>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Requiremens;
