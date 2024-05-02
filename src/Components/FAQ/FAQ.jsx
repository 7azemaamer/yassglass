import React from "react"
import Style from "./FAQ.module.css"
import Accordion from "react-bootstrap/Accordion"

export default function Faq() {
  const content = [
    {
      ekey: 0,
      title: "What is yassin glass?",
      body: `yassin glass is a tempered glass installation company and
                  was established by Engineer Mahmoud Yassin in 2005. We
                  specialize in 10mm and 12mm tempered glass for various
                  applications such as glass facades, glass stairs, shower
                  cabins, etc.`,
    },
    {
      ekey: 1,
      title: "What types of glass do you work with?",
      body: `We work with different kinds of tempered glass including:
                  (1) flat tempered glass
                  (2) curved tempered glass
                  (3) double tempered glass (triplex)`,
    },
    {
      ekey: 2,
      title: "Is tempered glass safe?",
      body: `Tempered glass is designed to fail safely. When shattered,
                  it breaks into small, fragmented pieces rather than large
                  shards, reducing the risk of injury. There are safety standards
                  in place for products using tempered glass.`,
    },
    {
      ekey: 3,
      title: "What is your company's previous work?",
      body: `We have worked with many important clients in Egypt. Our
                  portfolio includes projects with significant clients.`,
    },
    {
      ekey: 4,
      title: "What can you do with tempered glass?",
      body: `Tempered glass is used in many industries and for various
                  applications including shower cabins, storefronts, sliding
                  doors, windows, etc.`,
    },
    {
      ekey: 5,
      title: "What differentiates you from other companies?",
      body: `We have one of the best installation teams in the industry
                  and we guarantee the best quality in the market to our clients.`,
    },
    {
      ekey: 6,
      title: "When was the company established?",
      body: `The company was established in 2005 by Engineer Mahmoud Yassin.`,
    },
    {
      ekey: 7,
      title: "Is there a guarantee for the glass?",
      body: `No, there is no guarantee for the glass itself. However, we
                  guarantee the safety of the glass during installation, and any
                  problems that occur on-site are our responsibility.`,
    },
    {
      ekey: 8,
      title: "How do you set the price of the project?",
      body: `We determine the price based on several factors including:
                  (1) the size of the project
                  (2) the location of the project
                  (3) the size of the glass
                  (4) the type of glass.`,
    },
    {
      ekey: 9,
      title: "Do you design the project before installation?",
      body: `Yes, we create a 2D design for the project and present it to
                  the client for approval before manufacturing the glass. The
                  designs are then sent to the factory.`,
    },
    {
      ekey: 10,
      title: "Can tempered glass be cut after manufacturing?",
      body: `No, tempered glass cannot be cut after it has been manufactured.`,
    },
    {
      ekey: 11,
      title: "Can modifications be made to the glass after installation?",
      body: `No, modifications cannot be made to the glass after it has been installed.`,
    },
    {
      ekey: 12,
      title: "What is tempered glass?",
      body: `Tempered glass is four times stronger than annealed glass.
                  It is created by heating the glass to over 1000 degrees F and
                  then rapidly cooling it to lock the surface in compression
                  and the core in tension. When broken, tempered glass fractures
                  into small, less sharp fragments, making it safer than other
                  types of glass.`,
    },
    {
      ekey: 13,
      title: "Is there a guarantee for the glass hardware?",
      body: `Yes, we guarantee our glass hardware for 6 months after installation.`,
    },
    {
      ekey: 14,
      title: "How can we contact you?",
      body: `You can reach us by phone or email.
                  Phone: 01098994460, 01060908907
                  Email: manager@yassinglass.com`,
    },
    {
      ekey: 15,
      title: "Where can you find us?",
      body: `Our physical location is in 10th of Ramadan. You can also
                  follow us on social media for updates.`,
    },
    {
      ekey: 16,
      title: "What is your mission in Yassin Glass?",
      body: `In Yassin Glass, our priority is the quality of our products
                  and delivering top-notch designs for our glass and decorations.
                  We guarantee that our work will satisfy your needs and quality
                  standards, and we provide warranties against any manufacturing defects.`,
    },
    {
      ekey: 17,
      title: "Why choose Yassin Glass?",
      body: `We have one of the most well-trained technician teams in the
                  country, managed by highly experienced engineers with over 25
                  years of experience in the industry.`,
    },
  ]

  return (
    <>
      <section className={Style.faq}>
        <div className={`${Style.overlay} `}>
          <div className={`${Style.container} `}>
            <Accordion defaultActiveKey="0">
              {content.map((item, index) => {
                return (
                  <Accordion.Item
                    key={`${index}zicod`}
                    eventKey={`${item.ekey}`}
                  >
                    <Accordion.Header className={Style.title}>
                      {item.title}
                    </Accordion.Header>
                    <Accordion.Body className={Style.tbody}>
                      {item.body}
                    </Accordion.Body>
                  </Accordion.Item>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
