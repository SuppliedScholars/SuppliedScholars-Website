"use client";

import { DotLottieReact, DotLottieReactProps } from "@lottiefiles/dotlottie-react";

// Create a wrapper to make it a client component
export default function LottieWrapper(args: DotLottieReactProps) {
    return <DotLottieReact {...args} />;
}