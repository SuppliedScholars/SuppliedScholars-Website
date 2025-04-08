import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Supplied Scholars",
	description: "Resources for students",
    metadataBase: new URL("https://suppliedscholars.com/"),
    openGraph: {
		type: "website",
		url: "https://suppliedscholars.com/",
		title: "Supplied Scholars",
		description: "Supplied Scholars is a non-profit based in Washington State dedicated to our goal of making education accessible for all.",
        images: [
            {
                url: "https://suppliedscholars.com/Banner.png",
            },
        ],
	},
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} antialiased bg-primary`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
