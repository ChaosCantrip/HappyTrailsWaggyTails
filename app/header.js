import Link from "next/link";
import logo from "@/public/images/logo_no_text.png";

import styles from "@/styles/modules/header.module.css";
import Image from "next/image";

export default function Header(){
    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <Image src={logo} alt={"Logo"} className={styles.logo}/>
                    <div>
                        <h1>Happy Trails Waggy Tails</h1>
                        <p>Website currently under development :)</p>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <Link href="home"><li>Home</li></Link>
                        <Link href="about"><li>About</li></Link>
                        <Link href="services"><li>Services</li></Link>
                        <Link href="contact"><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}