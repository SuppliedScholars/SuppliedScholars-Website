
import LandingPageHeader from "@/components/pages/landingpage/header";
import HeaderText from "@/components/pages/landingpage/header-text";
import { cn } from "@/lib/utils";
import Script from "next/script";

function Donorbox({ className }: { className?: string }) {
	return (
		<>
			<Script src="https://donorbox.org/widget.js"></Script>{" "}
			<iframe
				src="https://donorbox.org/embed/suppliedscholars?amount=25"
				name="donorbox"
				seamless={true}
				scrolling="no"
				height="900px"
				width="100%"
				className={cn(
					"max-h-none max-w-[500px] min-w-[250px]",
					className,
				)}
				allow="payment"
			></iframe>
		</>
	);
}

export default function Donate() {
	return (
		<div className="flex min-h-svh flex-col items-center">
			<LandingPageHeader />

			<div className="flex grow flex-col lg:justify-between px-4 py-10 lg:w-7/8 gap-0 lg:flex-row lg:gap-4 lg:py-22 xl:w-5/8">
				<div className="">
					<HeaderText
						minSize="text-5xl"
						text="Donate"
						className="text-accent mb-6 lg:mb-0"
					/>

					<p className="max-w-[450px] text-xl font-semibold text-white">
						Your donation helps us purchase and deliver essential
						school supplies to students in need.
						<br />
						<br />
						Every dollar goes toward creating brighter futures,{" "}
						<span className="underline">
							one backpack at a time.
						</span>
					</p>
				</div>

				<Donorbox className="mt-[44px]" />
			</div>
		</div>
	);
}
