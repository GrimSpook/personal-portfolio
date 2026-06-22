import { Dot } from "lucide-react"
import React from "react"

interface link {
    title: string
    url: string
}

export interface Cardprops {
    title: string
    tech: string[]
    description: string
    img: string
    imgAlt: string
    links: link[]
    type: string[],
}

function Card(props: Cardprops) {
    return (
        <div className="custom-border p-4 flex md:flex-row flex-col gap-3 items-center">
            <img src={props.img} alt={props.imgAlt} className="aspect-video h-50 border" />
            <div className="space-y-4 px-2">
                <h3 className="font-bold text-xl mb-2 dark:text-cyan-400 text-cyan-600">{props.title}</h3>
                <p className="">{props.description}</p>
                <div className="flex gap-2 ">
                    <span className="text-neutral-400">Type:</span>
                    <ul className="flex gap-1 capitalize flex-wrap">
                        {props.type.map((text, index, arr) => {
                            return <li key={index}>
                                {text}
                                {arr.length > 1 && index < arr.length - 1 && <>,</>}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="flex gap-2 ">
                    <span className="text-neutral-400">Tech:</span>
                    <ul className="flex gap-1 capitalize flex-wrap">
                        {props.tech.map((text, index, arr) => {
                            return <li key={index}>
                                {text}
                                {arr.length > 1 && index < arr.length - 1 && <>,</>}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="flex gap-2 ">
                    <span className="text-neutral-400">Links:</span>
                    <ul className="flex capitalize flex-wrap">
                        {props.links.map((link, index, arr) => {
                            return <React.Fragment key={index}>
                                <li className="underline font-bold hover:text-cyan-600 text-cyan-400">
                                    <a href={link.url} target="_blank">{link.title}</a>
                                </li>
                                {arr.length > 1 && index < arr.length - 1 && <Dot className="text-neutral-400" />}
                            </React.Fragment>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
