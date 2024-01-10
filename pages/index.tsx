import { Features } from "../src/sections/Features";
import { FeatureBlocks } from "../src/sections/FeatureBlocks";
import { Header } from "../src/sections/Header";
import { Newsletter } from "../src/sections/Newsletter";
import { Testimonials } from "../src/sections/Testimonials";
import { AnimatedGradient } from "../src/components/AnimatedGradient";
import { AnimatedGradientR } from "../src/components/AnimatedGradientright";
import Image from "next/image";
const redirectToPage = () => {
    window.location.href = 'http://taqneeqfest.com/cybercypher/register';
  };

const Home = ({
	isDarkMode,
	toggleDarkMode,
}: {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}) => {
	return (
		<>
			<div className="overflow-hidden col text-strong">
				<Header
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>

				<main>
					<div className="h-[100vh]">
						<AnimatedGradient />
						<AnimatedGradientR />{" "}
						<section className="h-[70%] flex flex-col items-center justify-center text-center gap-11 mx-auto">
							<h1 className=" text-[4rem] md:text-[8rem]  font-vanguard font-bold ">
								Cyber <br className=" sm:hidden"></br>
								<span className=""> Cypher 3.0 </span>
							</h1>
							<p className=" text-lg tracking-[0.3rem]   font-vanguard font-bold   ">
								NMIMS&quot; Official Hackathon
							</p>
							<button
								type="button"
								onClick={redirectToPage}
								className="text-black bg-[#2a51ff] hover:opacity-50 focus:ring-4 focus:outline-none focus:ring-[#050708]/50   font-vanguard font-bold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2 mt-2"
							>
								Register Now!
								<Image
									src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
									className=" h-7 sm:h-10 pl-7"
									alt="unstop logo"
									width={100}
									height={100}
								/>
							</button>{" "}
						</section>
					</div>
					<Features />
					<FeatureBlocks />
					<Testimonials />
					<Newsletter />
				</main>
			</div>
		</>
	);
};

export default Home;
