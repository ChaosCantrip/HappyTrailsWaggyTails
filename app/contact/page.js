import layout from "@/styles/modules/layout.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
    title: "Contact"
}

export default function ContactPage() {
    return (
        <div className={layout.page}>
            <div className={layout.double}>
                <h1>Contact Me</h1>
            </div>
            <div className={layout.left}>
                <p>To enquire about my services, please contact me using the details below.</p>
                <p><FontAwesomeIcon icon={faPhone}/> Phone: <a href="tel:07425 160615">07425 160615</a></p>
                <p><FontAwesomeIcon icon={faEnvelope}/> Email: <a href="mailto:nadine@happytrailswaggytails.co.uk">nadine@happytrailswaggytails.co.uk</a></p>
            </div>
            <div className={layout.right}>
                <h1>I'm on Facebook!</h1>
                <p>Embed here innit</p>
            </div>
        </div>
    )
}