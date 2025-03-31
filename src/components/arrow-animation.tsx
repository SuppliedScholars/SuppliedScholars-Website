"use client";


/*
 This whole component is really fucked
 Lottie is basically a wrapper for playing videos from .lottie files
 To get the "Scroll to check us out text!" to show up we have to time it manually
 But the animation has variable loading times so we have to listen for the play event
 And the lottie library sucks so its really convoluted

 Basically all this component does its:
    1. Waits for the animation to load
    2. Makes a setTimeout to show the text after 1 second
*/

import { useEffect, useState } from "react";
import LottieWrapper from "./lottie-wrapper";
import { DotLottie } from "@lottiefiles/dotlottie-react";

export default function ArrowAnimation() {
	const [animationEnd, setAnimationEnd] = useState(false);
	const [dotLottie, setDotLottie] = useState<DotLottie| null>(null);

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
		<div className="absolute bottom-10 xl:left-1/6 left-10 xl:scale-none scale-75 lg:block hidden">
            {/* Scale-x-[-1] is used to horizontally reflect the animation */}
			<LottieWrapper
				src="/lottie/ArrowAnimation.lottie"
				autoplay
				className="w-[600px] rotate-180 scale-x-[-1]"
				dotLottieRefCallback={dotLottieRefCallback}
			/>

			{animationEnd ? (
				<p
					className={`-mt-4 font-bold animate-fade-down xl:scale-none scale-125`}
				>
					Scroll to check us out!
				</p>
			) : (
                // Make sure the page doesn't shift when the text appears
                <p className="text-transparent -mt-4 font-bold">Hidden</p>
            )}
		</div>
	);
}
