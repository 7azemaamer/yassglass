import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Style from "./Home.module.css"
import allInServ from "../../Assets/Images/all-in-one-services.png"

import serv1 from "../../Assets/Images/serv-1.jpeg"
import serv2 from "../../Assets/Images/serv-2.jpeg"
import serv3 from "../../Assets/Images/serv-3.jpeg"
import serv31 from "../../Assets/Images/serv-3-1.jpeg"
import serv4 from "../../Assets/Images/serv-4.jpeg"

import artHouse from "../../Assets/Images/logos/art-house.png"
import golds from "../../Assets/Images/logos/golds.png"
import hyde from "../../Assets/Images/logos/hyde-park.png"
import mountain from "../../Assets/Images/logos/mountain-view.png"
import pepsi from "../../Assets/Images/logos/pepsi.png"

import img1 from "../../Assets/Images/loop1/789 (35) 2.png"
import img2 from "../../Assets/Images/loop1/789 (70) 2.png"
import img3 from "../../Assets/Images/loop1/DSC_0067 2.png"
import img4 from "../../Assets/Images/loop1/DSC_0103 3.png"
import img5 from "../../Assets/Images/loop2/1 517827199.png"
import img6 from "../../Assets/Images/loop2/ET3A9696-HDR (1) 4.png"
import img7 from "../../Assets/Images/loop2/Glass facades 2 1.png"
import img8 from "../../Assets/Images/loop2/WhatsApp Image 2020-12-02 at 6.59 1.png"

import cabin1 from "../../Assets/Images/cabins/123 (28) 1.png"
import cabin2 from "../../Assets/Images/cabins/2 3.png"
import cabin3 from "../../Assets/Images/cabins/3 61.png"
import cabin4 from "../../Assets/Images/cabins/4 6.png"
import cabin5 from "../../Assets/Images/cabins/cabin 1 1.png"
import cabin6 from "../../Assets/Images/cabins/one.png"

import m1 from "../../Assets/Images/Mirrors/m1.jpeg"
import m2 from "../../Assets/Images/Mirrors/m2.png"
import m3 from "../../Assets/Images/Mirrors/m3.png"
import m4 from "../../Assets/Images/Mirrors/m4.png"
import m5 from "../../Assets/Images/Mirrors/m5.png"

import g1 from "../../Assets/Images/glass/g1.png"
import g2 from "../../Assets/Images/glass/g2.png"
import g3 from "../../Assets/Images/glass/g3.png"
import g4 from "../../Assets/Images/glass/g4.png"

import { Link } from "react-router-dom"

export default function Home() {
  const settings = {
    infinite: true,
    dots: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const settings2 = {
    ...settings,
    rtl: true,
  }
  const loop1 = [img1, img2, img3, img4]
  const loop2 = [img5, img6, img7, img8]
  const mirros = [m1, m2, m3, m4, m5]
  const cabins = [cabin1, cabin2, cabin3, cabin4, cabin5, cabin6]
  const glass = [g1, g2, g3, g4]

  return (
    <div className="overflow-hidden">
      {/* Home Section */}
      <section id="xhome" className={Style.homeo}>
        <div className={Style.background}></div>
        <div className={`${Style.overlay} d-flex flex-column`}>
          <div
            className={` d-flex flex-column justify-content-end w-100 text-white`}
          >
            <div className={Style.top}>
              <h2 className={`${Style.title}`}>
                Elevate Your View, Elevate Your Space
              </h2>
              <p className={`${Style.description}`}>
                At Yassin Glass, our Mission Crafting Stunning Spaces with
                Impeccable Glass Installations: Your Vision, Our Expertise
              </p>
            </div>
            <div className={`${Style.bottom}  d-flex  me-lg-5 pe-lg-5`}>
              <Link
                to={"/contact-us"}
                className={`btn-main ${Style["btn-send"]}`}
              >
                Send message
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className={`${Style["services"]} overflow-hidden`}>
        <div className={`${Style["services-overlay"]} overflow-hidden row `}>
          <div className="col-8 d-flex align-items-center">
            <div className={`${Style.text}`}>
              <h3>Our services in Yassin Glass</h3>
              <p>
                We provide in yassin glass differn services like glass facdes
                shower cabins, mirrors and glass handrail.
              </p>
            </div>
          </div>
          <div className="col-4">
            <img src={allInServ} alt="bg background for services section" />
          </div>
        </div>
      </section>
      <div className="container">
        <section className={Style["services-slides"]}>
          <div
            className={`row py-5 mt-5 justify-content-evenly ${Style.tslide}`}
          >
            <div className="col-lg-5 flex d-flex justify-content-center">
              <div className="border rounded-4 d-flex flex-column">
                <img
                  src={serv1}
                  alt="service 1"
                  className={`rounded-4 ${Style["single-image"]}`}
                />
                <div className="d-flex justify-content-between pt-2 pb-5 px-2">
                  <h4>Glass Facades</h4>
                  <a href="#facades" className="btn btn-view">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5  flex d-flex justify-content-center">
              <div className="border rounded-4 d-flex flex-column">
                <img
                  src={serv2}
                  alt="service 2"
                  className={`rounded-4 ${Style["single-image"]}`}
                />
                <div className="d-flex justify-content-between pt-2 pb-5 px-2">
                  <h4>Mirrors</h4>
                  <a href="#mirror" className="btn btn-view">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`row  justify-content-evenly ${Style.tslide}`}>
            <div className="col-lg-5 flex d-flex justify-content-center">
              <div className="border rounded-4 d-flex flex-column">
                <div
                  className={`${Style["single-image"]} overflow-hidden rounded-4`}
                >
                  <img src={serv3} alt="service 3.1" className={`w-50 `} />
                  <img src={serv31} alt="service 3.2" className={`w-50 `} />
                </div>
                <div className="d-flex justify-content-between pt-2 pb-5 px-2">
                  <h4 className="fw-500">Shower cabins</h4>
                  <a href="#shower" className="btn btn-view">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 flex d-flex justify-content-center">
              <div className="border rounded-4 d-flex flex-column">
                <img
                  src={serv4}
                  alt="service 4"
                  className={`rounded-4 ${Style["single-image"]}`}
                />
                <div className="d-flex justify-content-between pt-2 pb-5 px-2">
                  <h4>Glass handrail</h4>
                  <a href="#glass" className="btn btn-view">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* logos Section */}
      <section className={`${Style.logos} py-5 mt-5`}>
        <div className="container">
          <div className="row justify-content-center">
            <h3 className={Style["logo-title"]}>OUR CLIENTS</h3>
          </div>
          <div
            className={`row align-items-center justify-content-content ${Style["logo-row"]}`}
          >
            <div className="col d-flex align-items-center justify-content-center w-100 ">
              <img src={artHouse} alt="Art House" className="w-75" />
            </div>
            <div className="mt-3 col d-flex align-items-center justify-content-center w-100">
              <img src={pepsi} alt="Pepse" className="w-75" />
            </div>
            <div
              className={`mt-3 col d-flex align-items-center justify-content-center w-100 ${Style.hyde}`}
            >
              <img src={hyde} alt="Hyde Park" className="w-75" />
            </div>
            <div className="mt-3 col d-flex align-items-center justify-content-center w-100">
              <img src={golds} alt="Golds Gym" className="w-75" />
            </div>
            <div className="mt-5 col d-flex align-items-center justify-content-center w-100">
              <img src={mountain} alt="Mountain View" className="w-75" />
            </div>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section id="about" className={Style.video}>
        <div className="container py-5">
          <div className="row">
            <div className="col-xl-6  d-flex justify-content-center align-items-center">
              <div
                className={`${Style["vid-btn"]} d-flex justify-content-center align-items-center`}
              >
                <i className="fa-solid fa-circle-play"></i>
              </div>
            </div>
            <div className="col-xl-6 ">
              <div className={Style["vid-text"]}>
                <h3>About Yassin GLASS</h3>
                <p>
                  Yassin glass is a tempered glass installation company and was
                  established by Engineer Mahmoud Yassin in 2005 and we
                  specialized in 10mm and 12mm tempered glass and the glass
                  facades, glass stairs, shower cabins, etc...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={Style.divider}></div>
      {/* Facades Section */}
      <section id="facades" className={`${Style.facades} py-5`}>
        <div className={`${Style.titles}`}>
          <h6>Modern Marvels in Glass Architecture</h6>
          <h3>Our Glass facades</h3>
          <p>Transforming Spaces with Glass Facades</p>
        </div>
        <div className="img-container">
          <Slider {...settings}>
            {loop1.map((image, index) => (
              <ImageSlider key={index} image={image} />
            ))}
          </Slider>
        </div>
        <div className="img-container pt-5 my-2">
          <Slider {...settings2}>
            {loop2.map((image, index) => (
              <div key={index} className="animated-img mx-2">
                <ImageSlider key={index} image={image} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Lines Section */}
      <div id="linez" className="lines d-flex">
        <div className="centered-line"></div>
        <div className="left-line"></div>
        <div className="right-line"></div>
      </div>
      {/* Shower Cabins */}
      <section id="shower" className={`${Style.shower} d-flex flex-column`}>
        <div className="box">
          <h3>Shower cabins</h3>
          <p>
            Elevate Your Daily Ritual: Customized Enclosures for Refreshing
            Showers
          </p>
          <div className="h-line"></div>
        </div>
        <Slider className="pt-5" {...settings}>
          {cabins.map((image, index) => (
            <div key={index} className="animated-img">
              <ImageSlider key={index} index={index} image={image} />
            </div>
          ))}
        </Slider>
      </section>
      {/* Mirrors Sections */}
      <section
        id="mirror"
        className={`${Style.mirros} d-flex flex-column mt-5 pt-5`}
      >
        <div className="box">
          <h3>Mirrors</h3>
          <p>Reflections of Sophistication</p>
          <div className="h-line"></div>
        </div>
        <Slider className="pt-5" {...settings}>
          {mirros.map((image, index) => (
            <div key={index} className="animated-img">
              <ImageSlider key={index} index={index} image={image} />
            </div>
          ))}
        </Slider>
      </section>
      {/* Glass handrail Sections */}
      <section
        id="glass"
        className={`${Style.glass} d-flex flex-column my-5 py-5`}
      >
        <div className="box">
          <h3>Glass handrail</h3>
          <p>Transparent Safety: Modern Solutions for Elevated Spaces</p>
          <div className="h-line"></div>
        </div>
        <Slider className="pt-5" {...settings}>
          {glass.map((image, index) => (
            <div key={index} className="animated-img">
              <ImageSlider key={index} index={index} image={image} />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  )
}
function ImageSlider({ image, index }) {
  return (
    <div className="animated-img d-flex justify-content-center">
      <img src={image} alt={`Slider image ${index}`} />
    </div>
  )
}
