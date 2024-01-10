import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { Demo } from "../components/Demo";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

// Built with Vivid (https://vivid.lol) ⚡️

export const FeatureSection = ({
	children,
	grayer,
	right,
	center,
}: {
	children: ReactNode;
	grayer?: boolean;
	right?: boolean;
	center?: boolean;
}) => (
	<Section
		grayer={grayer}
		fullWidth
		className={`col items-center ${
			center ? "" : right ? "md:flex-row-reverse" : "md:flex-row"
		}`}
	>
		{children}
	</Section>
);

const FeatureDemo = (
	props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
		webmSrc: string;
		mp4Src: string;
		bumpLeft?: boolean;
		center?: boolean;
		className: string;
		alt: string;
	}
) => {
	const { webmSrc, mp4Src, bumpLeft, center, alt, className, ...divProps } =
		props;
	return (
		<div
			{...divProps}
			className={twMerge(
				`w-5/6 md:w-1/2 p-4 md:p-12 bg-gradient-to-br rounded-xl ${
					center
						? ""
						: bumpLeft
						? "md:-translate-x-14"
						: "md:translate-x-14"
				}`,
				className
			)}
		>
			<Demo
				data-aos={`${
					center
						? "zoom-y-out"
						: bumpLeft
						? "fade-right"
						: "fade-left"
				}`}
				data-aos-delay="300"
				webmSrc={webmSrc}
				mp4Src={mp4Src}
				alt={alt}
			/>
		</div>
	);
};

export const Text = ({
	children,
	center,
}: {
	children: ReactNode;
	center?: boolean;
}) => (
	<div
		className={`w-5/6 col gap-4 text-center mb-8 mx-auto ${
			center ? "md:w-2/3" : "md:w-2/5 md:text-left md:my-auto"
		}`}
	>
		{children}
	</div>
);

export const Features = () => {
	return (
		<>
			{/* Feature 1 */}
			<FeatureSection grayer center>
				<Text center>
					<Title size="md">
						<GradientText className="purple-teal" id="about">
							What is Cyber Cypher?
						</GradientText>{" "}
					</Title>
					<Details>
						The goal of the 18-hour hackathon Cyber Cypher is to
						provide aspiring and seasoned programmers a platform.
						Our aim is to reach engineering students across all
						skill levels, from those with little coding experience
						to those with extensive knowledge. Cyber Cypher aims to
						awaken in the participants the boundless potential that
						this dynamic field of computer sciences holds for
						them—potential that currently lies dormant.
					</Details>
				</Text>
			</FeatureSection>
			<FeatureSection grayer center>
				<Text center>
					<Title size="md">
						<GradientText className="pink-blue">
							What is Taqneeq Fest?
						</GradientText>{" "}
					</Title>
					<Details>
						With three exciting and action-packed days in a row,
						Taqneeq has grown into an extraordinary tech festival
						over the years. It has successfully organized numerous
						noteworthy events, including The Talk, Unstop, the
						Internship Fair, the Game Development Workshop, and
						Light Reaction, to mention a few. Taqneeq has
						illuminated every aspect of technology.
					</Details>
				</Text>
			</FeatureSection>
			{/* Feature 2 */}
			<FeatureSection right>
				<Text>
					<Title size="md">
						<GradientText className="green-sky">
							Healthcare
						</GradientText>
					</Title>
					<Details>
						The importance of UI/UX in healthcare applications rests
						in its capacity to carefully strike a balance between
						user-centric design and technological functioning,
						promoting improved accessibility, user-friendly
						navigation, and increased user engagement in general for
						a more effective healthcare experience.
					</Details>
				</Text>
			</FeatureSection>
			{/* Feature 3 */}
			<FeatureSection grayer>
				<Text>
					<Title size="md">
						<GradientText className="purple-teal">
							Deep Learning
						</GradientText>
					</Title>
					<Details>
						A branch of machine learning called deep learning
						focuses on teaching artificial neural networks to see
						patterns and make wise choices. Utilize Fetch.ai to
						create novel answers while you work through an advanced
						problem statement's complexities problem statement
						&apos; s complexities
					</Details>
				</Text>
			</FeatureSection>
		</>
	);
};
