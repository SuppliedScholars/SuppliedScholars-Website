import Donorbox from "@/components/pages/donate/donorbox";
import LandingPageHeader from "@/components/pages/landingpage/header";
import HeaderText from "@/components/pages/landingpage/header-text";


export default function Donate() {
	return (
		<div className="flex min-h-svh flex-col items-center">
			<LandingPageHeader />

			<div className="flex grow flex-col gap-0 px-4 py-10 lg:w-7/8 lg:flex-row lg:justify-between lg:gap-4 lg:py-22 xl:w-5/8">
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
