import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroTestimonial from "@/public/images/hero-testimonial.png";
import Image from "next/image";
import IceCreamCup from "@/public/images/ice-cream-cup.png";
import IceCreamCup2 from "@/public/images/ice-cream-cup-2.png";
import IceCreamCup3 from "@/vectors/cup";
import IceCreamCone from "@/public/images/ice-cream-cone.png";

import HeroIceCream from "@/public/images/hero-ice-cream.png";
import HeroIceCream2 from "@/public/images/hero-ice-cream-2.png";
import HeroIceCream3 from "@/public/images/hero-ice-cream-3.png";
import HeroIceCream4 from "@/public/images/hero-ice-cream-4.png";
import { useState } from "react";

const iceCreamCups = [
	{
		image: IceCreamCup,
		alt: "ice cream cup",
	},
	{
		image: IceCreamCup2,
		alt: "ice cream cup",
	},

	{
		image: IceCreamCone,
		alt: "ice cream cone",
	},
];

const heroIceCreams = [
	{
		image: HeroIceCream,
		alt: "ice cream",
		price: "4.99",
		name: "Banana Soft Cream",
	},
	{
		image: HeroIceCream2,
		alt: "ice cream",
		price: "4.99",
		name: "Banana Soft Cream",
	},
	{
		image: HeroIceCream3,
		alt: "ice cream",
		price: "4.99",
		name: "Banana Soft Cream",
	},
	{
		image: HeroIceCream4,
		alt: "ice cream",
		price: "4.99",
		name: "Banana Soft Cream",
	},
];

const Hero = () => {
	const [selectedCard, setSelectedCard] = useState(0);

	useGSAP(() => {
		const tl = gsap
			.timeline()
			.fromTo(
				"#hero",
				{ backgroundPosition: "center 0%" },
				{
					backgroundPosition: "center 50%",
					duration: 1,
					ease: "bounce.out",
				}
			)
			.fromTo(
				"#hero .left-title",
				{ opacity: "0" },
				{ opacity: "1", duration: 1, ease: "power4.in" },
				"-=0.5"
			)
			.fromTo(
				"#hero .description",
				{ opacity: "0" },
				{ opacity: "1", duration: 0.5, ease: "power4.in" },
				"-=0.5"
			)
			.fromTo(
				"#hero .testimonial",
				{ opacity: "0", y: 100 },
				{ opacity: "1", y: 0, duration: 0.5, ease: "power4.in" },
				"-=0.5"
			)
			.fromTo(
				"#hero .type-title",
				{ opacity: "0" },
				{ opacity: "1", duration: 0.5, ease: "power4.in" },
				"-=0.5"
			)
			.fromTo(
				"#hero .hero-btn",
				{ opacity: "0", y: 100 },
				{ opacity: "1", y: 0, duration: 1, ease: "power4.in", stagger: 0.075 },
				"-=0.5"
			)
			.fromTo(
				"#hero .hero-cup-types",
				{ opacity: "0", y: 100 },
				{ opacity: "1", y: 0, duration: 1, ease: "power4.in", stagger: 0.075 },
				"-=1"
			)
			.fromTo(
				"#hero .ice-cream-card",
				{ opacity: "0", y: 100 },
				{ opacity: "1", y: 0, duration: 1, ease: "power4.in", stagger: 0.075 },
				"-=0.5"
			);
	});

	return (
		<section
			id='hero'
			className='min-h-screen text-white bg-fixed bg-cover bg-no-repeat pt-[83px]'
			style={{ backgroundImage: "url('/images/hero.png')" }}>
			<div className='container'>
				<div className='flex justify-between'>
					<div className='w-[40%]'>
						<h1 className='text-[4.1rem] font-semibold tracking-tight left-title opacity-0'>
							Red Flower
						</h1>
						<h1 className='text-[4.1rem] font-semibold leading-4 tracking-tight left-title opacity-0'>
							Ice-cream
						</h1>
						<p className='mt-6 text-sm text-white description opacity-0 w-[70%]'>
							Indulge in the creamy sweetness of our signature Red Flower
							Ice-cream — where velvety texture meets delicate floral notes,
							made fresh just for you.
						</p>
						<div className='mt-[25px] flex gap-3 overflow-hidden'>
							<button className='py-3 px-8 bg-transparent border border-white rounded-[10px] hero-btn opacity-0 cursor-pointer hover:bg-white hover:text-black hover:border-black transition-all duration-500 ease-in-out'>
								Order Now
							</button>
							<button className='py-3 px-8 bg-white/15 border border-transparent backdrop-blur-md rounded-[10px] hero-btn opacity-0 cursor-pointer hover:bg-white hover:text-black hover:border-black transition-all duration-500 ease-in-out'>
								Book Table
							</button>
						</div>
					</div>
					<div className='w-[20%] flex flex-col items-end'>
						<div className='w-[240px] h-[150px] relative overflow-hidden'>
							<Image
								src={HeroTestimonial}
								alt='hero'
								fill
								className='testimonial opacity-0'
							/>
						</div>
						<div className='w-full flex flex-col items-start mt-8'>
							<p className='text-sm type-title opacity-0 font-fredericka font-bold'>
								Available Types:
							</p>
							<div className='mt-2 flex gap-2 overflow-hidden'>
								{iceCreamCups.map((iceCreamCup, index) => (
									<div
										key={index}
										className='w-[40px] h-[40px] bg-white/15 border border-white/50 rounded-[10px] p-2 backdrop-blur-sm hero-cup-types opacity-0 hover:scale-[1]! scale-[0.9]! transition-all duration-500 ease-in-out cursor-pointer'>
										<Image
											src={iceCreamCup.image}
											alt={iceCreamCup.alt}
											width={25}
											height={25}
										/>
									</div>
								))}
								<div className='w-[40px] h-[40px] bg-white/15 border border-white/50 rounded-[10px] p-2 backdrop-blur-sm hero-cup-types opacity-0 hover:scale-[1]! scale-[0.9]! transition-all duration-500 ease-in-out cursor-pointer'>
									<IceCreamCup3 width={25} height={25} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex justify-center w-[70%] mx-auto flex-wrap gap-4 mt-10'>
					{heroIceCreams.map((iceCream, index) => {
						const isSelected = index === selectedCard;
						return (
							<div
								key={index}
								onClick={() => setSelectedCard(index)}
								className={` backdrop-blur-md border border-white/50 rounded-[10px] py-4 px-8 flex gap-6 ice-cream-card opacity-0 cursor-pointer group hover:scale-[1]! scale-[0.9]! transition-all duration-500 ease-in-out ${
									isSelected ? "text-black bg-white" : "text-white bg-black/20"
								}`}>
								<div className='relative w-[150px] h-[150px]'>
									<Image
										src={iceCream.image}
										alt='ice cream'
										fill
										className='group-hover:scale-[1.3] scale-[1] transition-all duration-500 ease-in-out'
									/>
								</div>
								<div>
									<h2 className='mb-2 text-[1.1rem] font-pacifico'>
										{iceCream.name}
									</h2>
									<p className='text-xs mb-2 font-fredericka'>Order Type:</p>
									<div className='flex gap-2 text-[10px] mb-3'>
										<div
											className={`font-fredericka py-1 px-4 bg-transparent border rounded-[5px] transition-all duration-500 ease-in-out ${
												isSelected ? "border-black" : "border-white/50"
											}`}>
											On Table
										</div>
										<div
											className={`font-fredericka py-1 px-4 bg-transparent border rounded-[5px] transition-all duration-500 ease-in-out ${
												isSelected ? "border-black" : "border-white/50"
											}`}>
											Delivery
										</div>
									</div>
									<span className='text-[1.5rem] font-semibold font-fredericka'>
										${iceCream.price}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Hero;
