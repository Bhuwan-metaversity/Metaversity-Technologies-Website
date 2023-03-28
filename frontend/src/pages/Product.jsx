import React from "react";
import Layout from "../components/layout";
import FooterDetails from "../components/FooterDetails";
import "../styles/Product.css";
import icon1 from "../icon/icon1.png";
import icon2 from "../icon/icon2.png";
import icon3 from "../icon/icon3.png";
import icon4 from "../icon/icon4.png";
import icon5 from "../icon/icon5.png";
import icon6 from "../icon/icon6.png";
import icon7 from "../icon/icon7.png";
import icon8 from "../icon/icon8.png";
import icon10 from "../icon/icon10.png";
import icon11 from "../icon/icon11.png";
import icon12 from "../icon/icon12.png";
import PrincipalImg from "../images/productPageImg/principal-img.png";
import BusinessImg from "../images/productPageImg/business-img.png";
import Wallet_img from "../images/productPageImg/wallet-video.mp4";
import Thetar_doller from "../images/productPageImg/Thetar_doller.png";
import Horse_coin_img from "../images/productPageImg/horse_coin_img.png";
import Metaversoity_Logo from "../images/productPageImg/metaversity-logo.png";
import Bnb_icon from "../images/productPageImg/bnb-icon.png";
import Solana_icon from "../images/productPageImg/Solana_icon.png";
import Bitcoin_icon from "../images/productPageImg/bitcoin_icon.png";
import Caradano_icon from "../images/productPageImg/Caradano_icon.png";
import HorseSwap_icon from "../images/productPageImg/horseSwap_icon.png";
import Fancoin_icon from "../images/productPageImg/fancoin-icon.png";
import Matic_icon from "../images/productPageImg/Matic_icon.png";
import Eth_icon from "../images/productPageImg/eth-icon.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "../components/Button/Button";
import { Link } from "gatsby";
import RequestCallButton from "../components/requestCallButton";
import Fade from 'react-reveal/Fade'; 
import Seo from "../components/seo";


const Product = ({location}) => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
  };

  return (
    <Layout location={location}>
      <Seo seo={{metaTitle:"Product"}} />
      <div className="wallet-hero-section">
      <Fade left>
        <div className="hero-left-side">
          <h1>Cryptocurrency Wallet Development Company</h1>
          <p>
            Be a part of the evolving cryptocurrency wallet development segment
            integrated with smart contract functionality, cross-platform
            compatibility & top-tier security. Our crypto wallet development
            solutions help users enjoy transactions in a speedier & secure
            environment.
          </p>
          <div className="hero-left-btn">
            <RequestCallButton />

            <Link to="../Services">
              <Button name="View Live Demo"></Button>
            </Link>
          </div>
        </div>
        </Fade>
        <Fade right>
        <div className="hero-right-side">
          <video
            poster=""
            autoplay="1"
            loop="1"
            muted="1"
            width=""
            height=""
            style={{ maxWidth: "100%" }}
          >
            <source type="video/mp4" src={Wallet_img} />
          </video>
        </div>
        </Fade>
      </div>

      <div className="hero-slider-token">
        <Slider {...settings}>
          <img src={icon1} />
          <img src={icon2} />
          <img src={icon3} />
          <img src={icon4} />
          <img src={icon5} />
          <img src={icon6} />
          <img src={icon7} />
          <img src={icon8} />
          <img src={icon10} />
          <img src={icon11} />
          <img src={icon12} />
        </Slider>
      </div>

      <div className="Principles">
      <Fade left>
        <div className="principes-content">
          <h1>Principles that build our culture and trust</h1>
          <p>
            We value ideas that are inspired, intelligent, and creative. We are
            stronger when working as a unit. To provide future value, we look
            beyond the present. With speed, attention, and an open mind, we
            challenge conventional development methods.
          </p>
          <Link to="../AboutUs">
            <button className="product-page-button">More About Us</button>
          </Link>
        </div>
        /</Fade>
        <Fade right>
        <div className="principleImg">
          <img src={PrincipalImg} />
        </div>
        </Fade>
      </div>

      <div className="business">
      <Fade left>
        <div className="business-img">
          <img src={BusinessImg} />
        </div>
        </Fade>
        <Fade right>
        <div className="business-content">
          <h2>What We Do?</h2>
          <h1>Your business needs us</h1>
          <p>
            We respect your business vision and will provide you with top-notch
            software for it. We offer simple answers to challenging business
            problems. We work to advance your company through strategy, design,
            and cutting-edge technology.
          </p>
          <Link to="../AboutUs">
            {" "}
            <button className="product-page-button">More About Us</button>
          </Link>
        </div>
        </Fade>
      </div>

      <div className="blockchain-technology">
      <Fade left>
        <div className="blokchain-technology-content">
          <h1>We Aim for Excellence in Blockchain Technology</h1>
          <p>
            You will explore and comprehend the possibilities of tailored
            Blockchain solutions for your company with our combined industry
            experience, knowledge, and technological competence. High-end,
            technologically advanced solutions created by our blockchain experts
            can take your business to new heights.
          </p>
          <Link to="../Services">
            <button className="product-page-button">Lets Start</button>
          </Link>
        </div>
        </Fade>
        <Fade right>
        <div className="blockchain-technology-img">
          <section class="main-container">
            <div class="main">
              <div class="big-circle">
                <div class="icon-block">
                  <img src={HorseSwap_icon} alt="web design icon" />
                </div>

                <div class="icon-block">
                  <img src={Eth_icon} alt="game design icon" />
                </div>
                <div class="icon-block">
                  <img src={Bitcoin_icon} alt="game dev icon" />
                </div>
                <div class="icon-block">
                  <img src={Caradano_icon} alt="ui-ux icon" />
                </div>
              </div>
              <div class="big-circle big-circle1">
                <div class="icon-block icon-block1">
                  <img src={Solana_icon} alt="web design icon" />
                </div>
                <div class="icon-block icon-block1">
                  <img src={Horse_coin_img} alt="web design icon" />
                </div>
                <div class="icon-block icon-block1">
                  <img src={Thetar_doller} alt="web design icon" />
                </div>
                <div class="icon-block icon-block1">
                  <img src={Bnb_icon} alt="game design icon" />
                </div>
              </div>
              <div class="circle">
                <div class="icon-block">
                  <img src={Matic_icon} alt="app icon" />
                </div>
                <div class="icon-block">
                  <img
                    src="https://www.infograins.com/static/media/kindpng.c40e6780b0cd11225730.png"
                    alt="blockchain icon"
                  />
                </div>
                <div class="icon-block">
                  <img
                    src="https://www.infograins.com/static/media/1%20(5).c322e62c53819514dedd.png"
                    alt="ar-vr icon"
                  />
                </div>
                <div class="icon-block">
                  <img src={Fancoin_icon} alt="artificial intelligence icon" />
                </div>
              </div>
              <div class="center-logo">
                <img src={Metaversoity_Logo} alt="logo" />
              </div>
            </div>
          </section>
        </div>
        </Fade>
      </div>

      <div className="we-deliver">
        <h2>Professional Blockchain Development Company</h2>
        <h1>You Choose, We Deliver</h1>

        <div className="deliver-cards">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front" id="flip-cart1-front">
                <div>
                  <h1>DEFI</h1>
                </div>
              </div>
              <div class="flip-card-back" id="flip-cart1-back">
                <div>
                  <h1>DEFI</h1>
                  <p>
                    With the help of our reliable Defi development services and
                    solutions, benefit immensely from flourishing decentralized
                    finance.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front" id="flip-cart2-front">
                <div>
                  <h1>DAPP</h1>
                </div>
              </div>
              <div class="flip-card-back" id="flip-cart2-back">
                <div>
                  <h1>DAPP</h1>
                  <p>
                    Utilize the potential of cutting-edge dApp solutions to
                    launch your project and achieve outstanding results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front" id="flip-cart3-front">
                <div>
                  <h1>NFTS</h1>
                </div>
              </div>
              <div class="flip-card-back" id="flip-cart3-back">
                <div>
                  <h1>NFTS</h1>
                  <p>
                    We deliver effective Whitelabel NFT marketplace development
                    services developed by our team of blockchain professionals
                    at budget-friendly prices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front" id="flip-cart4-front">
                <div>
                  <h1>METAVERSE DEVELOPMENT</h1>
                </div>
              </div>
              <div class="flip-card-back" id="flip-cart4-back">
                <div>
                  <h1>METAVERSE DEVELOPMENT</h1>
                  <p>
                    With our wide range of solutions that can help you take
                    advantage of the potential of the Metaverse, you can
                    experience the future internet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front" id="flip-cart5-front">
                <div>
                  <h1>PLAY & EARN</h1>
                </div>
              </div>
              <div class="flip-card-back" id="flip-cart5-back">
                <div>
                  <h1>PLAY & EARN</h1>
                  <p>
                    We provide gaming platforms that allow players to earn coins
                    for free and exchange them for real money, making them more
                    than just a source of amusement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front" id="flip-cart6-front">
                <div>
                  <h1>CRYPTO EXCHANGE</h1>
                </div>
              </div>
              <div class="flip-card-back" id="flip-cart6-back">
                <div>
                  <h1>CRYPTO EXCHANGE</h1>
                  <p>
                    Build the most traditional cryptocurrency exchange software
                    by using the the potential of our in-depth domain knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blockchain-development-process">
        <h1>BLOCKCHAIN DEVELOPMENT PROCESS</h1>
        <div className="bdp">
        <Fade left>
          <div className="bdp-contant">
            <div className="anylysis ">
              <img src="https://res.cloudinary.com/infograinsdevelop/image/upload/v1/media/blockchain_process/Client_e8suso" />
              <h1>Analysis of Clients’ Demands</h1>
              <p className="bdp-height">
                Our team carefully examines the project's needs. They also do a
                lot of research on the most recent technological developments.
              </p>
            </div>
            <div className="develop ">
              <img src="https://res.cloudinary.com/infograinsdevelop/image/upload/v1/media/blockchain_process/Client_e8suso" />
              <h1>Development and Testing</h1>
              <p className="bdp-height">
                When our team is certain of the specifications, they begin the
                development process. The code created is tested on operating
                systems and Browser.
              </p>
            </div>

            <div className="disining ">
              <img src="https://res.cloudinary.com/infograinsdevelop/image/upload/v1/media/blockchain_process/Design_pssiqj" />
              <h1>Designing</h1>
              <p className="bdp-height">
                Architecture is developed that will demonstrate the workflow of
                blockchain-based projects. The design of software affects user
                to interacts with it.
              </p>
            </div>
            <div className="development ">
              <img src="https://res.cloudinary.com/infograinsdevelop/image/upload/v1/media/blockchain_process/dev_kkfgms" />
              <h1>Deployment</h1>
              <p className="bdp-height">
                This action is taken only when there is approval regarding the
                establishment of the product's functionality and its stability.
                After taking the necessary measures.
              </p>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="bdp-content-rightSide ">
            <h1>BLOCKCHAIN DEVELOPMENT PROCESS</h1>
          </div>
          </Fade>
        </div>
      </div>

      <FooterDetails />
    </Layout>
  );
};

export default Product;
