import { Zen_Maru_Gothic } from '@next/font/google';
import "../styles/globals.css";

const zen = Zen_Maru_Gothic({ weight: "400" })


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head />
      <body>
        <main className={zen.className}>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout