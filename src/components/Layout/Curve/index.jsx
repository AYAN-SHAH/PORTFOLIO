"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";

const routes = {
	"/": "",
	"/about": "",
	"/contact": "",
};

const anim = (variants) => {
	return {
		variants,
		initial: "initial",
		animate: "enter",
		exit: "exit",
	};
};

export default function Curve({ children, backgroundColor }) {
	const router = useRouter();
	const [dimensions, setDimensions] = useState({
		width: null,
		height: null,
	});

	useEffect(() => {
		function resize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		resize();
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<div className="page curve" style={{ backgroundColor }}>
			<div
				style={{ opacity: dimensions.width == null ? 1 : 0 }}
				className="background"
			/>

			{dimensions.width != null && <SVG {...dimensions} />}
			{children}
		</div>
	);
}

const SVG = ({ height, width }) => {
	const initialPath = `
        M0 300
        L${width} 300
        L${width} ${height + 300}
        L0 ${height + 300}
        L0 300
    `;

	const targetPath = `
        M0 300
        L${width} 300
        L${width} ${height}
        L0 ${height}
        L0 300
    `;

	return (
		<motion.svg
			{...anim(translate)}
			className="absolute top-0 left-0 w-full h-full z-[20000]"
		>
			<motion.path
				fill={"#1C1C1C"}
				{...anim(curve(initialPath, targetPath))}
				className=""
			/>
		</motion.svg>
	);
};
