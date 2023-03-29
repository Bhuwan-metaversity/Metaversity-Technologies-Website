import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/contact.css";
import FooterDetails from "../components/FooterDetails";
import locationOfMetaversity from "../images/locationOfMetaversity.png";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import ContactusForm from "../components/ConrtactUsForm/contactusForm";
import Seo from "../components/seo";



const contactUs = ({location}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const { allStrapiArticle } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ServiceName
          slug
          id
        }
      }
    }
  `);

  return (
    <>
      <Layout location={location}>
      <Seo seo={{metaTitle:"Contact"}} />
        <div className="contact-caintainer">
          <div className="header-contact-wrapper">
            <div className="contact-hero-section">
              {/* <img src={img} /> */}
              <h1>Contact Us</h1>

              <div className="contact-arrow-line"></div>
              <p>
                We Are Happy To Be Part Of Your new Beginning and excited about
                walking <br /> through the beautiful journey together!
              </p>
            </div>
          </div>

 

         <ContactusForm/>

          <div className="footer-contact-caintanier">
            <div className="footer-section1">
              {/* <img src={teamImg}></img> */}
              <div className="inner-footer-section1">
                <p>
                  Hire <span style={{ color: "#FBB03B" }}>ON-Demand</span>{" "}
                  project developers & turn{" "}
                </p>
                <p>
                  YOUR IDEA INTO{" "}
                  <span style={{ color: "#FBB03B" }}>REALITY</span>...
                </p>

                <Link to="/careers">
                  {" "}
                  <button>Explore More</button>
                </Link>
              </div>
            </div>

            <div className="footer-section2">
              <img src={locationOfMetaversity} alt="" />
              <a href="https://goo.gl/maps/DNJg6vdHCEk1HvqZ6">
                <button>View More</button>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="res_fotter">
          <FooterDetails></FooterDetails>
        </div>
      </Layout>
    </>
  );
};

export default contactUs;
