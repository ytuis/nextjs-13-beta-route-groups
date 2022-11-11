import { Header } from "../Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user = {
    name: "Cat",
    image: "/cat.png",
    role: "USER"
  }

  return (
    <>
      <Header user={user} />
      {children}
    </>
  )
}

export default Layout