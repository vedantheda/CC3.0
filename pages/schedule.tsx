import { ReactNode } from "react";
import { AnimatedGradient } from "../src/components/AnimatedGradient";
import { AnimatedGradientR } from "../src/components/AnimatedGradientright";
import { Header } from "../src/sections/Header";

const BlockTitle = ({ children }: { children: ReactNode }) => {
	return (
		<h3 className="md:text-2xl font-vanguard text-strong font-extrabold">
			{children}
		</h3>
	);
};

const BlockText = ({ children }: { children: ReactNode }) => {
	return <p className="text-md font-thin mt-3">{children}</p>;
};

const Schedule = ({
	isDarkMode,
	toggleDarkMode,
}: {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}) => {
	return (
		<>
			<section className=" overflow-hidden">
				<Header
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>
				<AnimatedGradient />
				<AnimatedGradientR />{" "}
				<div className=" md:min-h-screen max-h-screen max-h-[100svh] md:max-h-full w-full flex flex-col gap-7 md:gap-20 justify-start md:items-center md:text-center px-5 ">
					<h1 className=" text-[4rem] md:text-[6rem] font-bold ">
						Our Schedule
					</h1>
					<div className="flex flex-row items-center pl-10 justify-between shadow-xl h-full w-fit bg-gray-900 border-l-4 border-b-4 text-left gap-8 rounded-2xl border-neon-red px-8 py-9">
						<h1 className=" text-6xl md:text-8xl font-extrabold border-r-4 pr-3">
							01
						</h1>
						<div>
							<BlockTitle>Qualifier Rounds</BlockTitle>
							<BlockText>
								13 <sup>th</sup> & 14 <sup>th</sup> of January
							</BlockText>
						</div>
					</div>
					<div className="flex flex-row items-center pl-10 justify-between shadow-xl h-full w-fit bg-gray-900 border-l-4 border-b-4 text-left gap-8 rounded-2xl border-neon-red px-8 py-9">
						<h1 className=" text-6xl md:text-8xl font-extrabold border-r-4 pr-4">
							02
						</h1>
						<div>
							<BlockTitle>Ultimate Round </BlockTitle>
							<BlockText>February First Week</BlockText>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Schedule;
