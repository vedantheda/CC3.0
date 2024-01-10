import "aos/dist/aos.css";
import "../styles/globals.css";

import AOS from "aos";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useDarkMode, useEffectOnce } from "usehooks-ts";
import { useEffect } from "react";

import localFont from "@next/font/local";

const vanguardcf = localFont({
	src: [
		{
			path: "../public/fonts/vanguardcf-demibold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/fonts/vanguardcf-bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/vanguardcf-extrabold.otf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../public/fonts/vanguardcf-heavy.otf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-vanguard",
});

const causten = localFont({
	src: [
		{
			path: "../public/fonts/Causten-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/Causten-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Causten-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Causten-Semi-Bold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/fonts/Causten-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/Causten-Extra-Bold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../public/fonts/Causten-Black.ttf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-causten",
});

const siteTitle = "Cyber-Cypher";
const siteDescription =
	"Cyber Cypher is an 18-hour hackathon that aims to provide a platform to both budding and experienced coders alike";

const App = ({ Component, pageProps }: AppProps) => {
	const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			document.documentElement.style.setProperty("color-scheme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			document.documentElement.style.setProperty("color-scheme", "light");
		}
	}, [isDarkMode]);

	// Initialize animations
	useEffectOnce(() => {
		AOS.init({
			once: true,
			// Animations always disabled in dev mode; disabled on phones in prod
			disable: process.env.NODE_ENV === "development" ? true : "phone",
			duration: 700,
			easing: "ease-out-cubic",
		});
	});

	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link rel="icon" href="/images/logo.ico" />
				<meta
					property="og:image"
					// content="https://vivid.lol/images/landing-page.png"
				/>
			</Head>
			<NextSeo
				title={siteTitle}
				description={siteDescription}
				themeColor={isDarkMode ? "#18181b" : "#fafafa"}
				openGraph={{
					title: siteTitle,
					description: siteDescription,
				}}
			/>
			<main className={` ${vanguardcf.variable} ${causten.variable}`}>
				{" "}
				<Component
					{...pageProps}
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>
			</main>
		</>
	);
};

export default App;
