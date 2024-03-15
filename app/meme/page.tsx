'use client'

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Button } from "@nextui-org/react";
import memes from "../tempData/memes";


export default function MemePage() {
	const [meme, setMeme] = React.useState({
		topText: "One does not simply",
		bottomText: "walk into mordor",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	})
	const [allMemeImages, setAllMemeImages] = React.useState(memes)


	function getMemeImage() {
		const memesArray = allMemeImages.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)
		const url = memesArray[randomNumber].url
		setMeme(prevMeme => ({
			topText: "",
			bottomText: "",
			randomImage: url
		}))
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement>){
		const {name, value} = event.target;
		setMeme(prev => ({
			...prev,
			[name]: value
		}))
	}





	return (
		<div className="h-screen-calc">
			<Card className="">
				<CardHeader className="flex gap-3 bg-malibu-100">
					{/* <Image
						alt="nextui logo"
						height={40}
						radius="sm"
						src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
						width={40}
					/> */}
					<div className="flex flex-col">
						<p className="text-md">Meme Generator</p>
						{/* <p className="text-small text-default-500">nextui.org</p> */}
					</div>
				</CardHeader>
				<Divider />
				<CardBody>
					<div className="grid grid-flow-col justify-stretch gap-4 mb-4">
						<Input
							type="text"
							label="Top Text"
							className=""
							name="topText"
							value={meme.topText}
							onChange={handleChange}
						/>
						<Input
							type="text"
							label="Bottom Text"
							className=""
							name="bottomText"
							value={meme.bottomText}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4 w-full">
						<Button color="primary" onClick={getMemeImage} className="w-full">
							Get a new meme image
						</Button>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="relative">
							<Image
								className="max-w-full max-h-96"
								alt="Meme Image"
								src={meme.randomImage}
							/>
							<h2 className="meme--text top-0 z-10">{meme.topText}</h2>
							<h2 className="meme--text bottom-0 z-10">{meme.bottomText}</h2>
						</div>


					</div>
				</CardBody>
				<Divider />
				<CardFooter>
					<Link
						isExternal
						showAnchorIcon
						href="https://github.com/nextui-org/nextui"
					>
						Visit source code on GitHub.
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
