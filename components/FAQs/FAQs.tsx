"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Element } from "react-scroll";
import { useGSAP } from "@gsap/react";

const FAQs = () => {
	const faqs = [
		{
			question: "Do you offer international shipping?",
			answer:
				"Yes! Creamy Scoop delivers happiness across borders. We currently ship our ice cream packs and merchandise to select countries. Shipping fees and delivery times vary by location, but we’ll always make sure your scoops arrive frozen and fresh.",
		},
		{
			question: "Can I customize my Creamy Scoop box?",
			answer:
				"Absolutely! You can mix and match your favorite flavors to create a personalized Creamy Scoop box. Whether it’s a swirl of classics or adventurous new tastes, we’ll pack it just the way you like it.",
		},
		{
			question: "Are Creamy Scoop ice creams safe for people with allergies?",
			answer:
				"We care deeply about your safety and joy. Each flavor comes with a full list of ingredients, and we clearly label allergens such as dairy, nuts, soy, and gluten. While we take precautions, please note that all our ice creams are made in a facility that handles these ingredients.",
		},
		{
			question:
				"What should I do if my order arrives melted, damaged, or incorrect?",
			answer:
				"Oh no! We always want your Creamy Scoop experience to be perfect. If something goes wrong with your order, reach out to our support team within 24 hours. We’ll happily replace, refund, or fix your order to keep your scoops smiling.",
		},
		{
			question: "Do you have any vegan or dairy-free options?",
			answer:
				"Yes, we do! Our dairy-free and vegan-friendly flavors are crafted with coconut milk, almond milk, and other plant-based ingredients — still creamy, still dreamy, and 100% scoop-worthy.",
		},
	];

	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		faqs.forEach((_, i) => {
			if (answerRefs.current[i]) {
				gsap.set(answerRefs.current[i], {
					height: 0,
					opacity: 0,
					overflow: "hidden",
				});
			}
		});
	}, []);

	const toggleFAQ = (index: number) => {
		if (openIndex === index) {
			gsap.to(answerRefs.current[index], {
				height: 0,
				opacity: 0,
				duration: 0.4,
				ease: "power2.inOut",
			});
			setOpenIndex(null);
		} else {
			if (openIndex !== null && answerRefs.current[openIndex]) {
				gsap.to(answerRefs.current[openIndex], {
					height: 0,
					opacity: 0,
					duration: 0.4,
					ease: "power2.inOut",
				});
			}
			gsap.to(answerRefs.current[index], {
				height: "auto",
				opacity: 1,
				duration: 0.5,
				ease: "power2.inOut",
			});
			setOpenIndex(index);
		}
	};

	useGSAP(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: "#faqs",
				start: "top 70%",
				onEnter: () => {
					gsap.fromTo(
						".faq-card",
						{
							y: 100,
							opacity: 0,
						},
						{
							y: 0,
							opacity: 1,
							stagger: 0.075,
							duration: 1,
							ease: "power4.inOut",
						}
					);
				},
				onLeaveBack: () => {
					gsap.to(".faq-card", {
						y: 100,
						stagger: 0.075,
						opacity: 0,
						duration: 1,
						ease: "power4.inOut",
					});
				},
			},
		});
	});

	return (
		<Element
			name='faqs'
			id='faqs'
			className='bg-[#190506] py-8 min-h-screen relative'>
			<div className='container relative z-30'>
				<div className='flex flex-col items-center text-center py-8'>
					<p className='text-xl font-fredericka drop-shadow-md'>FAQs</p>
					<p className='text-[#E4C2FB] text-2xl md:text-3xl font-fredericka drop-shadow-md'>
						Frequently Asked Questions
					</p>
				</div>
				<div className='flex flex-col gap-4 justify-center items-center'>
					{faqs.map((faq, index) => (
						<div
							key={index}
							onClick={() => toggleFAQ(index)}
							className='faq-card bg-[linear-gradient(to_right,rgba(59,130,246,0.1),rgba(168,85,247,0.1))] shadow-[inset_3px_3px_10px_rgba(0,0,0,0.2)] md:w-[70%] px-10 py-4 rounded-[20px] text-white backdrop-blur-lg opacity-0 cursor-pointer'>
							<div
								className='flex items-center justify-between gap-4 cursor-pointer'
								onClick={() => toggleFAQ(index)}>
								<p className='font-bold text-sm md:text-base'>{faq.question}</p>
								<span>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
							</div>
							<div
								ref={(el) => {
									answerRefs.current[index] = el;
								}}
								className='mt-4'>
								<p className='text-xs md:text-sm leading-relaxed'>
									{faq.answer}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='absolute bottom-0 left-0 z-30 p-4 flex  justify-center items-center w-full text-xs'>
				<p>© 2025 Creamy Scoop — Sharing happiness, one scoop at a time.</p>
			</div>
			<div className='absolute top-0 left-0 w-full h-full bg-[#19050688] z-20'></div>
			<video
				src='/videos/faq.mp4'
				autoPlay
				loop
				muted
				className='absolute top-0 left-0 w-full h-full object-cover z-10'></video>
		</Element>
	);
};

export default FAQs;
