import layout from "@/styles/modules/layout.module.css";

export const metadata = {
    title: "Contact"
}

export default function ContactPage() {
    return (
        <div className={layout.page}>
            <div className={layout.double}>
                <h1>Contact Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet, architecto aspernatur atque blanditiis
                    dicta doloribus earum excepturi exercitationem labore maxime omnis quisquam, quod sint soluta sunt ullam
                    velit voluptatum.</p>
            </div>
        </div>
    )
}