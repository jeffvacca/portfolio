"use client"

import * as React from "react";
import { useState, useEffect } from 'react';
import { title } from "@/components/primitives";
import {
	Lightbox,
	useLightboxState,
	createIcon,
} from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { OpenLinkIcon } from "@/components/icons";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function WorkPage() {
	const [index, setIndex] = React.useState(-1);
	const [showOverlay, setShowOverlay] = React.useState(-1);
	const [data, setData] = useState<any>(null)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		fetch('/data/slides.json')
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
	}, [])

	const MyIcon = createIcon(
		"MyIcon",
		<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="currentColor" fill="none"><path d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32" /><polyline points="40.32 8.6 55.4 8.6 55.4 24.18" /><line x1="19.32" y1="45.72" x2="54.61" y2="8.91" /></svg>
	);

	function MyButton() {
		const { currentSlide } = useLightboxState();

		return (
			<div className={`${currentSlide?.alt ? '' : 'hidden'} flex flex-col justify-center`} onClick={() => window.open(currentSlide?.alt, '_blank')}>
				<OpenLinkIcon className="text-white" />
			</div>
		);
	}
	const slideItems = data?.slideData.map((item: any, index: any) => (
		<div
			key={item.id}
			className="group bg-cover bg-top bg-center h-56 w-full gallery-tile relative cursor-pointer"
			onClick={() => {
				setIndex(index);
			}}
			style={{ backgroundImage: `url(${item.slides[0].src})` }}
			onMouseEnter={() => {
				setShowOverlay(index);
			}}
			onMouseLeave={() => setShowOverlay(-1)}
		>
			<div className="gallery-tile__overlay opacity-100 md:opacity-0 absolute p-4 h-[50%] md:h-full top-[50%] md:top-[100%] sm:group-hover:top-[50%] md:group-hover:top-[40%]">
				<h5 className="gallery-tile__overlay--title text-slate text-xl md:text-2xl text-white font-semibold top-[38%] md:top-[100px]">{item.slides[0].title}</h5>
			</div>
		</div>
	))

	return (
		<div className="w-full">
			<section className="h-screen-calc">
				<div className="mb-8">
					<h1 className={title({ color: "blue" })}>work</h1>
				</div>
				<div
					className="grid grid-cols-1 sm:grid-cols-2  2xl:grid-cols-4 gap-2 transition-all ease-in-out !duration-1000 opacity-0"
					style={{
						opacity: isLoading ? "0" : "1",
					}}
				>
					{slideItems}
				</div>
			</section>
			<Lightbox
				index={0}
				open={index >= 0}
				close={() => setIndex(-1)}
				slides={data?.slideData[index]?.slides}
				plugins={[Captions]}
				toolbar={{
					buttons: [
						<MyButton key="my-button" />, "close"],
				}}
			/>
		</div>
	);
}
