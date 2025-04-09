import { cn } from "@/lib/utils";

export default function  HeaderText({ text, minSize }: { text: string; minSize: string }) {
	return (
		// MinSize eg text-5xl
		<p
			className={cn(
				minSize,
				"font-semibold md:text-7xl lg:text-[90px] lg:leading-normal",
			)}
		>
			{text}
		</p>
	);
}