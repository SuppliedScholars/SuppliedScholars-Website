import { GithubIcon, InstagramIcon, MailIcon } from "lucide-react";

export default function Footer() {
	return (
		<footer className="flex h-54 w-full justify-center bg-white px-4 py-10 sm:px-10 md:px-20">
			<div className="flex h-full w-full flex-row justify-between">
				<div className="flex h-full flex-col">
					<p className="text-primary text-3xl font-bold">
						{" "}
						Supplied Scholars{" "}
					</p>
					<p className="text-md text-neutral-950">
						{" "}
						Making education better{" "}
					</p>

					<div className="text-primary mt-4 flex w-full flex-row gap-4">
						<InstagramIcon className="h-6 w-6" /> —
						<GithubIcon className="h-6 w-6" /> —
						<MailIcon className="h-6 w-6" />
					</div>
				</div>

				<div className="mt-1 flex h-full flex-row gap-12 sm:mt-0">
					<div className="">
						<p className="text-primary text-xl font-bold">
							{" "}
							About Us{" "}
						</p>
						<div className="text-md mt-4 flex flex-col gap-1 text-neutral-900">
							<p> Our Mission </p>
							<p> Our Team </p>
							<p> Our Impact </p>
						</div>
					</div>

					<div className="hidden sm:block">
						<p className="text-primary text-xl font-bold">
							{" "}
							Get Involved{" "}
						</p>
						<div className="text-md mt-4 flex flex-col gap-1 text-neutral-900">
							<p> Donate </p>
							<p> Volunteer </p>
							<p> Partnerships </p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
