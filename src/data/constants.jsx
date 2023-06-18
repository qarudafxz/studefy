import { AiFillFileExcel, AiOutlineFunction } from "react-icons/ai";
import { CgInsertAfterR, CgDesignmodo } from "react-icons/cg";
import { GiAncientColumns } from "react-icons/gi";

export const CONSTANTS = {
	client: {
		name: "Client-Side",
		details: [
			{
				desc: "An XML to be extracted must include a series of 5 or more students",
				icon: (
					<AiFillFileExcel
						size={40}
						className='bg-[#ff9837] rounded-md p-2 text-[#a05510]'
					/>
				),
			},
			{
				desc:
					"We can add new node to the XML Document and re-parse it with Java DOM",
				icon: (
					<CgInsertAfterR
						size={40}
						className='bg-[#eb7ba6] rounded-md p-2 text-[#7e1538]'
					/>
				),
			},
			{
				desc: "Beautify the GUI",
				icon: (
					<CgDesignmodo
						size={40}
						className='bg-[#8bdaff] rounded-md p-2 text-[#19779c]'
					/>
				),
			},
		],
	},
	server: {
		name: "Server-Side",
		details: [
			{
				desc:
					"RMI Must have the following functionalities: Extract XML, Sort all students, Fetch/View/Display, Delete, and Update",
				icon: (
					<AiOutlineFunction
						size={40}
						className='bg-[#71ff94] rounded-md p-2 text-[#2e6129]'
					/>
				),
			},
			{
				desc:
					"It must have the following concepts: Inheritance, Interface, Abstract, Polymorphism",
				icon: (
					<GiAncientColumns
						size={40}
						className='bg-[#b383ff] rounded-md p-2 text-[#682388]'
					/>
				),
			},
		],
	},
};

export const tableRows = [
	{
		label: "ID",
	},
	{
		label: "Student ID",
	},
	{
		label: "Name",
	},
	{
		label: "Program",
	},
	{
		label: "Age",
	},
	{
		label: "Address",
	},
	{
		label: "Contact Number",
	},
	{
		label: "Action",
	},
];
