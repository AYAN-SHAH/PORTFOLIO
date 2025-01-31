"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function WordRotate({
	words,
	duration = 2500,
	framerProps = {
		initial: { opacity: 1, y: 100 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 1, y: -150 },
		transition: { duration: 0.35, ease: "easeOut" },
	},
	className,
	isPageTransitioning = false, // New prop to handle visibility during page transition
}) {
	const [index, setIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	// Handle visibility during page transitions
	useEffect(() => {
		if (isPageTransitioning) {
			setIsVisible(false);
		} else {
			// Add a slight delay to make it smooth after the page transition ends
			const timer = setTimeout(() => {
				setIsVisible(true);
			}, 500); // Adjust delay based on your transition timing
			return () => clearTimeout(timer);
		}
	}, [isPageTransitioning]);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, duration);

		// Clean up interval on unmount
		return () => clearInterval(interval);
	}, [words, duration]);

	if (!isVisible) return null; // Hide the component during the transition

	return (
		<div className="overflow-hidden">
			<AnimatePresence mode="wait">
				<motion.h1
					key={words[index]}
					className={cn(className)}
					{...framerProps}
				>
					{words[index]}
				</motion.h1>
			</AnimatePresence>
		</div>
	);
}
