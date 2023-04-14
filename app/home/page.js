import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "@/public/images/logo.jpg";

export const metadata = {
    title: "Home"
}

import styles from "@/styles/modules/home.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={styles.flexbox}>
        <div>
            <div className={styles.intro}>
                <h2>Hi, I'm Nadine!</h2>
                <p>After working for most of my adult life, specifically the last 9 years, in a school for children with Special Education Needs, I am now following a long held ambition to work with dogs, and have set up Happy Trails Waggy Tails dog walking service</p>
                <p>I would love to hear from you and meet your doggy member of the family</p>
            </div>
        </div>
        <div className={styles.logo_wrapper}>
            <Image src={logo} alt="Logo" className={styles.logo}/>
        </div>
        <div id="contact">
            <h2>Contact Me!</h2>
            <p><FontAwesomeIcon icon={faPhone}/> Phone: <a href="tel:07425 160615">07425 160615</a></p>
            <p><FontAwesomeIcon icon={faEnvelope}/> Email: <a href="mailto:nadine@happytrailswaggytails.co.uk">nadine@happytrailswaggytails.co.uk</a></p>
        </div>
        <div>
            <ul className={styles.list}>
                <li><PawIcon/> Solo or group walks</li>
                <li><PawIcon/> 1 hour or shorter walks, tailored to your needs</li>
                <li><PawIcon/> Friendly, professional, personal service</li>
                <li><PawIcon/> Canine First Aid Certified</li>
                <li><PawIcon/> Fully insured and DBS Checked</li>
            </ul>
        </div>
    </div>
  );
}

function PawIcon(){
    return (
        <FontAwesomeIcon icon={faPaw}/>
    )
}