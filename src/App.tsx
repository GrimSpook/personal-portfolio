// import img from "@/assets/darkstone.png"
import Header from "./components/header"
import { useState } from "react"
import type { Cardprops } from "./components/card"
import Card from "./components/card"


function App() {

    const [state, _] = useState<Cardprops[]>([
        {
            type: ["school", "group", "project"],
            title: "Time Virus Game",
            tech: ["vite", "vanilla", "typescript", "socket.io"],
            description: `
                This was a very fun and challenging project where we put all we had learned in frontend and backend to use. 
                We also learned even more about the importance of dividing code into components and agile teamwork.
            `,
            imgAlt: "image off the time virus game",
            img: "/assets/time-virus-img.png",
            links: [
                {
                    title: "Github",
                    url: "https://github.com/KaptenKatthatt/time-virus-jo"
                },
                {
                    title: "Website",
                    url: "https://time-virus-jo-419c273bc3be.herokuapp.com"
                }
            ]
        },
    ])

    return (


        <div className="flex flex-col gap-4 p-4 container mx-auto">
            <Header />
            <div className="grid md:grid-cols-2 gap-2">

                <div className="flex flex-col gap-2 custom-border p-4 ">
                    <h2 className="font-bold dark:text-cyan-400 text-cyan-600 border-b border-black mb-2">About</h2>
                    <p className="leading-relaxed">
                        Som person är jag glad, lungn och nyfiken. Har alltid gillat teknik och
                        programmering. Började plugga till elektriker men fick ett mycket störe intresse för
                        programmering efter jag började hålla på och mixstra med python några år tillbak.
                        Efter det så har jag lärt mig själv om programmering och gått lite kurser och
                        utbildningar inom programmering. Såsom programmering 1, webbserverprogrammering,
                        systemutveckaler inom DOTNET och nu frontendutvecklare på Medieinstitutet.
                    </p>
                </div>

                <div className="flex flex-col gap-2 custom-border p-4">
                    <h2 className="font-bold dark:text-cyan-400 text-cyan-600 border-b border-black mb-2">Skills</h2>
                    <p className="leading-relaxed">
                    </p>
                </div>


            </div>

            <div className="flex flex-col gap-2 xl:col-span-2 xl:row-span-3 custom-scrollbar">
                <h2 className="font-bold dark:text-cyan-400 text-cyan-600 border-b border-black mb-2 text-xl">Projects</h2>
                <div className="flex flex-col space-y-4 ">
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
