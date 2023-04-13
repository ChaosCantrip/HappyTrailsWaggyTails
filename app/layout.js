import "@/styles/global/master.css";

export const metadata = {
    title: {
        template: "HappyTrailsWaggyTails | %s",
        default: "HappyTrailsWaggyTails"
    }
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
