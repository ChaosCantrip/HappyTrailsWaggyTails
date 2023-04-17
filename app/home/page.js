import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
        <div id="contact">
            <h2>Contact Me!</h2>
            <p><FontAwesomeIcon icon={faPhone}/> Phone: <a href="tel:07425 160615">07425 160615</a></p>
            <p><FontAwesomeIcon icon={faEnvelope}/> Email: <a href="mailto:nadine@happytrailswaggytails.co.uk">nadine@happytrailswaggytails.co.uk</a></p>
        </div>
        <div>
            <ul className={styles.list}>
                <li>Solo or group walks</li>
                <li><PawIcon/></li>
                <li>1 hour or shorter walks, tailored to your needs</li>
                <li><PawIcon/></li>
                <li>Friendly, professional, personal service</li>
                <li><PawIcon/></li>
                <li>Canine First Aid Certified</li>
                <li><PawIcon/></li>
                <li>Fully insured and DBS Checked</li>
            </ul>
        </div>
    </div>
  );
}

function PawIcon(){
    return (
        <FontAwesomeIcon icon={faPaw} className={styles.paw}/>
    )
}