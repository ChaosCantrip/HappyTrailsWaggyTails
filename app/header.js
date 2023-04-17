"use client";

import Link from "next/link";
import logo from "@/public/images/logo_no_text.png";

import styles from "@/styles/modules/header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Header(){
    function get_ul_class() {
        if (pathname === "/home") {
            return styles.ul_one;
        } else if (pathname === "/about") {
            return styles.ul_two;
        } else if (pathname === "/services") {
            return styles.ul_three;
        } else {
            return styles.ul_four;
        }
    }
    const pathname = usePathname();
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
                    <ul className={styles.nav_menu}>
                        <Link href="home" className={styles.nav_button}><li>Home</li></Link>
                        <Link href="about" className={styles.nav_button}><li>About</li></Link>
                        <Link href="services" className={styles.nav_button}><li>Services</li></Link>
                        <Link href="contact" className={styles.nav_button}><li>Contact</li></Link>
                    </ul>
                    <div className={`${styles.underline} ${get_ul_class()}`}>
                        <FontAwesomeIcon icon={faPaw} className={styles.paw}/>
                    </div>
                </nav>
            </div>
        </header>
    )
}