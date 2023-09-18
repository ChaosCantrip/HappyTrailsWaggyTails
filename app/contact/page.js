import layout from "@/styles/modules/layout.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/app/contact/ContactForm";
import FacebookEmbed from "@/app/contact/FacebookEmbed";

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
            <div className={`${layout.right} ${layout.desktop_only}`}>
                <h2>I'm on Facebook!</h2>
                <FacebookEmbed/>
            </div>
            <div className={layout.left}>
                <p>Alternatively, use the form below and I'll reply to you as soon as possible!</p>
                <ContactForm/>
            </div>
        </div>
    )
}