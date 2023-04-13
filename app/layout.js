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
        <body>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    </html>
  )
}
