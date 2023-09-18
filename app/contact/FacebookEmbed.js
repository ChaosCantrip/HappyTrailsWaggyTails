import styles from "@/styles/modules/embed.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

export default function FacebookEmbed() {
    return (
        <a className={styles.wrapper} href="https://www.facebook.com/100091950795281" target="_blank" rel="noopener noreferrer">
            <div className={styles.container}>
                <div className={styles.inner}>
                    <FontAwesomeIcon icon={faFacebookSquare} className={styles.facebook}/>
                    <p>Happy Trails Waggy Tails</p>
                    <iframe
                        className={styles.like}
                        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2F100091950795281&width=450&layout&action&size&share=true&height=35&appId"
                        width="450" height="35" scrolling="no" frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </a>
    )
}