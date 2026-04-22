
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
                        {props.type.map((text, i, arr) => {
                            if (arr.length - 1 == i) {
                                return <li>{text}</li>
                            }
                            return <li>{text},</li>
                        })}
                    </ul>
                </div>
                <div className="flex gap-2 ">
                    <span className="text-neutral-400">Tech:</span>
                    <ul className="flex gap-1 capitalize flex-wrap">
                        {props.tech.map((text, i, arr) => {
                            if (arr.length - 1 == i) {
                                return <li>{text}</li>
                            }
                            return <li>{text},</li>
                        })}
                    </ul>
                </div>
                <div className="flex gap-2 ">
                    <span className="text-neutral-400">Links:</span>
                    <ul className="flex gap-1 capitalize flex-wrap">
                        {props.links.map((link) => {
                            return <li className="underline font-bold hover:text-cyan-600 text-cyan-400"><a href={link.url}>{link.title}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
