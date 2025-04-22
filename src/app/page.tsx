import ArrowAnimation from "@/components/arrow-animation";
import { CircleInformationComponents } from "@/components/pages/landingpage/circle-information";
import DonationInformation from "@/components/pages/landingpage/donation-information";
import LandingPageHeader from "@/components/pages/landingpage/header";
import HeaderText from "@/components/pages/landingpage/header-text";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Supplied Scholars",
    description:
        "Supplied Scholars is a non-profit based in Washington State dedicated to our goal of making education accessible for all.",
    metadataBase: new URL("https://suppliedscholars.com/"),
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
};

function LandingPageContent() {
	return (
		<div className="bg-primary relative flex flex-grow flex-col gap-6 px-5 py-10 pb-0 text-white sm:py-15 lg:px-20">
			<div>
				<HeaderText text="Opportunity For" minSize="text-5xl" />
				<p className="text-accent text-6xl leading-14 font-bold md:mb-2 md:text-8xl md:leading-18 lg:mb-8 lg:text-[110px] lg:leading-12">
					Everyone
				</p>
			</div>

			<p className="max-w-[340px] text-[18px] font-semibold md:text-lg">
				Supplied Scholars is a non-profit based in Washington State
				dedicated to our goal of making education accessible for all
			</p>

			<div className="flex flex-row gap-4">
				<Button className="text-md bg-accent hover:bg-accent/70 h-[42px] w-[130px] rounded-full p-0 font-semibold">
					<Link
						href="/donate"
						className="h-full w-full py-2"
						prefetch={true}
					>
						{" "}
						Donate{" "}
					</Link>
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

export default function Home() {
	return (
		<div className="flex h-max flex-col gap-8">
			<div className="flex h-svh flex-col">
				<LandingPageHeader />
				<LandingPageContent />
			</div>

			<div className="bg-primary flex w-full flex-row px-4 text-white lg:gap-4 lg:px-0 lg:pl-6">
				<div className="flex w-3/7 grow flex-col">
					<HeaderText
						text="Why?"
						minSize="text-6xl"
						className="mb-8"
					/>

					<CircleInformationComponents />
				</div>
				<div className="hidden min-h-svh max-w-4/7 lg:block">
					<Image
						src="/Classroom.jpg"
						alt="Classroom"
						width={7008}
						height={4672}
						className="h-full rounded-l-full object-cover"
					/>
				</div>
			</div>

			<DonationInformation />
		</div>
	);
}
