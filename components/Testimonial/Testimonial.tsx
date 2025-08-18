import TestimonialImg from "@/public/images/testimonial.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Element } from "react-scroll";

const Testimonial = () => {
	useGSAP(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: "#our-testimonial",
				start: "top 70%",
				onEnter: () => {
					gsap.to(".testimonial-img", {
						opacity: 1,
						duration: 1,
						ease: "power4.inOut",
					});
				},
				onLeaveBack: () => {
					gsap.to(".testimonial-img", {
						opacity: 0,
						duration: 1,
						ease: "power4.inOut",
					});
				},
			},
		});
	});

	return (
		<Element name='our-testimonial' id="our-testimonial" className='bg-[#190506] py-8'>
			<div className='container'>
				<div className='flex flex-col items-center text-center py-8'>
					<p className='text-xl font-fredericka drop-shadow-md'>Our reviews</p>
					<p className='text-[#E4C2FB] text-2xl md:text-3xl font-fredericka drop-shadow-md'>
						What Our Customers Think
					</p>
				</div>
				<div className='flex justify-center items-center'>
					<Image
						src={TestimonialImg}
						alt='testimonial'
						className='testimonial-img opacity-0'
					/>
				</div>
			</div>
		</Element>
	);
};

export default Testimonial;
