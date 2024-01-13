import { GradientText } from "../src/components/GradientText";
import { Title } from "../src/components/Title";
import { Header } from "../src/sections/Header";
import { Card } from "../src/components/Card";
import { Text, FeatureSection } from "../src/sections/Features";
import { AnimatedGradient } from "../src/components/AnimatedGradient";
import { AnimatedGradientR } from "../src/components/AnimatedGradientright";
// Reusable Card component
const CardComponent = ({
	title,
	imageUrl,
	description,
}: {
	title: string;
	imageUrl: string;
	description: string;
}) => {
	return (
		<Card className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				<img className="rounded-t-lg" src={imageUrl} alt="" />
			</a>
			<div className="p-5">
				<h1 className="bg-gradient-to-tr text-transparent bg-clip-text from-neon-teal to-neon-purple text-2xl font-extrabold">
					{title}
				</h1>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{description}
				</p>
			</div>
		</Card>
	);
};

const PastCC = ({
	isDarkMode,
	toggleDarkMode,
}: {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}) => {
	const cyberCypherData = [
		{
			version: "Problem statments",
			cards: [
				{
					title: "Healthcare",
					imageUrl:
						"",
					description: "Monica, a Software Developer at Fetch.ai is experiencing difficulties booking an appointment with her doctor and accessing her medical records online, she realizes that the user interface of the healthcare portal is confusing and not user-friendly. Develop a solution that enhances the patient experience and enables them to efficiently manage their healthcare information by building a portal with secure, centralized records managed by patients and accessible to doctors.",
				},
				{
					title: "Deep Learning Using Fetch AI",
					imageUrl:
						"",
					description: "Aryan is the owner of a family-owned grocery store located in Mumbai. He grew up in an underprivileged background, and he remembers vividly the struggles that his family store faced due to poor inventory management and untimely food orders. These issues led to a decline in business, and ultimately, poverty. He approached fetch.ai to help him out with his grocery store issues. Develop a solution that utilizes the UI Agent of fetch.ai and create a deep learning model to help save his business.",
				},
			],
		},
		
	];

	return (
		<>
			{" "}
			<div className="overflow-hidden min-h-screen text-strong">
				<Header
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>
				<br />
				{cyberCypherData.map((cyberCypher, index) => (
					<FeatureSection grayer center key={index}>
						<h1 className=" text-transparent bg-clip-text bg-gradient-to-br from-[#EE0C77] via-[#F24D56] to-[#EE0C77] text-[4rem] md:text-[8rem] font-vanguardcf font-bold tracking-wider py-10 ">
							{index === 0
								? "Problem Statements"
								: "Cyber Cypher 1.0"}
						</h1>
						<div className="flex flex-col md:flex-row justify-center gap-12">
							{cyberCypher.cards.map((card, cardIndex) => (
								<CardComponent
									key={cardIndex}
									title={card.title}
									imageUrl={card.imageUrl}
									description={card.description}
								/>
							))}
						</div>
					</FeatureSection>
				))}
			</div>
		</>
	);
};
export default PastCC;
