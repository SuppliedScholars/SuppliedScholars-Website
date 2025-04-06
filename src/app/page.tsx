import ArrowAnimation from "@/components/arrow-animation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function LandingPageHeader() {
	return (
		<div className="bg-card h-16 flex flex-row items-center px-2 md:px-6 w-full justify-between text-primary">
			{/* Logo */}
			<div className="basis-1/2 md:basis-1/3 flex ">
				<div className="size-10 bg-primary rounded-full"></div>
			</div>

			<p className="basis-1/3 hidden md:flex md:justify-center font-bold text-2xl ">
				Supplied Scholars
			</p>

			<div className="flex-row font-semibold basis-1/2 md:basis-1/3 flex justify-end text-md">
				<Button
					variant="link"
					className="text-md rounded-full cursor-pointer"
				>
					Home
				</Button>
				<Button
					variant="link"
					className="text-md rounded-full cursor-pointer"
				>
					About
				</Button>
				<Button
					variant="link"
					className="text-md rounded-full cursor-pointer"
				>
					Contact
				</Button>
			</div>
		</div>
	);
}

function HeaderText({ text, minSize }: { text: string, minSize: string }) {
	return (
        // MinSize eg text-5xl
		<p className={cn(minSize, "md:text-7xl lg:leading-normal lg:text-[90px] font-semibold")}>
			{text}
		</p>
	);
}

function LandingPageContent() {
	return (
		<div className="flex-grow bg-primary py-10 sm:py-15 md:py-20 lg:px-20 px-5 pb-0 text-white flex flex-col gap-6 relative">
			<div>
				<HeaderText text="Opportunity For" minSize="text-5xl" />
				<p className="text-6xl md:text-8xl lg:text-[110px] font-bold text-accent leading-14 md:leading-18  md:mb-2 ">
					Everyone
				</p>
			</div>

			<p className="font-semibold w-[320px] text-[18px] md:text-lg">
				Supplied Scholars is dedicated to our goal of making education
				accessible for all
			</p>

			<div className="flex flex-row gap-4">
				<Button className="text-md bg-accent hover:bg-accent/70  font-semibold rounded-full w-[130px] h-[42px]">
					Donate
				</Button>
				<Button
					className=" border-4 border-accent bg-transparent text-accent  box-border font-semibold rounded-full text-md w-[130px] h-[42px]"
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
				className=" absolute bottom-4 right-4 w-[350] sm:w-[400] lg:w-[650] max-w-screen"
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
		<div className="bg-white size-42 md:size-48 rounded-full flex items-center justify-center">
			<p className={cn("text-primary font-bold text-7xl md:text-9xl", className)}>
				{text}
			</p>
		</div>
	);
}

export default function Home() {
	return (
		<>
			<div className="flex flex-col h-svh">
				<LandingPageHeader />
				<LandingPageContent />
			</div>

			{/* Height of screen - the header height */}
			<div className="min-h-svh bg-primary w-full flex flex-row md:px-15 lg:pl-15 lg:pr-0 text-white">
				<div className="w-full lg:basis-3/7 flex flex-col px-6 gap-4">
					<HeaderText text="Why?" minSize="text-6xl" />

					<div className="flex flex-col h-11/12 gap-8">
						<div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between text-center md:text-left items-center basis-1/3">
							<CircleWithText
								text="1"
								className="-translate-y-1 -translate-x-0.5"
							/>

							<p className="w-[400px] text-2xl font-bold text-center md:text-right">
								<span className="underline">
									96% of teachers
								</span>
                                {" "}
								purchase school supplies so their students don’t
								go without
							</p>
						</div>

						<div className="w-full flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between items-center basis-1/3">
							<p className="w-[400px] text-2xl font-bold">
								The average teacher spends{" "}
								<span className="underline">
									
									$740 of their own money
								</span>
								{" "} each year on classroom supplies
							</p>

							<CircleWithText
								text="2"
								className="-translate-y-2"
							/>
						</div>

						<div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center basis-1/3">
							<CircleWithText
								text="3"
								className="-translate-y-2"
							/>

							<p className="w-[400px] text-2xl font-bold text-center md:text-right">
								Donations help ensure {" "}
								<span className="underline">
									
									every child
								</span>{" "}
								has a fair shot at learning and succeeding in
								school
							</p>
						</div>
					</div>
				</div>
				<div className="basis-4/7 lg:block hidden">
					<img
						src="/Classroom.jpg"
						className="size-full object-cover rounded-l-full"
					/>
				</div>
			</div>
		</>
	);
}
