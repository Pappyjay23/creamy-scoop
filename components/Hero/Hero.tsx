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
		name: "Mixed Scoop Delight",
	},
	{
		image: HeroIceCream2,
		alt: "ice cream",
		price: "6.99",
		name: "Chocolate Soft Cream",
	},
	{
		image: HeroIceCream3,
		alt: "ice cream",
		price: "8.99",
		name: "Blackberry Cone Twist",
	},
	{
		image: HeroIceCream4,
		alt: "ice cream",
		price: "10.99",
		name: "Strawberry Sprinkle Cone",
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
					duration: 1.5,
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
				<div className='flex flex-col gap-3 md:flex-row md:justify-between'>
					<div className='lg:w-[40%] backdrop-blur-sm md:backdrop-blur-none py-3 rounded-[10px]'>
						<h1 className='text-[3rem] lg:text-[4.1rem] font-semibold tracking-tight left-title opacity-0'>
							Red Flower
						</h1>
						<h1 className='text-[3rem] lg:text-[4.1rem] font-semibold leading-4 tracking-tight left-title opacity-0'>
							Ice-cream
						</h1>
						<p className='mt-6 text-xs lg:text-sm text-white description opacity-0 w-[70%]'>
							Indulge in the creamy sweetness of our signature Red Flower
							Ice-cream — where velvety texture meets delicate floral notes,
							made fresh just for you.
						</p>
						<div className='mt-[25px] flex gap-3 overflow-hidden'>
							<button className='text-sm lg:text-base py-3 px-8 bg-transparent border border-white rounded-[10px] hero-btn opacity-0 cursor-pointer hover:bg-white hover:text-black hover:border-black transition-all duration-500 ease-in-out'>
								Order Now
							</button>
							<button className='text-sm lg:text-base py-3 px-8 bg-white/15 border border-transparent backdrop-blur-md rounded-[10px] hero-btn opacity-0 cursor-pointer hover:bg-white hover:text-black hover:border-black transition-all duration-500 ease-in-out'>
								Book Table
							</button>
						</div>
					</div>
					<div className='w-fit lg:w-[20%] backdrop-blur-sm md:backdrop-blur-none p-3 rounded-[10px] flex flex-col items-end'>
						<div className='w-[240px] h-[150px] relative overflow-hidden hidden md:block'>
							<Image
								src={HeroTestimonial}
								alt='hero'
								fill
								className='testimonial opacity-0'
							/>
						</div>
						<div className='w-full flex flex-col items-start md:mt-8'>
							<p className='text-xs lg:text-sm type-title opacity-0 font-fredericka font-bold tracking-widest'>
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
				<div className='flex flex-row flex-wrap justify-center w-full lg:w-[75%] mx-auto gap-2 mt-10'>
					{heroIceCreams.map((iceCream, index) => {
						const isSelected = index === selectedCard;
						return (
							<div
								key={index}
								onClick={() => setSelectedCard(index)}
								className={` backdrop-blur-md border border-white/50 rounded-[10px] w-fit py-4 px-4 lg:px-8 flex flex-row flex-wrap items-center gap-6 ice-cream-card opacity-0 cursor-pointer group hover:scale-[1]! scale-[0.9]! transition-all duration-500 ease-in-out ${
									isSelected ? "text-black bg-white" : "text-white bg-black/20"
								}`}>
								<div className='flex-[1] flex justify-center items-center w-full'>
									<div className='relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'>
										<Image
											src={iceCream.image}
											alt='ice cream'
											fill
											className='group-hover:scale-[1.3] scale-[1] transition-all duration-500 ease-in-out'
										/>
									</div>
								</div>
								<div className='flex-[1]'>
									<h2 className='mb-2 lg:text-[1.1rem] font-pacifico'>
										{iceCream.name}
									</h2>
									<p className='text-xs mb-2 font-fredericka tracking-wide'>
										Order Type:
									</p>
									<div className='flex gap-2 text-[10px] mb-3'>
										<div
											className={` w-fit flex items-center justify-center text-center font-fredericka py-1 px-4 bg-transparent border rounded-[5px] transition-all duration-500 ease-in-out ${
												isSelected ? "border-black" : "border-white/50"
											}`}>
											<p className='text-[10px] lg:text-xs'>On Table</p>
										</div>
										<div
											className={` w-fit flex items-center justify-center text-center text-[10px] lg:text-base font-fredericka py-1 px-4 bg-transparent border rounded-[5px] transition-all duration-500 ease-in-out ${
												isSelected ? "border-black" : "border-white/50"
											}`}>
											<p className='text-[10px] lg:text-xs'>Delivery</p>
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
