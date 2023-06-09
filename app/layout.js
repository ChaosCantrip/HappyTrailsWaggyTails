import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import "@/styles/global/master.css";
import Header from "@/app/header";
import Footer from "@/app/footer";
import {Analytics} from "@vercel/analytics/react";

export const metadata = {
    title: {
        template: "HappyTrailsWaggyTails | %s",
        default: "HappyTrailsWaggyTails"
    }
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <body>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <Analytics />
        </body>
    </html>
  )
}
