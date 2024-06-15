import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import "@/styles/global/master.css";
import Header from "@/app/header";
import Footer from "@/app/footer";

export const metadata = {
    title: {
        template: "HappyTrailsWaggyTails | %s",
        default: "HappyTrailsWaggyTails"
    }
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <head>
            <script defer src="https://umami.chaoscantrip.com/script.js"
                    data-website-id="f261df5d-e44a-40b6-943e-d4208c8d2c8f"></script>
        </head>
        <body>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
