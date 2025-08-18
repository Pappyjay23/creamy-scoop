import Logo from "@/public/images/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Loader = ({
	setIsLoading,
}: {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	useGSAP(() => {
		const tl = gsap.timeline({
			onComplete: () => {
				gsap.to("#loader .logoGroup", {
					opacity: 0,
					duration: 1.5,
					onComplete: () => setIsLoading(false),
				});
			},
		});

		tl.fromTo(
			"#loader #logo",
			{ scale: 0, rotate: 0, opacity: 0 },
			{ scale: 1, opacity: 1, rotate: 360, duration: 1, ease: "circ.in" }
		).fromTo(
			".logoName",
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 1, ease: "back.inOut" }
		);
	});

	return (
		<>
			<div
				id='loader'
				className='min-h-screen flex items-center justify-center relative overflow-hidden bg-black'>
				<div
					className='absolute top-0 left-0 w-full h-full blur-sm bottom-0 right-0 bg-cover bg-center'
					style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
				<div className='flex items-center z-10 bg-transparent h-[200px] w-[200px] rounded-full justify-center logoGroup'>
					<Image
						src={Logo}
						alt='logo'
						id='logo'
						width={100}
						height={100}
						className='opacity-0'
					/>
					<div className='flex flex-col gap-2 text-white -ml-2 logoName opacity-0'>
						<p className='font-bold tracking-wider font-fredericka text-3xl leading-[2]'>
							Creamy
						</p>
						<p className='font-bold tracking-wider font-fredericka text-3xl leading-[2] mt-[-30px]'>
							Scoop
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Loader;
