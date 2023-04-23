"use client"

import styles from "@/styles/modules/form.module.css";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm(){
    const [status, setStatus] = useState("form");
    function Form(){
        return (
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label} htmlFor="frm-email">Email</label>
                    <input className={styles.input} id="frm-email" type="email" name="email" autoComplete="email" required/>

                    <label className={styles.label} htmlFor="frm-phone">Phone</label>
                    <input className={styles.input} id="frm-phone" type="tel" name="phone" autoComplete="tel" required/>

                    <label className={styles.label} htmlFor="frm-name">Name</label>
                    <input className={styles.input} id="frm-first" type="text" name="name" autoComplete="name" required />

                    <label className={styles.label} htmlFor="frm-message">Message</label>
                    <textarea className={styles.input} id="frm-message" rows="6" name="message"></textarea>

                    <div></div>
                    <button className={styles.submit} type="submit">Submit</button>
                </form>
            </div>
        )
    }

    function Sending(){
        return (
            <div className={styles.container}>
                <h1>Sending...</h1>
                <FontAwesomeIcon className={styles.icon} icon={faSpinner} spin/>
            </div>
        )
    }

    function Error(){
        return (
            <div className={styles.container}>
                <h1>Something Went Wrong!</h1>
                <FontAwesomeIcon className={styles.icon} icon={faXmark} />
                <p>Please try again later</p>
                <button className={styles.submit} onClick={() => setStatus("form")}>Try Again</button>
            </div>
        )
    }


    function Success(){
        return (
            <div className={styles.container}>
                <h1>Success!</h1>
                <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                <p>I'll be in touch soon!</p>
            </div>
        )
    }

    function Body(){
        if (status === "form") {
            return <Form/>
        } else if (status === "sending") {
            return <Sending/>
        } else if (status === "success") {
            return <Success/>
        } else {
            return <Error/>
        }
    }

    async function handleSubmit(e) {
        setStatus("sending");
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
            let formDataObject = Object.fromEntries(data.entries());
            let formJson = JSON.stringify(formDataObject);
            const response = await fetch('/api/contact', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: formJson
            });
            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            setStatus("success");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <div className={styles.wrapper}>
            <Body/>
        </div>
    );
}