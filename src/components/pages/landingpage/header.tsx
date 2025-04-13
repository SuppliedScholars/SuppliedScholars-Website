import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPageHeader() {
	return (
		<div className="bg-card text-primary flex h-16 w-full flex-row items-center justify-between px-2 md:px-6">
			{/* Logo */}
			<div className="flex basis-1/2 md:basis-1/3">
				<div className="bg-primary size-10 rounded-full"></div>
			</div>

			<p className="hidden basis-1/3 text-2xl font-bold md:flex md:justify-center">
				{/* Supplied Scholars */}
                <Link href="/">
                    Supplied Scholars
                </Link>
			</p>

			<div className="text-md flex basis-1/2 flex-row justify-end font-semibold md:basis-1/3">
				<Button
					variant="link"
					className="text-md cursor-pointer rounded-full"
				>
					<Link href="/" prefetch={true}>
						Home
					</Link>
				</Button>
				<Button
					variant="link"
					className="text-md cursor-pointer rounded-full"
				>
					<Link href="/donate" prefetch={true}>
						Donate
					</Link>
				</Button>
				<Button
					variant="link"
					className="text-md cursor-pointer rounded-full"
				>
					Contact
				</Button>
			</div>
		</div>
	);
}
