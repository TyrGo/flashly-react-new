import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

// Component 
export const Layout = () => {
   return (
      <>
      <Navbar />
         <Outlet />
      </>

   )
}