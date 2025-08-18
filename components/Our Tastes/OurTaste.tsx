"use client";

import HeroIceCream2 from "@/public/images/hero-ice-cream-2.png";
import HeroIceCream3 from "@/public/images/hero-ice-cream-3.png";
import HeroIceCream4 from "@/public/images/hero-ice-cream-4.png";
import HeroIceCream from "@/public/images/hero-ice-cream.png";
import TasteImg1 from "@/public/images/taste-img-1.png";
import TasteImg2 from "@/public/images/taste-img-2.png";
import TasteImg3 from "@/public/images/taste-img-3.png";
import TasteImg4 from "@/public/images/taste-img-4.png";
import TasteImg5 from "@/public/images/taste-img-5.png";
import TasteImg6 from "@/public/images/taste-img-6.png";
import TasteImg7 from "@/public/images/taste-img-7.png";
import TasteImg8 from "@/public/images/taste-img-8.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Element } from "react-scroll";

const OurTaste = () => {
	const iceCreamTastes = [
		{
			name: "Strawberry & Vanilla Cone",
			image: TasteImg1,
			price: "$8.00",
		},
		{
			name: "Belgian Chocolate Flavored Cream",
			image: TasteImg2,
			price: "$6.00",
		},
		{
			name: "Vanilla Chocolate With Waffle",
			image: TasteImg3,
			price: "$10.00",
		},
		{
			name: "Mixed Scoop Delight",
			image: HeroIceCream,
			price: "$4.99",
		},
		{
			name: "Chocolate Soft Cream",
			image: HeroIceCream2,
			price: "$6.99",
		},
		{
			name: "Strawberry Flavored Ice Cream",
			image: TasteImg4,
			price: "$11.00",
		},
		{
			name: "Mini Chocolate Cake With Belgian Chocolate",
			image: TasteImg5,
			price: "$18.00",
		},
		{
			name: "Mini Chocolate Cake With Orange and Dark Chocolate Topping",
			image: TasteImg6,
			price: "$10.08",
		},
		{
			name: "Blackberry Cone Twist",
			image: HeroIceCream3,
			price: "$8.99",
		},
		{
			name: "Strawberry Sprinkle Cone",
			image: HeroIceCream4,
			price: "$10.99",
		},
		{
			name: "Chocolate With Whipped Cream and Belgian Chocolate Cubes",
			image: TasteImg7,
			price: "$18.00",
		},
		{
			name: "lced Coffee With Whipped Cream",
			image: TasteImg8,
			price: "$11.00",
		},
	];

	useGSAP(() => {
		const row = document.querySelector(".taste-row");
		const rowStyles = row ? getComputedStyle(row) : null;

		const rowWidth = row?.scrollWidth || 0; // total width including padding
		const viewportWidth = window.innerWidth;

		// Parse the padding values from computed styles
		const paddingLeft = rowStyles ? parseFloat(rowStyles.paddingLeft) || 0 : 0;
		const paddingRight = rowStyles
			? parseFloat(rowStyles.paddingRight) || 0
			: 0;

		// Adjusted slide distance (remove padding so final card shows fully)
		const slideDistance = rowWidth - viewportWidth + paddingLeft + paddingRight;

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#our-tastes",
					start: "top top",
					end: () => `+=${viewportWidth + slideDistance}`,
					scrub: 1.5,
					pin: true,
				},
			})
			.fromTo(
				".taste-img",
				{ scale: 0.5, transformOrigin: "center center" },
				{ scale: 10, filter: "blur(1px)", duration: 0.5, ease: "power4.inOut" }
			)
			.to(".taste-card", {
				opacity: 1,
				duration: 0.05,
				ease: "power4.inOut",
			})
			.to(
				".taste-row",
				{
					x: -slideDistance,
					duration: 3,
					ease: "power4.inOut",
				},
				"-=0.5"
			);
	});

	const backgrounds = useMemo(
		() => [
			"/images/taste-bg.jpg",
			"/images/taste-bg-2.jpg",
			"/images/taste-bg-3.jpg",
			"/images/taste-bg-4.jpg",
		],
		[]
	);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
			);
		}, 3000);

		return () => clearInterval(interval);
	}, [currentImageIndex]);

	return (
		<Element
			name='our-tastes'
			id="our-tastes"
			className='bg-[#190506] min-h-screen py-12 relative overflow-hidden'>
			<div className='container z-30 relative'>
				<div className='flex flex-col items-center text-center py-8'>
					<p className='text-xl font-fredericka text-[#ffffff] drop-shadow-md'>
						Our tastes
					</p>
					<p className='text-[#E4C2FB] text-2xl md:text-3xl font-fredericka font-medium drop-shadow-lg'>
						Special Offers
					</p>
				</div>
			</div>
			<div className='taste-row w-max flex gap-5 justify-start items-center relative z-30 px-10'>
				{iceCreamTastes.map((taste, index) => (
					<div
						key={index}
						className='taste-card opacity-0 flex flex-col gap-4 bg-black bg-gradient-to-r from-blue-500/10 to-purple-500/10  shadow-[inset_3px_3px_10px_rgba(0,0,0,0.2)] border border-white/10 backdrop-blur-md rounded-[20px] p-4 max-w-[236px] cursor-pointer scale-[1] hover:scale-[1.05] transition-all duration-500 ease-in-out'>
						<div className='w-[220px] h-[220px] mx-auto overflow-hidden relative'>
							<Image
								src={taste.image}
								alt='taste-img'
								fill
								className='object-contain'
							/>
						</div>

						<p className='font-fredericka text-[1.1rem] min-h-[80px] flex items-center justify-center text-center'>
							{taste.name}
						</p>
						<p className='text-xs font-fredericka tracking-wide'>Order Type:</p>
						<div className='flex gap-2 text-[10px]'>
							<div
								className={` w-fit flex items-center justify-center text-center font-fredericka py-1 px-4 bg-transparent border rounded-[5px] border-white/50 transition-all duration-500 ease-in-out`}>
								<p className='text-[10px] lg:text-xs'>On Table</p>
							</div>
							<div
								className={` w-fit flex items-center justify-center text-center font-fredericka py-1 px-4 bg-transparent border rounded-[5px] border-white/50 transition-all duration-500 ease-in-out`}>
								<p className='text-[10px] lg:text-xs'>Delivery</p>
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<p className='font-fredericka text-[1.2rem]'>{taste.price}</p>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
				<div className='w-[200px] h-[200px] rounded-full overflow-hidden relative taste-img'>
					{backgrounds.map((bg, index) => (
						<Image
							key={index}
							src={bg}
							alt='background'
							fill
							className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
								index === currentImageIndex ? "opacity-100" : "opacity-0"
							}`}
						/>
					))}
				</div>
			</div>
			<div className='absolute top-0 left-0 w-full h-full bg-[#00000074] z-20'></div>
		</Element>
	);
};

export default OurTaste;
