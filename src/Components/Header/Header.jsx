import React from "react"
import Style from "./Header.module.css"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import logo from "../../Assets/Images/logo.png"

export default function Header() {
  return (
    <Navbar sticky="top" expand="lg" className=" bg-white border-bottom">
      <Container>
        <Navbar.Brand className="bg-white" href="/#home">
          <div className="w-25">
            <img src={logo} alt="YassinGlass" className="w-50" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Link className="nav-link" to={"/#xhome"}>
              Home
            </Link>
            <a className="nav-link" href="/#about">
              About
            </a>
            <Link className="nav-link" to={"/FAQs"}>
              FAQs
            </Link>
            <Link className="nav-link btn-main" to={"/contact-us"}>
              Contacts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
