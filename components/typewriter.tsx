"use client"

import * as React from "react";
import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }: any) => {
	const [currentText, setCurrentText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		let timeout: any;

		if (currentIndex <= text.length - 1) {
			timeout = setTimeout(() => {
				setCurrentText(prevText => prevText + text[currentIndex]);
				setCurrentIndex(prevIndex => prevIndex + 1);
			}, delay);

		}

		return () => clearTimeout(timeout);
	}, [currentIndex, delay, text]);

	return (
		<div className="flex text-center justify-center h-12">
			<h2 className="font-mono text-4xl text-primary-500"><span>{currentText}</span> <span className="typed-cursor">|</span></h2>
		</div>
	);
};

export default Typewriter;
