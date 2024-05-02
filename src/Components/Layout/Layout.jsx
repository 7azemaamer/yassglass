import React from "react"
import Style from "./Layout.module.css"
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Layout() {
  return (
    <>
      <Header />
      <div className=" w-5/6 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
