import React from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
	useGSAP(() => {
		const logo = document.getElementById("logo");
		const logoName = document.querySelector(".logoName");
		const navLinks = document.querySelectorAll(".nav-links-group a");

		gsap.timeline({
			scrollTrigger: {
				trigger: "#hero",
				start: "30px top",
				onEnter: () => {
					gsap.to("#navbar", {
						backdropFilter: "blur(10px)",
						background:
							"linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
						boxShadow: "inset 3px 3px 10px rgba(0,0,0,0.2)",
					});
				},
				onLeaveBack: () => {
					gsap.to("#navbar", {
						background: "rgba(0,0,0,0.15)",
						backdropFilter: "blur(0px)",
					});
				},
			},
		});

		gsap.fromTo(
			logo,
			{ scale: 0, rotate: 0, opacity: 0 },
			{
				scale: 1,
				opacity: 1,
				rotate: 360,
				duration: 1,
				ease: "circ.in",
			}
		);

		gsap.fromTo(
			logoName,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 2,
				ease: "back.in",
			}
		);

		gsap.fromTo(
			navLinks,
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 2,
				ease: "power4.out",
				delay: 0.75,
				stagger: 0.075,
			}
		);
	});
	return (
		<nav id='navbar' className='fixed top-0 bg-transparent z-50 w-full'>
			<div className='container py-4 flex items-center justify-between'>
				<a href='#' className='flex items-center gap-0'>
					<Image
						src={Logo}
						alt='logo'
						id='logo'
						width={50}
						height={50}
						className='opacity-0'
					/>
					<div className='flex flex-col logoName opacity-0'>
						<span className='text-sm lg:text-base font-bold leading-4 tracking-wider font-fredericka'>
							Creamy
						</span>
						<span className='text-sm lg:text-base font-bold leading-4 tracking-wider font-fredericka'>
							Scoop
						</span>
					</div>
				</a>
				<div className='flex gap-4 items-center text-xs lg:text-sm nav-links-group overflow-hidden'>
					<a className='opacity-0' href='#our-story'>
						Our Story
					</a>
					<a className='opacity-0' href='#our-tastes'>
						Our Tastes
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
