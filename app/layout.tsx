import type { Metadata } from "next";
import {
	Poppins,
	Fredericka_the_Great,
	Fredoka,
	Pacifico,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const fredericka = Fredericka_the_Great({
	variable: "--font-fredericka",
	weight: "400",
	subsets: ["latin"],
});

const fredoka = Fredoka({
	variable: "--font-fredoka",
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

const pacifico = Pacifico({
	variable: "--font-pacifico",
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Creamy Scoop",
	description:
		"Indulge in a delightful journey of flavors with Creamy Scoop – a visually rich ice cream experience. Explore smooth animations, tempting visuals, and a playful interface that brings your favorite frozen treats to life.",
	icons: {
		icon: "/images/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`
          ${poppins.variable}
          ${fredericka.variable}
          ${fredoka.variable}
          ${pacifico.variable}
          antialiased
        `}>
				{children}
			</body>
		</html>
	);
}
