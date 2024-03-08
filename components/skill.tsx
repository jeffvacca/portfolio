"use client"

import * as React from "react";
import { Progress } from "@nextui-org/progress";


export default function Skill(props: any) {
	return (
			<Progress
				radius="sm"
				classNames={{
					base: "mb-5 !gap-1",
					indicator: props.indicatorClass,
					label: "tracking-wider font-medium text-default-600  mb-0",
				}}
				label={props.skill}
				value={props.rating}
			/>
	)
}
