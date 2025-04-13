"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

/// ClassName is applied to the text inside the circle
function CircleWithNumber({
	text,
	className,
}: {
	text: string;
	className?: string;
}) {
	return (
		<div className="flex size-42 shrink-0 items-center justify-center rounded-full bg-white md:size-48">
			<p
				className={cn(
					"text-primary text-8xl leading-1 font-bold md:text-9xl",
					className,
				)}
			>
				{text}
			</p>
		</div>
	);
}

function CircleInfoComponent({
	startText,
	underlineText,
	endText,
	number,
	numberTranslate = "",
	reverse = false,
}: {
	startText: string;
	underlineText: string;
	endText: string;
	number: string;
	numberTranslate?: string;
	reverse?: boolean;
}) {
	return (
		<div
			className={cn(
				"circle-info flex w-full basis-1/3 flex-col items-center justify-between gap-4 text-center md:gap-0 md:text-left",
				reverse ? "md:flex-row-reverse" : "md:flex-row",
			)}
		>
			<CircleWithNumber text={number} className={numberTranslate} />

			<p
				className={cn(
					"xs:text-2xl max-w-[400px] pb-4 text-center text-lg font-bold md:pb-0",
					reverse ? "md:text-left" : "md:text-right",
				)}
			>
				{startText}
				<span className="underline">{underlineText}</span>
				{endText}
			</p>
		</div>
	);
}

export function CircleInformationComponents() {
	const root = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			const isSmall = window.matchMedia("(max-width: 1024px)").matches;
			const elements: HTMLDivElement[] =
				gsap.utils.toArray(".circle-info");

			elements.forEach((el, i) => {
				const xTranslate = i % 2 === 0 ? "-200px" : "200px";

				gsap.fromTo(
					el,
					{
						x: isSmall ? xTranslate : "0px",
						y: isSmall ? "0px" : "-100px",
						opacity: 0,
					},
					{
						x: "0px",
						y: "0px",
						opacity: 1,
						duration: 1,
						ease: "power2.out",
						scrollTrigger: {
							trigger: el,
							start: isSmall ? "top bottom" : "top 80%",
						},
					},
				);
			});
		},
		{ scope: root, dependencies: [] },
	);

	return (
		<div
			className="circle-info-container flex grow flex-col gap-6"
			ref={root}
		>
			{/* This text is messed up because different fonts and devices display the text differently */}
			{/* So we just have it not be translated on mobile (i think it covers most cases) */}

			<CircleInfoComponent
				startText="96% of teachers "
				underlineText="purchase school supplies"
				endText=" so their students don’t go without"
				number="1"
				numberTranslate="lg:-translate-x-0.5 lg:-translate-y-1"
			/>

			<CircleInfoComponent
				startText="The average teacher spends "
				underlineText="$740 of their own money"
				endText=" each year on classroom supplies"
				reverse={true}
				number="2"
				numberTranslate="lg:-translate-y-2"
			/>

			{/* https://www.seattletimes.com/education-lab/seattle-public-schools-faces-millions-in-budget-cuts/#:~:text=Seattle%20Public%20Schools%20is%20grappling,and%20lead%20to%20job%20cuts. */}
			<CircleInfoComponent
				startText="Seattle Public Schools is grappling with a budget deficit of more than "
				underlineText="94$ million dollars"
				endText="."
				number="3"
				numberTranslate="lg:-translate-y-2 translate-x-0.5"
			/>
		</div>
	);
}
