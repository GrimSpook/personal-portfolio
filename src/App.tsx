// import img from "@/assets/darkstone.png"
import Header from "./components/header"
import { useState } from "react"
import type { Cardprops } from "./components/card"
import Card from "./components/card"
import data from "@/assets/project.json"


function App() {

    const [state, _] = useState<Cardprops[]>(data)

    const software = ["javascript", "typescript", "HTML", "CSS", "TailwindCss", "DOTNET", "SQL", "C#"]
    const tools = ["Git", "Github", "VsCode", "Neovim", "Linux", "vercel", "heroku",]

    return (
        <div className="flex flex-col gap-4 p-4 container mx-auto">
            <Header />
            <div className="grid md:grid-cols-2 gap-2">

                <div className="flex flex-col gap-2 custom-border p-4 ">
                    <h2 className="font-bold dark:text-cyan-400 text-cyan-600 border-b border-black mb-2">About</h2>
                    <p className="leading-relaxed">
                        <div className="space-y-6 lg:container xl:basis-2/3 ">
                            <p className="leading-7 not-first:mt-6">
                                {`
                                    Hi, my name is Emil. I'm a passionet and kind person
                                    love to code and play games. Love to work with other that
                                    find coding interesting and like to solve problems that
                                    help others. Love to learn new things i'm a very curious
                                    person.
                               `}
                            </p>
                            <p className="leading-7 not-first:mt-6">
                                {`
                                    I learn to code my self, and i found that when i coded and
                                    something didn't work i couldn't let it go and had to
                                    figure out why and to solve the problem. When i was play
                                    games i sometimes wounderd how the game work under the
                                    hood and how all the system interacted with each other.
                                `}
                            </p>
                        </div>
                    </p>
                </div>

                <div className="flex flex-col gap-2 custom-border p-4">
                    <h2 className="font-bold dark:text-cyan-400 text-cyan-600 border-b border-black mb-2">Skills</h2>

                    <div className="space-y-6">

                        <div className="flex gap-2 flex-col">
                            <span className="text-neutral-400 text-nowrap">Software skills</span>
                            <ul className="flex gap-1 capitalize flex-wrap">
                                {software.map((text, i, arr) => {
                                    if (arr.length - 1 == i) {
                                        return <li>{text}</li>
                                    }
                                    return <li>{text},</li>
                                })}
                            </ul>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <span className="text-neutral-400 text-nowrap">Tool & Services</span>
                            <ul className="flex gap-1 capitalize flex-wrap">
                                {tools.map((text, i, arr) => {
                                    if (arr.length - 1 == i) {
                                        return <li>{text}</li>
                                    }
                                    return <li>{text},</li>
                                })}
                            </ul>
                        </div>

                    </div>
                </div>


            </div>

            <div className="flex flex-col gap-2 xl:col-span-2 xl:row-span-3 custom-scrollbar">
                <h2 className="font-bold dark:text-cyan-400 text-cyan-600 border-b border-black mb-2 text-xl">Projects</h2>
                <div className="flex flex-col space-y-4">
                    {state.map((item) => (
                        <Card
                            title={item.title}
                            tech={item.tech}
                            description={item.description}
                            img={item.img}
                            imgAlt={item.imgAlt}
                            links={item.links}
                            type={item.type}
                        />
                    ))}
                </div>
            </div>
        </div>


    )
}

export default App
