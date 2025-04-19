"use client";
import { useRef, useState } from "react";
import HeaderText from "./header-text";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const texts = [
	{
		title: "Your Donation Supports Our Financial Team",
		content: (
			<>
				When you donate to Supplied Scholars, your contribution first
				goes to our dedicated financial team. <br />
				<br /> They manage the funds responsibly, ensuring that every
				dollar is allocated effectively to purchase essential supplies
				for students.
			</>
		),
	},
	{
		title: "Your Donation Fuels Our Mission",
		content: (
			<>
				Once the funds are in place, our team works hard to purchase and
				package the necessary school supplies. <br /> <br /> We ensure
				everything is carefully organized and prepared to meet the needs
				of students. Every package is assembled with care, ready to make
				a positive impact in the classroom.
			</>
		),
	},
	{
		title: "Shipping Supplies to Schools",
		content: (
			<>
				After the supplies are packaged, we arrange for fast and
				reliable shipping to schools in need. <br /> <br /> We make sure
				the supplies reach the students who need them most, helping them
				succeed in their education. Your donation directly fuels this
				vital process!
			</>
		),
	},
];

type LottieConfig = {
	src: string;
	frames: number;
	duration: number;
	className: string;
};

const lottieConfigs: Record<string, LottieConfig> = {
	Money: {
		src: "/lottie/CashAnimation.lottie",
		frames: 82,
		duration: 1.4,
		className:
			"w-[400px] scale-children-115 h-[350px] bg-card rounded-lg bg-white overflow-clip pb-4",
	},
	Shipment: {
		src: "/lottie/ShipmentAnimation.lottie",
		frames: 48,
		duration: 1,
		className: "scale-children-225 max-w-[390px] ml-12",
	},
	Truck: {
		src: "/lottie/TruckAnimation.lottie",
		frames: 40,
		duration: 1,
		// flip horizontally
		className: "scale-children-115 max-w-[390px] ml-12 -scale-x ",
	},
};

export default function DonationInformation() {
	const root = useRef<HTMLDivElement | null>(null);

	const [lottieObject, setLottieObject] = useState<DotLottie | null>(null);
	const [lottieConfig, setLottieConfig] = useState<LottieConfig>(
		lottieConfigs.Money,
	);
	const [text, setText] = useState(texts[0]);
    const currentStep = useRef(0);
	// const [devTime, setDevTime] = useState(0);

	const scrollLockHeight = 450; // 300svh

	const lottieRefCallback = (dotLottie: DotLottie) => {
		setLottieObject(dotLottie);
	};

	const handleStepChange = (progress: number) => {
		if (progress < 1.4 && currentStep.current !== 0) {
            console.log('Step 0', currentStep.current)
            currentStep.current = 0;
			setText(texts[0]);
			setLottieConfig(lottieConfigs.Money);
		} else if ((progress >= 1.4 && progress < 3.2) && currentStep.current !== 1) {
            console.log('Step 1', currentStep.current)
            currentStep.current = 1
			setText(texts[1]);
			setLottieConfig(lottieConfigs.Shipment);
		} else if ((progress >= 3.2 && progress < 5) && currentStep.current !== 2) {
            console.log('Step 2', currentStep.current)
            currentStep.current = 2
			setText(texts[2]);
			setLottieConfig(lottieConfigs.Truck);
		}
	};

	useGSAP(
		() => {
			if (!lottieObject) return;

			let progress = 0;

			const tl = gsap.timeline();
			tl.pause();

			const moneyLottieProxy = { frame: 0 };
			tl.to(moneyLottieProxy, {
				frame: lottieConfigs.Money.frames,
				duration: 1,
				ease: "none",
				onUpdate: () => {
					lottieObject.setFrame(moneyLottieProxy.frame);
				},
			});

			// Fade out money lottie
			tl.to(".lottie-component", {
				opacity: 0,
				duration: 0.4,
				ease: "power2.out",
			});

			// Fade out text
			tl.to(
				".info-text-container",
				{
					opacity: 0,
					duration: 0.4,
					ease: "power2.out",
				},
				0.6,
			);

			// Fade in text, should be changed at this point
			// Add dropshadow + border

			// tl.to(".info-text-container", {
			// 	opacity: 1,
			// 	duration: 0.4,
			// 	boxShadow: "0 9px 7px rgb(0 0 0 / 0.1)",
			// 	border: "rgba(255, 255, 255, 0.4) 2px solid",
			// 	ease: "power2.out",
			// });

            // Very performance heavy to animation shadow, so just set it instead and then fade it in
            tl.set(".info-text-container", {
                // boxShadow: "0 9px 7px rgb(0 0 0 / 0.1)",
                border: "rgba(255, 255, 255, 0.4) 2px solid",
            })

            tl.to(".info-text-container", {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            })

			// Move the text container
			tl.to(".info-text-container", {
				x: "50px",
				y: "-200px",
				duration: 0.4,
				ease: "quint.inOut",
			});

			// Setup the lottie container for the shipment lottie
			tl.to(
				".lottie-component",
				{
					opacity: 1,
					duration: 0,
				},
				"<",
			);

			const shipmentLottieProxy = { frame: 0 };
			tl.to(
				shipmentLottieProxy,
				{
					frame: lottieConfigs.Shipment.frames,
					duration: 0.8,
					ease: "none",
					onUpdate: () => {
						lottieObject.setFrame(shipmentLottieProxy.frame);
					},
				},
				"<",
			);

			// Rotate and send the shipment lottie back offscreen
			tl.to(".lottie-component", {
				rotate: "-8deg",
				x: "-500px",
				duration: 0.6,
			});

			// Move the text under the container
			tl.to(
				".info-text",
				{
					y: "400px",
					duration: 0.4,
					ease: "quad.out",
				},
				"<",
			);

			// Move the text above the container
			tl.set(".info-text", {
				y: "-400px",
			});

			// Move the text back down into the container
			tl.to(".info-text", {
				y: "0px",
				duration: 0.4,
				ease: "quad.out",
			});

			// Setup truck lottie
			tl.set(
				".lottie-component",
				{
					rotate: "0deg",
					scaleX: "-1",
					x: "-500px",
				},
				"<",
			);

			// Move truck lottie onscreen
			tl.to(".lottie-component", {
				x: "0px",
				duration: 0.5,
				onStart: () => {
					lottieObject.play();
					lottieObject.setFrame(0);
					lottieObject.setLoop(true);
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
					// setDevTime(progress);
					handleStepChange(progress);
				},
			});
		},
		{ scope: root, dependencies: [lottieObject] },
	);

	return (
		<div className="flex h-max w-full flex-col" ref={root}>
			<div className="pinned-container bg-primary flex min-h-svh w-full flex-row text-white">
				<div className="donation-information-root relative flex w-full flex-col overflow-clip px-6 pb-6">
					<HeaderText
						text={`How?`}
						minSize="text-6xl"
						className="mb-4"
					/>

					<div className="mt-auto flex flex-col-reverse items-center gap-4 md:flex-row md:items-start lg:text-left">
						{/* <div className="w-0 h-min overflow-visible"> */}
						<DotLottieReact
							dotLottieRefCallback={lottieRefCallback}
							src={lottieConfig.src}
							className={cn(
								"lottie-component",
								lottieConfig.className,
							)}
						/>
						{/* </div> */}
					</div>
					<div className="info-text-container absolute bottom-36 max-w-[390px] overflow-clip rounded-md p-2 font-bold md:text-2xl lg:left-[440px] lg:w-[500px] lg:text-xl">
						<p className="info-text">{text.content}</p>
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
