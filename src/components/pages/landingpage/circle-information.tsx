"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

/// ClassName is applied to the text inside the circle
function CircleWithText({
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
	// const superClass = "flex w-full basis-1/3 flex-col items-center justify-between gap-4 text-center md:flex-row md:gap-0 md:text-left"

	return (
		<div
			className={cn(
				"circle-info flex w-full basis-1/3 flex-col items-center justify-between gap-4 text-center md:gap-0 md:text-left",
				reverse ? "md:flex-row-reverse" : "md:flex-row",
			)}
		>
			<CircleWithText text={number} className={numberTranslate} />

			<p
				className={cn(
					"xs:text-2xl max-w-[400px] text-center text-lg font-bold",
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
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const scope = useRef<null>(null);

	// useEffect(() => {
	// 	if (!root.current) return;

	// 	scope.current = createScope({
	// 		root: root as React.RefObject<HTMLElement>,
	// 		mediaQueries: {
	// 			isSmall: "(max-width: 1024px)",
	// 		},
	// 	}).add((scope) => {
	// 		const { isSmall } = scope.matches;

	// 		for (let i = 0; i <= 3; i++) {
	// 			// Translate the text to the left or right depending on the index
	// 			const xTranslate = i % 2 === 0 ? "-200px" : "200px";

	// 			// Animation down on large screen, animate left or right on small screen
	// 			animate(`.circle-info:nth-of-type(${i})`, {
	// 				x: isSmall
	// 					? [{ from: xTranslate, to: "0px" }]
	// 					: [{ from: "0px", to: "0px" }],
	// 				y: isSmall
	// 					? [{ from: "0px", to: "0px" }]
	// 					: [{ from: "-100", to: "0px" }],
	// 				opacity: [{ from: 0, to: 1 }],
	// 				ease: "outQuad",
	// 				duration: 800,
	// 				autoplay: onScroll({
	// 					container: ".circle-info-container",
	// 				}),
	// 			});
	// 		}
	// 	});

	// 	return () => scope.current?.revert();
	// }, []);

	return (
		<div
			className="circle-info-container flex min-h-11/12 flex-col gap-8 overflow-clip py-8 lg:overflow-auto"
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
