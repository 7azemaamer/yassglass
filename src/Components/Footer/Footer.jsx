import React from "react"
import Style from "./Footer.module.css"
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <>
      <footer>
        <div className={`row overflow-hidden ${Style.foot}`}>
          <div className="d-flex justify-content-between">
            <div className={`${Style.left} d-flex flex-column `}>
              <div className={`${Style["single-contact"]} d-flex `}>
                <i className="fa-solid fa-phone"></i>
                <div className="d-felx flex-column">
                  <h5>Call us</h5>
                  <p>+20 106 090 890</p>
                </div>
              </div>
              <div className={`${Style["single-contact"]} d-flex `}>
                <i className="fa-solid fa-envelope "></i>
                <div className="d-felx flex-column ">
                  <h5>Our Email</h5>
                  <p>ysglassco@gmail.com</p>
                </div>
              </div>
              <div className={Style["social-media"]}>
                <a href="https://www.facebook.com/YassinGlass1">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/yassinglass101/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com/YassinGlass">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/yassin-glass-311b31234/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className={`${Style.right} d-flex justify-content-center`}>
              <div className={`${Style.overlay}`}></div>
              <Link to={`/contact-us`} className={`${Style.sendButton}`}>
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
