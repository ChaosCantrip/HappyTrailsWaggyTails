import layout from "@/styles/modules/layout.module.css";
import MontyGallery from "@/app/about/MontyGallery";

export const metadata = {
        title: "About"
}

export default function AboutPage() {
    return (
        <div className={layout.page}>
            <div>
                <h1>Hi, I'm Nadine!</h1>
                <br/>
                <p>For the last 9 years, I have been working with children who have Special Educational Needs,
                    which has been very rewarding.</p>
                <p>However, after saying goodbye to our beloved Monty, and him leaving a huge hole in our hearts and
                    home, I feel now is the time to follow a long held dream of mine and work with
                    dogs, so I have started Happy Trails Waggy Tails dog walking service.</p>
                <p>I would love to hear from you and meet your doggy member of the family</p>
            </div>
            <div>
                <MontyGallery/>
            </div>
        </div>
    )
}