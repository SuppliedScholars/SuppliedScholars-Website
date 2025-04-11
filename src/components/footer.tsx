import { GithubIcon, InstagramIcon, MailIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full h-64 bg-white p-10">
            <div className="flex flex-row h-full justify-between">
                <div className=" h-full flex flex-col">

                    <p className=" text-primary font-bold text-3xl"> Supplied Scholars </p>
                    <p className="  text-neutral-950 text-md"> Making education better </p>


                    <div className=" mt-4 flex flex-row w-full text-primary gap-4">
                    <InstagramIcon className="h-6 w-6 " /> —
                        <GithubIcon className="h-6 w-6" /> —
                        <MailIcon className="h-6 w-6 " /> 
                    </div>
                </div>

                <div className=" flex flex-row h-full gap-12">
                    <div>
                        <p className=" font-bold text-primary text-xl"> About Us </p>
                        <div className=" text-neutral-900 mt-4 text-md flex flex-col gap-1">
                            <p > Our Mission </p>
                            <p > Our Team </p>
                            <p > Our Impact </p>
                        </div>
                    </div>

                    <div >
                        <p className=" font-bold text-primary text-xl"> Get Involved </p>
                        <div className=" text-neutral-900 mt-4 text-md flex flex-col gap-1">
                            <p > Donate </p>
                            <p > Volunteer </p>
                            <p > Partnerships </p>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    );
}