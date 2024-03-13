"use client"

import React from "react";
import { useState, useEffect } from 'react';
import Testimonial from "../../components/testimonial";
import { title } from "@/components/primitives";

export default function TestimonialsPage() {
	const [testimonialData, setTestimonialData] = useState<any[]>([])
	useEffect(() => {
		fetch('/data/testimonials.json')
			.then((res) => res.json())
			.then((data) => {
				setTestimonialData(data.testimonials);

			})
	}, [])
	const items = [
		"Jeff Vacca is an amazing front end developer. Any company would be lucky to have him. I have been working with him over the last couple years and his skills not only with software but with people are top notch.",
		"Item 2",
		"Item 3",
		"Item 4",
		"Item 5"
	];
	return (
		<div className="h-screen-calc testimonials">
			<div className="mb-16">
				<h1 className={title({ color: "blue" })}>testimonials</h1>
			</div>
			{testimonialData.map((item: any, index) => (
				<Testimonial key={item.id} item={item} index={index} />
			))}
		</div>
	);
}
