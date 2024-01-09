import Image from "next/image";
import { ReactNode } from "react";

import { Quote } from "../svg/Quote";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

// Built with Vivid (https://vivid.lol) ⚡️

const TestimonialImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="absolute mx-auto -top-10">
			<Quote />
			<Image
				className="rounded-full"
				src={src}
				width="96"
				height="96"
				alt={alt}
			/>
		</div>
	);
};

const TestimonialText = ({
	quote,
	name,
	title,
	handle,
	link,
}: {
	quote: string;
	name: string;
	title: string;
	handle: string;
	link: string;
}) => {
	return (
		<>
			<blockquote className="font-medium">&quot;{quote}&quot;</blockquote>
			<div className="">
				<cite className="not-italic font-bold">— {name}</cite>
			</div>
		</>
	);
};

const Testimonial = ({ children }: { children: ReactNode }) => {
	return (
		<Card className="items-center gap-6 p-12 pt-20 body-lg col text-medium">
			{children}
		</Card>
	);
};

export const Testimonials = () => {
	return (
		<Section grayer className="gap-24 text-center">
			{/* Header */}
			<div className="gap-4 col">
				<Title size="md">
					<GradientText className="amber-red">Loved</GradientText> by
					Students!
				</Title>
			</div>
			{/* Testimonials */}
			<div className="gap-20 md:gap-6 col md:row">
				{/* Testimonial 1 */}
				<Testimonial>
					<TestimonialImage
						src="https://media.licdn.com/dms/image/D4D03AQHLn9PzHd9v4Q/profile-displayphoto-shrink_400_400/0/1692201996072?e=1710374400&v=beta&t=fBmyR53BX8qYpO0LtP37CgHrUJnHxyRNXI2ZunpiaKY"
						alt="Prabir"
					/>
					<TestimonialText
						quote=" For me Cyber Cypher was introduction to the ML domain. Everyone can find their own niche and learn a lot."
						name="Prabir"
						title="Technical PM"
						handle="Meta"
						link="https://www.linkedin.com/in/willgao99/"
					/>
				</Testimonial>
				{/* Testimonial 2 */}
				<Testimonial>
					<TestimonialImage
						src="https://media.licdn.com/dms/image/D4D03AQHq5tPbVVmejQ/profile-displayphoto-shrink_100_100/0/1666533737088?e=1710374400&v=beta&t=UmRpD1vPvtvyUiAQBDOVS8svtN21-SDGYX7OMseKS4c"
						alt="Darsh"
					/>
					<TestimonialText
						quote=" Cyber Cypher was the place where i learnt the most about web development. It was a great experience."
						name="Darsh"
						title="Front End Dev"
						handle="Freelance"
						link=""
					/>
				</Testimonial>
				{/* Testimonial 3 */}
				<Testimonial>
					<TestimonialImage
						src="https://media.licdn.com/dms/image/D4D03AQE-GAP3ZEHDFQ/profile-displayphoto-shrink_100_100/0/1675960875884?e=1710374400&v=beta&t=KrhV_I1WOdfkmNvoLSL878yNlGTwZ2BNLXLjJNwdLbg"
						alt="Tejal Patwardhan"
					/>
					<TestimonialText
						quote="Cyber Cypher was my first ever hackathon and I had a great experience. I would definitely recommend it to anyone who wants to get started with hackathons."
						name="Naitik"
						title="Founder"
						handle="Martingale"
						link="https://martingalelabs.com/"
					/>
				</Testimonial>
			</div>
		</Section>
	);
};
