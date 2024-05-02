import React from "react"
import Style from "./ContactUS.module.css"

export default function ContactUs() {
  return (
    <section className={`${Style.contact} overflow-hidden`}>
      <div className="row">
        <div className="col-xl-3 col-md-3 d-flex flex-column gap-2 justify-content-start">
          <div className={Style.box}>
            <div className={Style.icon}>
              <i className="fa-solid fa-phone"></i>
            </div>
            <h5> Call us</h5>
            <p>+20 106 090 8907</p>
          </div>
          <div className={`${Style.box}`}>
            <div className={Style.icon}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h5> Message Us</h5>
            <p>ysglassco@gmail.com</p>
          </div>
        </div>
        <div className={`col-xl-8 col-md-8 ${Style["form-wrapper"]} ps-lg-5`}>
          <form
            className={Style.form}
            action="https://formsubmit.co/ysglassco@gmail.com"
            method="POST"
          >
            <div className={`row flex-column  gap-3`}>
              <div className="col">
                <input
                  className={Style.input}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  className={Style.input}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col">
                <input
                  className={Style.input}
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </div>
              <div className="col">
                <textarea
                  placeholder="Comments"
                  className={Style.textarea}
                  name="textarea"
                />
              </div>
              <div className="col d-flex justify-content-center">
                <button className={Style.button} type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-1 col-md-1 d-flex justify-content-center align-items-center">
          <div
            className={` d-flex align-items-center ${Style["social-media"]}`}
          >
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
      </div>
    </section>
  )
}
