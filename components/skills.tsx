"use client"

import * as React from "react";
import { title, subtitle } from "@/components/primitives";

import Skill from "@/components/skill";

export default function Skills() {
	const skillArray = [
		{
			skill: "Vue",
			rating: 95,
			indicatorClass: "bg-gradient-to-r from-malibu-500 to-secondary-400"
		},
		{
			skill: "React",
			rating: 60,
			indicatorClass: "bg-gradient-to-r from-red-200 to-indigo-700"
		},
		{
			skill: "Typescript",
			rating: 65,
			indicatorClass: "bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"

		},
		{
			skill: "SASS",
			rating: 95,
			indicatorClass: "bg-gradient-to-r from-[#ef32d9] to-[#89fffd]"
		},
		{
			skill: "CSS",
			rating: 100,
			indicatorClass: "bg-gradient-to-r from-[#C9FFBF] to-[#FFAFBD]"
		},
		{
			skill: "HTML",
			rating: 100,
			indicatorClass: "bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"
		},
		{
			skill: "Nuxt",
			rating: 50,
			indicatorClass: "bg-gradient-to-r from-lime-200 to-red-200"
		},
		{
			skill: "Javascript / JQuery",
			rating: 90,
			indicatorClass: "bg-gradient-to-r from-[#f857a6] to-[#449dc8]"
		},
		{
			skill: "Photoshop / Sketch / Zeplin / Invision",
			rating: 65,
			indicatorClass: "bg-gradient-to-r from-sky-400 to-fuchsia-600"
		},
		{
			skill: "SQL",
			rating: 25,
			indicatorClass: "bg-gradient-to-r from-malibu-500 to-secondary-400"
		},
		{
			skill: "Wordpress",
			rating: 66,
			indicatorClass: "bg-gradient-to-r from-red-200 to-indigo-700"
		},
		{
			skill: "Angular",
			rating: 20,
			indicatorClass: "bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"

		},
		{
			skill: "Email",
			rating: 70,
			indicatorClass: "bg-gradient-to-r from-[#ef32d9] to-[#89fffd]"
		},



	]
	const skillItems = skillArray.map(skill =>
		<Skill skill={skill.skill} rating={skill.rating} indicatorClass={skill.indicatorClass} key={skill.skill} />
	)
	return (
		<div className="w-full test">
			<div className="mb-4">
				<h1 className={title({ color: "blue" })}>skills</h1>
			</div>
			{skillItems}
		</div>

	)
}
