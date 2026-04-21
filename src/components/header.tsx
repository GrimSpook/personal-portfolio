import { ArrowRight, Mail } from "lucide-react"
import Logo from "./logo"

function Header() {
    return (
        <div className="flex md:flex-row flex-col gap-2 justify-center md:justify-between p-4 custom-border items-center h-[80px] sticky bg-background z-50 top-0">

            <h1 className="hidden md:flex dark:text-cyan-400 text-cyan-600 font-bold">
                <Logo className="lg:h-[40px] lg:w-[40px]" />
            </h1>
            <div className="flex gap-2">

                <span className="md:flex gap-2 hidden font-bold wrap-none items-center">
                    <span>GET IN TOUCH </span>
                    <ArrowRight />
                </span>
                <ul className="flex gap-2 items-center">
                    <li className="flex gap-2">
                        <span className="text-cyan-400"><Mail /></span>
                        <span>Emilstrjobb@gmail.com</span>
                    </li>
                    <li className="underline font-bold hover:text-cyan-600 text-cyan-400">
                        <a href="https://github.com/GrimSpook" target="_blank">Github</a>
                    </li>
                    <li className="underline font-bold hover:text-cyan-600 text-cyan-400">
                        <a href="https://www.linkedin.com/in/emilstr" target="_blank">Linkedin</a>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Header

