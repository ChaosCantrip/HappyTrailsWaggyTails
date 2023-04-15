import layout from "@/styles/modules/layout.module.css";
import MontyGallery from "@/app/about/MontyGallery";

export const metadata = {
        title: "About"
}

export default function AboutPage() {
    return (
        <div className={layout.page}>
            <div>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet, architecto aspernatur atque blanditiis
                    dicta doloribus earum excepturi exercitationem labore maxime omnis quisquam, quod sint soluta sunt ullam
                    velit voluptatum.</p>
                <section>
                    <p>Content</p>
                    <p>To</p>
                    <p>Push</p>
                    <p>Footer</p>
                    <p>Down</p>
                </section>
                <section>
                    <p>Content</p>
                    <p>To</p>
                    <p>Push</p>
                    <p>Footer</p>
                    <p>Down</p>
                </section>
                <section>
                    <p>Content</p>
                    <p>To</p>
                    <p>Push</p>
                    <p>Footer</p>
                    <p>Down</p>
                </section>
            </div>
            <div>
                <MontyGallery/>
            </div>
        </div>
    )
}