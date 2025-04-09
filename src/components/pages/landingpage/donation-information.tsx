"use client";
import { useRef, useState } from "react";
import HeaderText from "./header-text";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const totalLottieFrames = {
	money: 82,
};

export default function DonationInformation() {
	const root = useRef<HTMLDivElement | null>(null);

	const [moneyLottie, setMoneyLottie] = useState<DotLottie | null>(null);
	const [devTime, setDevTime] = useState(0);

	const scrollLockHeight = 300; // 300svh

	const moneyLottieRefCallback = (dotLottie: DotLottie) => {
		setMoneyLottie(dotLottie);
	};

	useGSAP(
		() => {
			if (!moneyLottie) return;

			let progress = 0;

			const tl = gsap.timeline();
			tl.pause();

			const moneyLottieProxy = { frame: 0 };
			tl.to(moneyLottieProxy, {
				frame: totalLottieFrames.money,
				duration: 1,
				ease: "none",
				onUpdate: () => {
					moneyLottie.setFrame(moneyLottieProxy.frame);
				},
			});

			ScrollTrigger.create({
				trigger: ".pinned-container",
				pin: true,
				start: "top",
				end: `+=${scrollLockHeight}%`,
				onUpdate: (self) => {
					const scrollerPos = (self.scroller as Window).scrollY;
					const startPos = self.start;
					const currentPos = scrollerPos - startPos;
					progress = Math.max(0, currentPos / 1000); // Creating an artifical time value based on the scroll position

					tl.seek(progress, false); // Seek the animation to the current position
					setDevTime(progress);
				},
			});
		},
		{ scope: root, dependencies: [moneyLottie] },
	);

	return (
		<div className="flex h-max w-full flex-col" ref={root}>
			<div className="pinned-container bg-primary mt-12 flex h-svh min-h-svh w-full flex-row pt-4 pb-12 text-white">
				<div className="donation-information-root flex w-full flex-col">
					<div className="px-6">
						<HeaderText
							text={`Where? ${devTime.toFixed(2)}s`}
							minSize="text-6xl"
						/>
						<p className="ml-2 text-[18px] font-semibold md:text-lg">
							Where do my donations go?
						</p>
					</div>

					<div className="mt-auto flex flex-col-reverse items-center gap-4 lg:flex-row lg:items-start lg:pl-6 lg:text-left">
						<div className="bg-card w-[390px] rounded-lg">
							<DotLottieReact
								dotLottieRefCallback={moneyLottieRefCallback}
								src="/lottie/CashAnimation.lottie"
								className="money-lottie -ml-52 w-[800px]"
							/>
						</div>

						<p className="w-[390px] text-xl font-bold md:text-2xl lg:w-[500px]">
							When you donate to Supplied Scholars, your
							contribution first goes to our dedicated financial
							team. <br />
							<br /> They manage the funds responsibly, ensuring
							that every dollar is allocated effectively to
							purchase essential supplies for students.
						</p>
					</div>
				</div>
			</div>

			<div
				style={{
					height: `${scrollLockHeight}svh`,
				}}
			></div>
		</div>
	);
}
