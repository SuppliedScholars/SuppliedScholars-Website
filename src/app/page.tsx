import ArrowAnimation from "@/components/arrow-animation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

function LandingPageHeader() {
	return (
		<div className="bg-card text-primary flex h-16 w-full flex-row items-center justify-between px-2 md:px-6">
			{/* Logo */}
			<div className="flex basis-1/2 md:basis-1/3">
				<div className="bg-primary size-10 rounded-full"></div>
			</div>

			<p className="hidden basis-1/3 text-2xl font-bold md:flex md:justify-center">
				Supplied Scholars
			</p>

			<div className="text-md flex basis-1/2 flex-row justify-end font-semibold md:basis-1/3">
				<Button
					variant="link"
					className="text-md cursor-pointer rounded-full"
				>
					Home
				</Button>
				<Button
					variant="link"
					className="text-md cursor-pointer rounded-full"
				>
					About
				</Button>
				<Button
					variant="link"
					className="text-md cursor-pointer rounded-full"
				>
					Contact
				</Button>
			</div>
		</div>
	);
}

function HeaderText({ text, minSize }: { text: string; minSize: string }) {
	return (
		// MinSize eg text-5xl
		<p
			className={cn(
				minSize,
				"font-semibold md:text-7xl lg:text-[90px] lg:leading-normal",
			)}
		>
			{text}
		</p>
	);
}

function LandingPageContent() {
	return (
		<div className="bg-primary relative flex flex-grow flex-col gap-6 px-5 py-10 pb-0 text-white sm:py-15 md:py-20 lg:px-20">
			<div>
				<HeaderText text="Opportunity For" minSize="text-5xl" />
				<p className="text-accent text-6xl leading-14 font-bold md:mb-2 md:text-8xl md:leading-18 lg:mb-8 lg:text-[110px] lg:leading-12">
					Everyone
				</p>
			</div>

			<p className="w-[340px] text-[18px] font-semibold md:text-lg">
				Supplied Scholars is a non-profit based in Washington State
				dedicated to our goal of making education accessible for all
			</p>

			<div className="flex flex-row gap-4">
				<Button className="text-md bg-accent hover:bg-accent/70 h-[42px] w-[130px] rounded-full font-semibold">
					Donate
				</Button>
				<Button
					className="border-accent text-accent text-md box-border h-[42px] w-[130px] rounded-full border-4 bg-transparent font-semibold"
					variant="outline"
				>
					Contact Us
				</Button>
			</div>

			<ArrowAnimation />

			<Image
				src="/SchoolGraphic.png"
				alt="School Graphic"
				className="xs:w-[350px] absolute right-4 bottom-4 w-[200px] max-w-screen sm:w-[400px] lg:w-[650px]"
				width={822}
				height={670}
			/>
		</div>
	);
}

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
				"flex w-full basis-1/3 flex-col items-center justify-between gap-4 text-center md:gap-0 md:text-left",
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

export default function Home() {
	return (
		<>
			<div className="flex h-svh flex-col">
				<LandingPageHeader />
				<LandingPageContent />
			</div>

			{/* Height of screen - the header height */}
			<div className="bg-primary flex min-h-svh w-full flex-row text-white md:px-15 lg:pr-0 lg:pl-15">
				<div className="flex w-full flex-col px-6 lg:basis-3/7">
					<HeaderText text="Why?" minSize="text-6xl" />

					<div className="flex min-h-11/12 flex-col gap-8 py-8">
						{/* This text is messed up because different fonts and devices display the text differently */}
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
				</div>
				<div className="hidden w-full max-w-4/7 shrink lg:block">
					<Image
						src="/Classroom.jpg"
						alt="Classroom"
						width={7008}
						height={4672}
						className="size-full rounded-l-full object-cover"
					/>
				</div>
			</div>
		</>
	);
}
