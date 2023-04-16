"use client";

import Link from "next/link";
import logo from "@/public/images/logo_no_text.png";

import styles from "@/styles/modules/header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {pathHasPrefix} from "next/dist/shared/lib/router/utils/path-has-prefix";

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
                    <ul>
                        <Link href="home"><li>Home</li></Link>
                        <Link href="about"><li>About</li></Link>
                        <Link href="services"><li>Services</li></Link>
                        <Link href="contact"><li>Contact</li></Link>
                    </ul>
                    <div className={`${styles.underline} ${get_ul_class()}`}></div>
                </nav>
            </div>
        </header>
    )
}