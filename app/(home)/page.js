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
                <p>Welcome to Happy Trails Waggy Tails Dog Walking Service.</p>
                <p>Areas covered are Barnby Dun, Kirk Sandall, Edenthorpe, Hatfield, Dunsville and Dunscroft. Other areas near Doncaster will be considered.</p>
                <p>I look forward to meeting you and your doggy member of the family!</p>
            </div>
        </div>
        <div className={`${layout.desktop_only}`}>
            <Image src={logo} alt="Logo" className={styles.logo} placeholder="blur"/>
        </div>
    </div>
  );
}