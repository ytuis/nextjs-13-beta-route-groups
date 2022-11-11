import { Header } from "../Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user = {
    name: "Bear",
    image: "/bear.png"
  }
  return (
    <>
      <Header user={user} />
      {children}
    </>
  )
}

export default Layout