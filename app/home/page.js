import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import logo from "@/public/images/logo.jpg";

export const metadata = {
    title: "Home"
}

import styles from "@/styles/modules/home.module.css";
import layout from "@/styles/modules/layout.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={layout.page}>
        <div>
            <div className={styles.intro}>
                <h1>Hi, I'm Nadine!</h1>
                <br/>
                <p>For the last 9 years, I have been working with children who have Special Educational Needs,
                    which has been very rewarding.</p>
                <p>However, after saying goodbye to our beloved Monty, and him leaving a huge hole in our hearts and
                    home, I feel now is the time to follow a long held dream of mine and work with
                    dogs, so I have started Happy Trails Waggy Tails dog walking service.</p>
                <p>I would love to hear from you and meet your doggy member of the family</p>
            </div>
        </div>
        <div className={`${layout.desktop_only}`}>
            <Image src={logo} alt="Logo" className={styles.logo}/>
        </div>
    </div>
  );
}

function PawIcon(){
    return (
        <FontAwesomeIcon icon={faPaw} className={styles.paw}/>
    )
}