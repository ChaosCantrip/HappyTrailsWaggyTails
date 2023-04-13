import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
    title: "Home"
}

import styles from "@/styles/modules/home.module.css";

export default function HomePage() {
  return (
    <div>
        <h2>Hi, I'm Nadine!</h2>
        <section>
            <p>After working for most of my adult life, specifically the last 9 years, in a school for children with Special Education Needs, I am not following a long held ambition to work with dogs, and have set up Happy Trails Waggy Tails dog walking service</p>
            <p>I would love to hear from you and meet your doggy member of the family</p>
        </section>
        <section>
            <ul className={styles.list}>
                <li><PawIcon/> Solo or group walks</li>
                <li><PawIcon/> 1 hour or shorter walks, tailored to your needs</li>
                <li><PawIcon/> Friendly, professional, personal service</li>
                <li><PawIcon/> Canine First Aid Certified</li>
                <li><PawIcon/> Fully insured and DBS Checked</li>
            </ul>
        </section>
        <section id="contact">
            <h2>Contact Me!</h2>
            <p>Phone: <a href="tel:07425 160615">07425 160615</a></p>
            <p>Email: <a href="mailto:nadine@happytrailswaggytails.co.uk">nadine@happytrailswaggytrails.co.uk</a></p>
        </section>
    </div>
  );
}

function PawIcon(){
    return (
        <FontAwesomeIcon icon={faPaw}/>
    )
}