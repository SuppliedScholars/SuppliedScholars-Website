import ArrowAnimation from "@/components/arrow-animation";
import { Button } from "@/components/ui/button";

function LandingPageHeader() {
	return (
		<div className="bg-card h-16 flex flex-row items-center px-6 w-full justify-between text-primary flex-none">
			{/* Logo */}
			<div className="basis-1/3 ">
				<div className="size-10 bg-primary rounded-full"></div>
			</div>

			<p className="basis-1/3 flex justify-center font-bold text-2xl ">
				Supplied Scholars
			</p>

			<div className="flex-row font-semibold basis-1/3 flex justify-end text-md">
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

export default function Home() {
	return (
		<>
			<div className="flex flex-col h-screen">
				<LandingPageHeader />

				<div className="flex-grow bg-primary p-20 pb-0 text-white flex flex-col gap-6 relative">
					<div>
						<p className="text-[90px] font-semibold ">
							Opportunity For
						</p>
						<p className="text-[110px] font-bold text-accent leading-10 mb-8">
							Everyone
						</p>
					</div>

					<p className="font-semibold w-[320px] text-lg">
						Supplied Scholars is dedicated to our goal of making
						education accessible for all
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
						className=" absolute bottom-4 right-4"
						width={650}
					/>
                    
				</div>
			</div>

			<div>About us</div>
		</>
	);
}
