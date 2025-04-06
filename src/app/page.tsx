import ArrowAnimation from "@/components/arrow-animation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
				<p className="text-accent text-6xl leading-14 font-bold md:mb-2 md:text-8xl md:leading-18 lg:text-[110px]">
					Everyone
				</p>
			</div>

			<p className="w-[320px] text-[18px] font-semibold md:text-lg">
				Supplied Scholars is dedicated to our goal of making education
				accessible for all
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

			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src="/SchoolGraphic.png"
				alt="School Graphic"
				className="absolute right-4 bottom-4 w-[350] max-w-screen sm:w-[400] lg:w-[650]"
				// width={650}
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
		<div className="flex size-42 items-center justify-center rounded-full bg-white md:size-48">
			<p
				className={cn(
					"text-primary text-7xl font-bold md:text-9xl",
					className,
				)}
			>
				{text}
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
				<div className="flex w-full flex-col gap-4 px-6 lg:basis-3/7">
					<HeaderText text="Why?" minSize="text-6xl" />

					<div className="flex h-11/12 flex-col gap-8">
						<div className="flex w-full basis-1/3 flex-col items-center justify-between gap-4 text-center md:flex-row md:gap-0 md:text-left">
							<CircleWithText
								text="1"
								className="-translate-x-0.5 -translate-y-1"
							/>

							<p className="w-[400px] text-center text-2xl font-bold md:text-right">
								<span className="underline">
									96% of teachers
								</span>{" "}
								purchase school supplies so their students don’t
								go without
							</p>
						</div>

						<div className="flex w-full basis-1/3 flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-0">
							<p className="w-[400px] text-center text-2xl font-bold md:text-left">
								The average teacher spends{" "}
								<span className="underline">
									$740 of their own money
								</span>{" "}
								each year on classroom supplies
							</p>

							<CircleWithText
								text="2"
								className="-translate-y-2"
							/>
						</div>

						<div className="flex w-full basis-1/3 flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
							<CircleWithText
								text="3"
								className="-translate-y-2"
							/>

							<p className="w-[400px] text-center text-2xl font-bold md:text-right">
								Donations help ensure{" "}
								<span className="underline">every child</span>{" "}
								has a fair shot at learning and succeeding in
								school
							</p>
						</div>
					</div>
				</div>
				<div className="hidden basis-4/7 lg:block">
					<img
						src="/Classroom.jpg"
						className="size-full rounded-l-full object-cover"
					/>
				</div>
			</div>
		</>
	);
}
