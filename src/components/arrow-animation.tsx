"use client";

/*
 This whole component is really fucked
 Lottie is basically a wrapper for playing videos from .lottie files
 To get the "Scroll to check us out text!" to show up we have to time it manually
 But the animation has variable loading times so we have to listen for the play event
 And the lottie library sucks so its really convoluted

 Basically all this component does its:
    1. Waits for the animation to load
    2. Makes a setTimeout to show the text after .4 second
*/

import { useEffect, useState } from "react";
import LottieWrapper from "./lottie-wrapper";
import { DotLottie } from "@lottiefiles/dotlottie-react";

export default function ArrowAnimation() {
	const [animationEnd, setAnimationEnd] = useState(false);
	const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

	const dotLottieRefCallback = (dotLottie: DotLottie) => {
		setDotLottie(dotLottie);
	};

	useEffect(() => {
		function onPlay() {
			setTimeout(() => {
				setAnimationEnd(true);
			}, 400);
		}

		if (dotLottie) {
			dotLottie.addEventListener("play", onPlay);
		}

		return () => {
			if (dotLottie) {
				dotLottie.removeEventListener("play", onPlay);
			}
		};
	}, [dotLottie]);

	return (
		<div className="absolute bottom-10 left-10 hidden scale-75 lg:block xl:left-1/6 xl:scale-none">
			{/* Scale-x-[-1] is used to horizontally reflect the animation */}
			<LottieWrapper
				src="/lottie/ArrowAnimation.lottie"
				autoplay
				className="w-[600px] scale-x-[-1] rotate-180"
				dotLottieRefCallback={dotLottieRefCallback}
			/>

			{animationEnd ? (
				<p
					className={`animate-fade-down -mt-4 scale-125 font-bold xl:scale-none`}
				>
					Scroll to check us out!
				</p>
			) : (
				// Make sure the page doesn't shift when the text appears
				<p className="-mt-4 font-bold text-transparent">Hidden</p>
			)}
		</div>
	);
}
