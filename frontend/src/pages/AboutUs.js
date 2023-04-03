import React from "react";
import Layout from "../components/layout";
import "../styles/AboutUs.css";
import activeClientImg from "../images/activeClientImg.png";
import employeesImg from "../images/employeesImg.png";
import boss_employee_Img from "../images/boss-and-employee-Img.png";
import ideate_Img from "../images/ideate-img.png";
import innovate_Img from "../images/innovate-img.png";
import implement_Img from "../images/implement-img.png";
import mission_Img from "../images/mission-img.png";
import FooterDetails from "../components/FooterDetails";
import Flip from "react-reveal/Flip";
import Seo from "../components/seo";

const AboutUs = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo seo={{ metaTitle: "About",metaDescription:"Our Leadership - Our History - Facts and Stats - ..." }} />
      <>
        <div className="hero-caintanier1">
          <h1>About Us</h1>
          {/* <img src={AboutUsBackgroundImg}/> */}
        </div>
        <div className="hero-caintanier2">
          <div className="hero-wrapper2">
            <div className="hero-wrapper2-leftSide">
              <div className="left-side">
                <img alt="client" src={activeClientImg} />
              </div>

              <div className="inner-left-side">
                <h1>150+</h1>
                <p>Active Clients</p>
              </div>
            </div>
            <div className="hero-wrapper2-leftSide">
              <div className="left-side">
                <img alt="employee" src={employeesImg} />
              </div>
              <div className="inner-left-side1">
                <h1>50+</h1>
                <p>Employees</p>
              </div>
            </div>
            <div className="hero-wrapper2-leftSide">
              <div className="left-side">
                <img alt="client" src={activeClientImg} />
              </div>
              <div className="inner-left-side">
                <h1>200+</h1>
                <p>End To End Project</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main-section1">
          <div className="main-section1-leftSide">
            <h1>
              About <span>Metaverse</span>
            </h1>
            <p>
              Metaverse is the future of digital, resource and process
              optimization. Metaverse automates processes to assist
              organizations in making the most use of their resources. We have
              been in the industry for over 1 year and have been dedicated to
              providing a wide range of Technological, Digital, and Brand
              consulting solutions to businesses of all sizes. We strive to
              exceed our clients' expectations and requirements every day. Our
              beliefs inspire everything we do and every choice we make.
              Metaverse delivers best-in-class business solutions via the use of
              technology and is provided by the team of highly skilled
              professionals. Metaverse is a leading a technology company that
              helps organizations reimagine themselves for the digital world.
              Metaverse offers digital advancement solutions and business
              information to encourage excellence and deliver unparalleled
              outcomes. Metaverse uses next-generation technologies to assist
              firms with global business transformations. Metaverse is built on
              customer centricity, which is deep-rooted in the values of the
              company.
            </p>
          </div>
          <div className="main-section1-rightSide">
            <img alt="boss" src={boss_employee_Img} />
          </div>
        </div>

        <div className="main-section2">
          <h1>Problems We’ll Help You Solve</h1>
          <div className="main-section2-divs">
            <Flip left>
              <div className="main-section2-leftDiv">
                <img alt="ideate" src={ideate_Img} />
                <h1>IDEATE</h1>
                <p>
                  Ideation is what makes the foundation for creating something
                  new and letting the world let go of the conventionalities.
                </p>
              </div>
            </Flip>
            <Flip left>
              <div className="main-section2-midDiv">
                <img alt="innovate" src={innovate_Img} />
                <h1>INNOVATE</h1>
                <p>
                  Ideation is what makes the foundation for creating something
                  new and letting the world let go of the conventionalities.
                </p>
              </div>
            </Flip>
            <Flip left>
              <div className="main-section2-rightDiv">
                <img alt="implement" src={implement_Img} />
                <h1>IMPLEMENT</h1>
                <p>
                  Ideation is what makes the foundation for creating something
                  new and letting the world let go of the conventionalities.
                </p>
              </div>
            </Flip>
          </div>
        </div>

        <div className="main-section3">
          <div className="left-side">
            <div className="top-section">
              <div>
                <h1>
                  Our <span>Vision</span>{" "}
                </h1>
              </div>

              <p>
                We helps businesses in optimising the resources by automating
                the processes.
              </p>
            </div>
            <div className="top-section bottom-section">
              <div>
                <h1>
                  Our <span>Mission</span>{" "}
                </h1>
              </div>

              <p>
                Our Mission is to enable the organizations to achieve the
                success by optimising the processes.
              </p>
            </div>
          </div>
          <div className="right-side">
            <img alt="missing" src={mission_Img} />
          </div>
        </div>

        <div className="main-section4">
          <h1>We are glad to see you here!</h1>
          <p>
            Before getting started, let’s get to know us. We are an innovative,
            technology-driven, and research-oriented automation and IT solution
            provider who understands the complexities of running a modern
            enterprise. We are Metaverse, just like the computing instrument. So
            everything we deliver is the outcome of our data-intensive insights
            coupled with a rich experience of 1 year.
          </p>
        </div>

        <div className=""></div>

        <FooterDetails></FooterDetails>
      </>
    </Layout>
  );
};

export default AboutUs;
