import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Extracted({ ...props }) {
	useEffect(() => {
		if (props.isExtract) {
			setTimeout(() => {
				props.setIsExtract(false);
			}, 4000);
		}
	}, [props.isExtract]);

	return (
		<div className='absolute top-96 left-1/3 my-4 ml-24 flex items-center justify-center'>
			<CSSTransition
				in={props.isExtract}
				timeout={800}
				classNames='modal'
				unmountOnExit>
				<div className='bg-white shadow-2xl p-12 rounded-md border border-[#dadada]'>
					<BsFillCheckCircleFill
						size={70}
						className='m-auto my-4 text-[#00C418]'
					/>
					<h1 className='font-bold text-2xl text-center'>{props.message}</h1>
				</div>
			</CSSTransition>
		</div>
	);
}

export default Extracted;
