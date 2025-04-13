"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Script from "next/script";
import { useRef, useState } from "react";

export default function Donorbox({ className }: { className?: string }) {
    const [loaded, setLoaded] = useState(false);
    const root = useRef(null);
    
    useGSAP(() => {
        if (!loaded) return;

        gsap.fromTo(root.current, {
            opacity: 0,
        }, {
            duration: 0.5,
            opacity: 1,
            ease: "power2.out",
        });

    }, { scope: root, dependencies: [loaded] });

    return (
        <>
            <Script src="https://donorbox.org/widget.js"></Script>{" "}

            {!loaded && <Skeleton className="w-[430px] mr-14 h-[520px] bg-white mt-[44px] rounded-none" />}

            <iframe
                src="https://donorbox.org/embed/suppliedscholars?amount=25"
                name="donorbox"
                seamless={true}
                scrolling="no"
                height="900px"
                width="100%"
                ref={root}
                className={cn(
                    "max-h-none max-w-[500px] min-w-[250px] ",
                    className,
                    loaded ? "" : "hidden",
                )}
                allow="payment"
                onLoad={() => setLoaded(true)}
            ></iframe>
        </>
    );
}
