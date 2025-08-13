"use client";

import Hero from "@/components/Hero/Hero";
import Loader from "@/components/Loader/Loader";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const App = () => {
	gsap.registerPlugin(ScrollTrigger);

	const [isLoading, setIsLoading] = useState(true);

	return isLoading ? (
		<Loader setIsLoading={setIsLoading} />
	) : (
		<div className='relative'>
			<Navbar />
			<Hero />
		</div>
	);
};

export default App;
