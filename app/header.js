"use client";

import Link from "next/link";
import logo from "@/public/images/logo_no_text.png";

import styles from "@/styles/modules/header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {pathHasPrefix} from "next/dist/shared/lib/router/utils/path-has-prefix";

export default function Header(){
    function get_class(path) {
        console.log(pathname);
        console.log(path);
        console.log(pathname === path);
        if (pathname === path) {
            return styles.active;
        }
        return styles.inactive;
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
                        <Link href="home" className={get_class("/home")}><li>Home</li></Link>
                        <Link href="about" className={get_class("/about")}><li>About</li></Link>
                        <Link href="services" className={get_class("/services")}><li>Services</li></Link>
                        <Link href="contact" className={get_class("/contact")}><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}