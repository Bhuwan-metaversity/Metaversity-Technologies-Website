import React from "react";
import Layout from "../components/layout";
import "../styles/Services.css";
import nft_hero_bannner from "../images/nft-hero-banner.png";
import nft_development_service from "../images/nft-development-img.png";
import nft_img from "../images/nft-image.png";
import Buttons from "../components/Button/Button";
import uniqness_img from "../images/uniqness-img.png";
import royality_img from "../images/royality-img.png";
import NftToken from "../components/NftTokens/NftToken";
import permanance_img from "../images/permanance-img.png";
import Download_img from "../images/downloiad-img.png";
import { tokenArr, NftServiceArr } from "../components/NftTokens/NftTokenDB"; //importing DB/Arr/data file
import Blog1 from "../images/blog1.png";
import Blog2 from "../images/blog2.png";
import Blog3 from "../images/blog3.png";
import Patners1 from "../images/patner1.png";
import Patners2 from "../images/patner2.png"
import Marquee from "react-fast-marquee";
import Faq from "../components/faq/Faq";
import FooterDetails from "../components/FooterDetails";
import Fade from 'react-reveal/Fade'; 
import Flip from 'react-reveal/Flip';
import Seo from "../components/seo";




const Services = ({location}) => {
  return (
    <>
      <Layout location={location}>
      <Seo seo={{metaTitle:"Services"}} />
   
        <div className="nft-hero-section-container">
          {/* <img src={nft_hero_bannner} /> */}
        </div>
        <div className="nft-development">
          <div className="wraper">
          <Fade left>
            <div className="nft-development-left-side">
              <h1>Growing Popularity of NFT Development Services</h1>
              <h2>
                Metaversity - Your reliable technology partner for NFT token
                development
              </h2>
              <p>
                Metaversity is a world-class NFT development company that is known
                for providing impeccable non-fungible token development services
                to a global clientele. Whether you want to create non-fungible
                token or build an NFT marketplace, Antier has the resources and
                experience to transform your dream into reality. NFT tokens have
                a huge impact within the blockchain world; they are used in
                various fields like digital art, gaming, and more. NFTs
                attributes like uniqueness, indivisibility, ownership, and
                authenticity make them an irresistible choice.
              </p>
            </div>
            </Fade>

            <Fade right>
            <div className="nft-development-right-side">
              <img alt="nftService" src={nft_development_service} />
            </div>
            </Fade>
          </div>
        </div>
        
        <div className="why-to-choose-nft">
          <Fade left>
          <div className="left-side">
            <img alt="nftImg" src={nft_img} />
          </div>
          </Fade>
          <Fade right>
          <div className="right-side">
            <h1>Why Choose a Dedicated NFT Token Development Company?</h1>
            <p>
              Metaversity, the dedicated NFT token development company has experience
              in building top-quality products and providing NFT development
              services over complex algorithms; NFT software development is an
              integral part of our DeFi COE. We harness the DNFT protocol to
              build decentralized non-fungible tokens aligned with different
              business needs. Our NFT developers and subject matter experts work
              together to offer diligently-crafted decentralized non-fungible
              token development services to help you accomplish your business
              goals. Whether you want to tokenize your artwork, video file, or
              any other asset, we offer mission-driven NFT software development
              solutions to effectively cater to your needs.
            </p>
          </div>
          </Fade>
        </div>
        {/* <div className="why-to-choose-nft-btn">
        <a href="https://wa.me/+917011314162">  <Buttons name="CONNECT ON WHATSAPP"></Buttons></a>
        
        </div> */}
        <br /> <br />
        <div className="ownership-of-digital">
          <h1>
            Ensuring Irrefutable Ownership of Digital Assets with NFT
            Development
          </h1>
          <p>
            Metaversity is a premium NFT development company with a strong foundation
            in decentralized apps. We help our clients advance their business
            with our premium NFT token development services. Our NFT developers
            incorporate the latest features and functionalities into the
            solutions to ensure clients get the best.
          </p>

          
          <div className="cards">
          <Flip left>
            <div className="card">
          
              <img alt="uniqness" src={uniqness_img} />
              <h1>Uniqueness</h1>
              <div className="inner-card">
                <p>
                  Create NFT token with unique product identity and
                  authentication; NFTs are great tools to challenge the
                  duplication of products.
                </p>
              </div>
         
            </div>
            </Flip>
           
            <Flip left>
            <div className="card">
              <img alt="royality" src={royality_img} />
              <h1>Resale and Royalty</h1>
              <p>
                Create non-fungible token to enable 100% transparency in the
                product sale process. NFT development allows to track the
                product lifecycle with utmost granularity.
              </p>
            </div>
            </Flip>
            <Flip right>
            <div className="card">
              <img alt="permanance" src={permanance_img} />
              <h1>Permanence</h1>
              <p>
                Given that NFT development takes place on a blockchain platform,
                the high security code makes the certification indestructible
                and timeless.
              </p>
            </div>
            </Flip>
          </div>
           

        </div>
       
        <div className="token-development">
        <Fade right>
          <h1>NFT Token Development on Leading Blockchain Networks</h1>
          <p className="p1">
            We provide non-fungible token development services on any of your
            desired blockchains
          </p>
        
          <div className="cardHolder">
      
            {tokenArr.map((e) => {
              console.log(e.img);

              return (
      
                <div className="card1">
                  <NftToken name={e.name} img={e.img} />
                </div>
                
              );
            })}
             
          </div>
        
          <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="https://wa.me/+917011314162"> <Buttons name="CONNECT ON WHATSAPP"></Buttons> </a>
          </div>
          </Fade>
  
        </div>
      
        <div className="nft-develoipment-process">
          <h1>Our NFT Development Process</h1>
          <p>
            At Metaversity, we take immense pride in offering top-notch NFT token
            development services. We ensure that clients have the best
            experience with us from the very beginning.
          </p>
          <div className="mid">
            <div className="left">
              <div className="left-top">
                <h2>01. Initial Meet</h2>
                <p>
                  Our experts understand your non-fungible token development
                  needs, and your future goals and indulge in brainstorming
                  sessions to provide you with the best solution.
                </p>
              </div>

              <div className="left-bottom">
                <h2>03. Development</h2>
                <p>
                  Metaversity has over 500 subject matter experts to give you the
                  best non-fungible token development services. Our NFT
                  developers ensure that all your needs are met.
                </p>
              </div>
            </div>
            <div className="middle">
              <img alt="download" src={Download_img} />
            </div>
            <div className="right">
              <div className="right-top">
                <h4>02. Blueprint</h4>
                <p>
                  Our experts understand your non-fungible token development
                  needs, and your future goals and indulge in brainstorming
                  sessions to provide you with the best solution.
                </p>
              </div>

              <div className="right-bottom">
                <h5>04. Quality Assurance</h5>
                <p>
                  For world-class NFT software development services, Antier
                  emphasizes quality. Our quality assurance and testing teams
                  work tirelessly to resolve any bugs in the NFT software
                  development.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <h6>05. Launch and Maintenance</h6>

            <p>
              Here, with your permission, our NFT developers launch your product
              or software into the market. Metaversity takes care of maintenance as
              well so that you don’t have to worry about anything.
            </p>
          </div>

          <div className="nft-development-button">
          <a href="https://wa.me/+917011314162"> <Buttons name="TALK TO OUR EXPERTS"></Buttons> </a>
          </div>
        </div>
        
        <div className="nft-development-service">
        <Fade left>
          <h1>NFT Development Services</h1>
          <p className="p1">
            Metaversity, the top NFT development company has experience and expertise
            in building products over complex algorithms.
          </p>
        

          <div className="nft-service-card">
            {NftServiceArr.map((e) => {
              console.log(e.img);

              return (
                <div className="nft-card">
                  <NftToken name={e.name} img={e.img} />
                </div>
              );
            })}
          </div>

          <a href="https://wa.me/+917011314162"> <Buttons name="TALK TO OUR EXPERTS"></Buttons> </a>
          </Fade>
        </div>
      

        <div className="our-patner">
          <h1>Our Partners</h1>

          <Marquee direction="left" style={{ height: "auto" }}>
            {" "}
            <img alt="patners" src={Patners1} style={{ height: "100px" }} />{" "}
            <img alt="patners" src={Patners1} style={{ height: "100px" }} />
          </Marquee>
          <Marquee direction="right">
            <img alt="patners" src={Patners2} style={{ height: "100px" }} />
            <img alt="patners" src={Patners2} style={{ height: "100px" }} />
          </Marquee>
        </div>



        <div className="our-blogs">

          <h1>A Glance of Our Blogs</h1>
          <div className="Blogs">
            <div className="Blog1">
   
              <img alt="blog" src={Blog1} />
              <p>
                {" "}
                Unlocking the Potential Of Web 3.0 With An Expert NFT
                Development Company
              </p>
           
            </div>
           
            <div className="Blog2">
              <img alt="blog" src={Blog2} />
              <p>Features of the Top NFT Music Marketplace</p>
            </div>
            <div className="Blog3">
              <img alt="blog" src={Blog3} />
              <p>The Monetization and Real-World Applications of NFTs</p>
            </div>
          </div>
       
        </div>



        <div className="asked-question">
          <h1>Frequently Asked Questions</h1>
          <Faq />
        </div>
        <FooterDetails></FooterDetails>
      </Layout>
    </>
  );
};

export default Services;
