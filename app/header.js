import styles from "@/styles/modules/header.module.css";

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>Happy Trails Waggy Tails</h1>
                <p>Website currently under development :)</p>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}