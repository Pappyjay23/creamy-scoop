import DripImg from "@/public/images/drip.png";
import SplashImg from "@/public/images/ice-cream-splash.png";
import Logo from "@/public/images/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
	const tl = useRef<gsap.core.Timeline | undefined>(undefined);

	const navLinks = [
		{
			name: "Our Story",
			path: "our-story",
		},
		{
			name: "Our Tastes",
			path: "our-tastes",
		},
		{
			name: "Our Testimonial",
			path: "our-testimonial",
		},
		{
			name: "FAQs",
			path: "faqs",
		},
	];

	useGSAP(() => {
		const logo = document.getElementById("logo");
		const logoName = document.querySelector(".logoName");
		const navLinks = document.querySelectorAll(".nav-links-group a");
		const menuOverlayLinks = document.querySelectorAll(
			".menu-overlay .menu-overlay-link"
		);

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

		gsap.set(".menu-overlay", {
			y: "-150%",
		});

		gsap.set(menuOverlayLinks, {
			y: 400,
		});

		tl.current = gsap
			.timeline({ paused: true })
			.to(".menu-overlay", {
				y: 0,
				duration: 2, // shorter duration for faster start
				ease: "power4.inOut",
			})
			.to(
				menuOverlayLinks,
				{
					y: 0,
					duration: 1.3,
					ease: "power4.inOut",
					stagger: 0.075,
				},
				"-=0.3" // overlap the start with the overlay animation
			);
	});

	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu((prev) => !prev);
	};

	useEffect(() => {
		if (showMenu) {
			tl.current?.play();
		} else {
			tl.current?.reverse();
		}
	}, [showMenu]);

	return (
		<>
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
						{navLinks.map((link, index) => (
							<Link
								key={index}
								to={link.path}
								smooth={true}
								duration={500}
								offset={-50}
								spy={true}
								className='opacity-0 hidden md:block cursor-pointer'>
								{link.name}
							</Link>
						))}
						<a onClick={toggleMenu} className='cursor-pointer md:hidden'>
							<HiOutlineMenuAlt3 className='text-[1.5rem]' />
						</a>
					</div>
				</div>
			</nav>
			{/* Menu Overlay */}
			<div
				id='menu-overlay'
				className={`menu-overlay fixed top-0 left-0 w-full h-dvh bg-[#E4C2FB] z-70 text-black p-4 translate-y-[-150%] overflow-hidden`}>
				<div className='flex justify-between items-center mb-5'>
					<p></p>
					<div
						className='text-4xl cursor-pointer relative z-40'
						onClick={toggleMenu}>
						<MdRestaurantMenu className='text-[3rem] text-[#FD648E] drop-shadow-2xl backdrop-blur-lg rounded-full p-2' />
					</div>
				</div>
				<nav className='flex flex-col gap-5 relative z-40 text-[#fff]'>
					{navLinks.map((link, index) => (
						<div
							key={index}
							className='[clip-path:polygon(0%_0%,0%_100%,100%_100%,100%_0%)]'>
							<Link
								key={index}
								to={link.path}
								smooth={true}
								duration={500}
								offset={-50}
								spy={true}
								className='cursor-pointer'>
								<a
									className='menu-overlay-link capitalize text-[3rem] font-bold tracking-tighter inline-block drop-shadow-md'
									href={link.path}
									onClick={() => {
										toggleMenu();
									}}>
									{link.name}
								</a>
							</Link>
						</div>
					))}
				</nav>
				<div className='absolute top-0 left-0 w-full h-full bg-[#0000004d] z-30 backdrop-blur-[2px]'></div>

				<div className='absolute top-[20px] left-[0] w-full z-10 scale-[2]'>
					<Image src={DripImg} alt='drip' className='' />
				</div>
				<div className='absolute -bottom-[30%] -left-[40%] rotate-0 z-20 scale-[0.7]'>
					<Image src={SplashImg} alt='splash' className='' />
				</div>
				<div className='absolute -bottom-[30%] -right-[50%] rotate-270 z-20 scale-[0.7]'>
					<Image src={SplashImg} alt='splash' className='' />
				</div>
			</div>
		</>
	);
};

export default Navbar;
