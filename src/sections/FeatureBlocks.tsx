import { ReactNode } from "react";

import { Jetbrains, AppleIcon, Unstopable } from "../svg/FeatureIcons";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

// Built with Vivid (https://vivid.lol) ⚡️

const BlockTitle = ({ children }: { children: ReactNode }) => {
	return <h3 className="text-xl font-vanguard text-strong">{children}</h3>;
};

const BlockText = ({ children }: { children: ReactNode }) => {
	return <p className="text-light">{children}</p>;
};

const Block = ({ children }: { children: ReactNode }) => {
	return (
		<Card grayer className="items-center gap-1 p-6 col">
			{children}
		</Card>
	);
};

export const FeatureBlocks = () => {
	return (
		<Section className="gap-16 text-center">
			{/* Header */}
			<div className="gap-4 col">
				<Title size="md">
					Our{" "}
					<GradientText className="purple-teal">
						Sponsors
					</GradientText>
				</Title>
			</div>
			{/* Blocks */}
			<div className="grid items-start gap-6 lg:grid-cols-3">
				{/* Block 1 */}
				<Block>
					<AppleIcon />
					<BlockTitle>Incentive Partner</BlockTitle>
				</Block>
				<Block>
					<Unstopable />
					<BlockTitle>Powered By</BlockTitle>
				</Block>
				<Block>
					<Jetbrains />
					<BlockTitle>Creatives Partner</BlockTitle>
				</Block>
			</div>
		</Section>
	);
};
