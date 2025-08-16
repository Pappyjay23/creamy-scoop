import React from "react";
import StackImg from "@/public/images/about-stack.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const AboutUs = () => {
	useGSAP(() => {
		const descriptionSplit = SplitText.create("#our-story .description", {
			type: "lines",
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#our-story",
					start: "top 70%",
				},
			})
			.fromTo(
				descriptionSplit.lines,
				{
					opacity: 0,
					y: 50,
				},
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.075,
					ease: "power4.inOut",
				}
			)
			.to(
				".story-img",
				{
					opacity: 1,
					duration: 1,
					ease: "power4.inOut",
				},
				"-=0.5"
			);
	});

	return (
		<div id='our-story' className='bg-[#190506] py-8'>
			<div className='container'>
				<div className='flex flex-col items-center py-8'>
					<p className='text-xl font-fredericka drop-shadow-md'>Our story</p>
					<p className='text-[#E4C2FB] text-3xl font-fredericka drop-shadow-md'>CreamyScoop</p>
				</div>
				<div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
					<p className='w-full lg:w-[50%] font-fredericka leading-[40px] description overflow-hidden'>
						Creamy Scoop began with a simple passion for the joy of ice cream.
						We dreamed of creating a place where every scoop feels like a
						celebration — rich flavors, smooth textures, and the kind of
						sweetness that makes life’s little moments unforgettable. By
						blending the finest ingredients with a dash of creativity and care,
						Creamy Scoop crafts frozen delights that don’t just please your
						taste buds, but wrap you in comfort, nostalgia, and pure happiness.
						Every swirl, every drizzle, every sprinkle tells our story — one
						made to be shared, one scoop at a time.
					</p>
					<div className='relative w-[417px] h-[376px] -mt-[50px] scale-[0.8]'>
						<Image
							src={StackImg}
							alt='stack'
							fill
							className='story-img opacity-0'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
