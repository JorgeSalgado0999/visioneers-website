import type {Metadata} from "next";
import localFont from "next/font/local";
import "./../styles/globals.css";
import "./../styles/fonts.css";
import FullNavBar from "./components/organisms/fullNavBar";
import {Footer} from "./components/organisms/footer";

// const geistSans = localFont({
// 	src: "./../assets/fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });
// const geistMono = localFont({
// 	src: "./../assets/fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

const gothamLight = localFont({
	src: "./../assets/fonts/gotham/Gotham-Light.otf",
	variable: "--font-gotham-light",
	weight: "300",
	style: "normal",
	display: "swap",
});

const gothamMedium = localFont({
	src: "./../assets/fonts/gotham/Gotham-Medium.otf",
	variable: "--font-gotham-medium",
	weight: "400",
	style: "normal",
	display: "swap",
});

const gothamBold = localFont({
	src: "./../assets/fonts/gotham/Gotham-Bold.otf",
	variable: "--font-gotham-bold",
	weight: "800",
	style: "normal",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Visioneers",
	description:
		"En Visioneers empoderamos a empresas y personas a través de programas personalizados de acompañamiento y desarrollo de habilidades en inglés. Nuestros servicios están diseñados para mejorar la comunicación efectiva, liderazgo y manejo de conflictos en entornos profesionales, tanto en modalidad presencial como online.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`
        ${gothamLight.variable} ${gothamMedium.variable} ${gothamBold.variable}
        antialiased`}
			>
				<FullNavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
