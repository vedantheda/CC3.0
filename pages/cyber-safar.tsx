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
			version: "CYBER CYPHER 2.0",
			cards: [
				{
					title: "EV Sustainability",
					imageUrl:
						"https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
					description: "Develop a prototype to improve the accessibility of electric vehicles (EVs) in developing countries. Address challenges like limited charging infrastructure and affordability. Solutions might involve creating affordable EV models tailored to local needs or expediting the deployment of charging stations in urban and rural areas. The prototype should demonstrate how this solution can enhance EV use, making it more cost-effective and efficient in these regions.",
				},
				{
					title: "ML related something",
					imageUrl:
						"https://cdn.sanity.io/images/tlr8oxjg/production/ada93729daf922ad0318c8c0295e5cb477921808-1456x816.png?w=3840&q=100&fit=clip&auto=format",
					description: "Create a prototype stock trading platform integrating natural language processing (NLP) to streamline decision-making for investors. Traditional platforms inundate users with data, necessitating time-consuming analysis. By leveraging NLP, the prototype aims to extract insights from natural language sources like news articles and social media swiftly. The platform's demonstration should exhibit how NLP facilitates more informed and efficient trading decisions for investors",
				},
			],
		},
		{
			version: "CYBER CYPHER 1.0",
			cards: [
				{
					title: "Elementary Level",
					imageUrl:
						"https://media.istockphoto.com/id/837345268/photo/noir-movie-character.jpg?s=612x612&w=0&k=20&c=WGaAh-xWelYuEoxhUE69T4e4k45Bp-MTC6KLG7edN8Y=",
					description:
						"Consider two spies that are suspected of espionage with their safe house under constant supervision. Establish a medium of communication that prevents any suspicion and may or may not work on the same device.",
				},
				{
					title: "Advanced Level",
					imageUrl:
						"https://www.shutterstock.com/image-photo/kyiv-ukraine-september-5-2019-260nw-1498591895.jpg",
					description:
						"Construct a model which blocks potential spoilers on social media platforms.",
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
								? "Cyber Cypher 2.0"
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
