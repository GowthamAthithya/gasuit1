import React, { useRef, useState, useEffect } from "react";
import titleVideo from "./assets/Video/GAsuiteVideo.mp4";
import uberImg from "./assets/images/home/clients/Uber.svg";
import mercedesImg from "./assets/images/home/clients/Mercedes.svg";
import axaImg from "./assets/images/home/clients/axa.svg";
import dbsImg from "./assets/images/home/clients/dbs.svg";
import pvrImg from "./assets/images/home/clients/pvr.svg";
import tataImg from "./assets/images/home/clients/tata.svg";
import nestleImg from "./assets/images/home/clients/nestle.svg";
import aonImg from "./assets/images/home/clients/Aon.svg";
import bajajImg from "./assets/images/home/clients/bajaj.svg";
import grabImg from "./assets/images/home/clients/grab.svg";
import cocoonImg from "./assets/images/home/clients/cocoon.svg";
import sitaImg from "./assets/images/newHome/clients/sita.png";
import stonesImg from "./assets/images/home/clients/stones.svg";
import vkImg from "./assets/images/home/clients/vk.svg";
import oyoImg from "./assets/images/home/clients/oyo.svg";
import jioImg from "./assets/images/newHome/clients/jio.png";
import content31 from "./assets/images/gifs/what2.gif";
import content32 from "./assets/images/gifs/we.gif";
import content33 from "./assets/images/gifs/do.gif";
import content34 from "./assets/images/gifs/whatwedo.gif";
import content35 from "./assets/images/gifs/doo.gif";
import footerIcon from "./assets/images/icons/mail.svg";
import content41 from "./assets/images/newHome/portfolio/b1.png";
import content42 from "./assets/images/newHome/portfolio/b4.png";
import content43 from "./assets/images/newHome/portfolio/b5.png";
import content44 from "./assets/images/newHome/portfolio/future/mask.svg";
import content45 from "./assets/images/newHome/portfolio/b3.png";
import content51 from "./assets/images/newHome/portfolio/uber/uber1.png";
import content52 from "./assets/images/newHome/portfolio/uber/text3.svg";
import content53 from "./assets/images/newHome/portfolio/uber/text2.svg";
import content54 from "./assets/images/newHome/portfolio/uber/text4.svg";
import content55 from "./assets/images/newHome/portfolio/uber/text5.svg";
import content61 from "./assets/images/newHome/portfolio/freadom/img1.png";
import content62 from "./assets/images/newHome/portfolio/freadom/logo.svg";
import content63 from "./assets/images/newHome/portfolio/freadom/img3.png";
import content64 from "./assets/images/newHome/portfolio/freadom/img4.png";
import content65 from "./assets/images/frames/iphone12.png";
import content71 from "./assets/images/frames/iphone12.png";
import content74 from "./assets/images/newHome/portfolio/p3.png";
import content75 from "./assets/images/newHome/portfolio/p5.png";
import content81 from "./assets/images/newHome/portfolio/uber/uber5.svg";
import content82 from "./assets/images/newHome/portfolio/uber/uber3.svg";
import content83 from "./assets/images/newHome/portfolio/a2.png";
import content84 from "./assets/images/newHome/portfolio/a3.png";
import content85 from "./assets/images/newHome/portfolio/iPad.png";
import content91 from "./assets/images/newHome/portfolio/sntraa/logo.svg";
import content92 from "./assets/images/newHome/portfolio/sntraa/img3.png";
import content95 from "./assets/images/newHome/portfolio/sntraa/img1.png";
import chakraImg1 from "./assets/images/newHome/rings/ring1.png";
import chakraImg2 from "./assets/images/newHome/rings/ring2.png";
import chakraImg3 from "./assets/images/newHome/rings/ring3.png";
import ScrollMagic from "scrollmagic";
import sectionVideo from "./assets/Video/IaaxnVideoSection.mp4";
import sectionPlayImg from "./assets/images/newHome/play-button.svg";
import cultureCode11 from "./assets/gifs/cultureCode11.gif";
import cultureCode12 from "./assets/gifs/cultureCode12.gif";
import cultureCode13 from "./assets/gifs/cultureCode13.gif";
import cultureCode14 from "./assets/gifs/cultureCode14.gif";
import cultureCode15 from "./assets/gifs/cultureCode15.gif";
import cultureCode16 from "./assets/gifs/cultureCode16.gif";
import circlePlay from "./assets/images/icons/circlePlayRegular.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function AppBody() {
  /* GA navigation toggle bar starts */
  const [navButton, setnavButton] = useState(false);

  useEffect(() => {
    if (navButton === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  /* GA navigation toggle bar ends */

  const [videoTime, setVideoTime] = useState(true);
  const [companyImgTime, setCompanyImgTime] = useState();

  let animation = async () => {
    if (!companyImgTime) {
      setTimeout(() => {
        setCompanyImgTime(6);
      }, 6000);
    }
  };

  const videotime = () => {
    if (videoTime) {
      setVideoTime(false);
      setTimeout(() => {
        setVideoTime(true);
      }, 3000);
    }
  };

  const videotime1 = () => {
    setVideoTime(true);
  };

  const cookiesGet2 = sessionStorage.getItem("preloadcookie2");

  useEffect(() => {
    if (!cookiesGet2) {
      videotime();
      sessionStorage.setItem("preloadcookie2", "2");
    }
    if (cookiesGet2) {
      videotime1();
    }
  }, []);

  useEffect(() => {
    animation();
  });

  /* showreel */

  const content3ImgGif = [
    content31,
    content32,
    content33,
    content34,
    content35,
  ];
  const [content3Img, setContent3Img] = useState(0);

  useEffect(() => {
    const content3ImgChange = setInterval(() => {
      if (content3Img === 4) {
        setContent3Img(0);
      } else {
        setContent3Img(content3Img + 1);
      }
      clearInterval(content3ImgChange);
    }, 3000);
  });

  const chakraRef2 = useRef();
  const chakraRef1 = useRef();
  const chakraRef3 = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    window.addEventListener("scroll", (event) => {
      requestAnimationFrame(() => {
        const rotation = window.scrollY;
        // console.log("window", window);
        chakraRef1.current.style.transform = `rotate(${rotation}deg)`;
        chakraRef2.current.style.transform = `rotate(-${rotation}deg)`;
        chakraRef3.current.style.transform = `rotate(${rotation}deg)`;

        // console.log("section1", section1Ref);
      });
    });

    let controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave",
        duration: "100%",
      },
    });
    let slides = document.querySelectorAll(".sectionsPanel");
    //var tween = new TimelineMax();

    for (let i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i],
      })
        .setPin(slides[i], { pushFollowers: false })
        .addIndicators({
          name: "resize",
        }) // add indicators //(requires plugin)
        .addTo(controller);
    }
  }, []);

  return (
    <>
      {videoTime ? (
        <div className="navbarContainer">
          <div className="navLogo">
            <a href="#home">GASUIT</a>
          </div>
          <button id="navMenu" onClick={() => setnavButton(!navButton)}>
            {navButton ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
          <div
            className={navButton ? "navLinkAppear" : "navLink"}
            onClick={() => setnavButton(false)}
          >
            <a href="#home">About</a>
            <a href="#home">Creative</a>
            <a href="#home">CAREERS</a>
            <a className="navLogoLink1">
              <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
            </a>
            <a className="navLogoLink3">
              <i className="fa fa-dribbble fa-lg" aria-hidden="true"></i>
            </a>
            <a className="navLogoLink2">
              <i className="fa fa-behance-square fa-lg" aria-hidden="true"></i>
            </a>
            <a className="navLogoLink4">
              <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="content-1">
        <div className={videoTime ? "videoContent" : "videoOutTime"}>
          <video src={titleVideo} loop autoPlay muted />
          <div className="videoContentPlayButton">
            <img id="videoContentPlayButton" src={circlePlay} alt="" />
            <a href="/ShowReels">Watch Showreel</a>
          </div>
        </div>
      </div>
      <div className="title-content">
        <div className="titlePara">
          <span>we are__</span>
          <br />
          <p>
            a friendly bunch of thinkers, designers & techies constantly
            delivering good stuff. We don’t do boring. We create products that
            make people say damn!
          </p>
        </div>
        <div className="titleContentPlayButton">
          <img id="titleContentPlayButton" src={circlePlay} alt="" />
          <a href="/ShowReels">Watch Showreel</a>
        </div>
      </div>

      {/* <div className="page-content justify-content-center"> */}
      <div className="content-2">
        <span className="content-2-heading">
          <h1>We are going to work with some cool people.</h1>
          <p>Helping new brands start up and old ones start over.</p>
        </span>
        <div className="desktop">
          <div className="two-item-column">
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={uberImg}
                alt="uber logo"
                loading="lazy"
              />
            </div>
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={mercedesImg}
                alt="mercedes logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="three-item-column">
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={axaImg}
                alt="axa logo"
                loading="lazy"
              />
            </div>
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={dbsImg}
                alt="dbs logo"
                loading="lazy"
              />
            </div>
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-offest="0"
                src={pvrImg}
                alt="pvr logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="two-item-column">
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={tataImg}
                alt="tata-logo"
                loading="lazy"
              />
            </div>
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={nestleImg}
                alt="nestle logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="three-item-column">
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={aonImg}
                alt="aon logo"
                loading="lazy"
              />
            </div>
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={bajajImg}
                alt="bajaj logo"
                loading="lazy"
              />
            </div>
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-offest="-200"
                src={grabImg}
                alt="grab logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="two-item-column">
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={cocoonImg}
                alt="cocoon logo"
                loading="lazy"
              />
            </div>
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={cocoonImg}
                alt="sita logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="three-item-column">
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={sitaImg}
                alt="deloitte logo"
                loading="lazy"
              />
            </div>
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={stonesImg}
                alt="star health logo"
                loading="lazy"
              />
            </div>
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-offest="0"
                src={vkImg}
                alt="radio mirchi logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="two-item-column">
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={oyoImg}
                alt="tata-logo"
                loading="lazy"
              />
            </div>
            <div className="logo-card">
              <div
                className="one"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="50"
              ></div>
              <div
                className="two"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="4000"
              ></div>
              <img
                className={
                  companyImgTime ? "companyImgVisible" : "companyImgNotVisible"
                }
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="500"
                src={jioImg}
                alt="nestle logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="content-3 container">
          <div className="row">
            <div className="col-md-5 left-content">
              <h1>What we do.</h1>
              <p>
                We believe in perfection by design and <br /> performance by
                default.
              </p>
              <img
                src={content3ImgGif[content3Img]}
                className="content3Img"
                alt=""
                width="350px"
                height="350px"
              />
            </div>
            <div className="col-md-7 right-content">
              <ul>
                <li
                  className={
                    content3Img === 0 ? "contentItem2" : "contentItem1"
                  }
                >
                  Strategy
                </li>
                <li
                  className={
                    content3Img === 1 ? "contentItem2" : "contentItem1"
                  }
                >
                  Branding
                </li>
                <li
                  className={
                    content3Img === 2 ? "contentItem2" : "contentItem1"
                  }
                >
                  Designs
                </li>
                <li
                  className={
                    content3Img === 3 ? "contentItem2" : "contentItem1"
                  }
                >
                  Engineering
                </li>
                <li
                  className={
                    content3Img === 4 ? "contentItem2" : "contentItem1"
                  }
                >
                  Product Management
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="title-section">
          <h4 class="title">What we've been upto</h4>
        </div>
        <div className="scrollContainer">
          <section className="sectionsPanel" ref={section1Ref} id="section1">
            <div className="row">
              <div className="col-md-8">
                <div>
                  <img
                    src={content41}
                    className="content41 img-fluid"
                    alt="IMGAGES"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={content42}
                      className="content42 img-fluid"
                      alt="IMGAGES"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src={content43}
                      className="content43 img-fluid"
                      alt="IMGAGES"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <img
                      src={content44}
                      className="content44 img-fluid"
                      alt="IMGAGES"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img
                      src={content45}
                      className="content45 img-fluid"
                      alt="IMGAGES"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section sectionsPanel"
            ref={section2Ref}
            id="section2"
          >
            <div className="row">
              <div className="col-md-4">
                <img
                  src={content51}
                  className="content51 img-fluid"
                  alt="IMGAGES"
                />
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <img
                      src={content52}
                      className="content52 img-fluid"
                      alt="IMGAGES"
                    />
                  </div>
                  <div className="col-md-12">
                    <img
                      src={content53}
                      className="content53 img-fluid"
                      alt="IMGAGES"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <img
                      src={content54}
                      className="content54 img-fluid"
                      alt="IMGAGES"
                    />
                  </div>
                  <div className="col-md-12">
                    <img
                      src={content55}
                      className="content55 img-fluid"
                      alt="IMGAGES"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section sectionsPanel"
            ref={section3Ref}
            id="section3"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-5">
                      <img
                        src={content61}
                        className="content61 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                    <div className="col-md-7 content62bg">
                      <img
                        src={content62}
                        className="content62 img-fluid"
                        alt="IMGAGES"
                      />
                      <p className="content62p">
                        Freadom is a product from Stones2milestones, where you
                        can spend 10 minutes with your child anywhere, anytime
                        to nurture their will and skill to read
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <img
                        src={content63}
                        className="content63 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                    <div className="col-md-5 content64bg">
                      <img
                        src={content64}
                        className="content64 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={content65}
                        className="content65 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section sectionsPanel"
            ref={section4Ref}
            id="section4"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={content71}
                    className="content71 img-fluid"
                    alt="IMGAGES"
                  />
                </div>

                <div className="col-md-4">
                  <div className="row">
                    , ,{" "}
                    <div className="col-md-12">
                      <img
                        src={content44}
                        className="content44 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                    <div className="col-md-12">
                      <img
                        src={content45}
                        className="content45 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={content74}
                        className="content74 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                    <div className="col-md-12">
                      <img
                        src={content75}
                        className="content75 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section sectionsPanel"
            ref={section5Ref}
            id="section5"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={content82}
                        className="content82 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={content81}
                        className="content81 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={content83}
                        className="content83 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src={content84}
                        className="content84 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                    <div className="col-md-12">
                      <img
                        src={content85}
                        className="content85 img-fluid"
                        alt="IMAGES"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section sectionsPanel"
            ref={section6Ref}
            id="section6"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12 content91bg">
                      <img
                        src={content91}
                        className="content91 img-fluid"
                        alt="IMGAGES"
                      />
                      <p className="content91p">
                        A monthly smartphone, telematics based motor insurance
                        policy that optimises the risk and premium on per trip
                        basis considering geolocation, time of day, driving
                        behavious, mileage and add ons.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={content92}
                        className="content92 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={content71}
                        className="content71 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={content92}
                        className="content92 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={content95}
                        className="content95 img-fluid"
                        alt="IMGAGES"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div id="videoSection">
        <div class="content-section">
          <h4 class="title">Meet our digital pirates</h4>
          <p class="description">
            We’re a tight-knit, skilled team with a working culture built <br />{" "}
            on trust, respect and passion
          </p>
          <div id="videoSectionButton">
            <img src={sectionPlayImg} alt="play-button" loading="lazy" />
            <button>Watch our video</button>
          </div>
        </div>
        <video
          src={sectionVideo}
          style={{ maxWidth: "100%" }}
          loop
          autoPlay
          muted
        />
      </div>

      <div>
        <div className="cultureCode">
          <div className="left">
            <div className="cultureCodeLeftContent">
              <h4>The Culture Code</h4>
              <p>
                For us, our values are more than just words. These won’t be on
                any test, but they come from the heart and run deep through our
                culture.
              </p>
              <button>KNOW MORE</button>
            </div>
          </div>
          <div className="right">
            <div className="cultureGrid">
              <div className="cultureGridContent grid-1">
                <h4>Be Curious.</h4>
                <img src={cultureCode11} alt="" />
              </div>
              <div className="cultureGridContent grid-2">
                <h4>Team up.</h4>
                <img src={cultureCode12} alt="" />
              </div>
              <div className="cultureGridContent grid-3">
                <h4>Be Candid.</h4>
                <img src={cultureCode13} alt="" />
              </div>
              <div className="cultureGridContent grid-4">
                <h4>Dont settle.</h4>
                <img src={cultureCode14} alt="" />
              </div>
              <div className="cultureGridContent grid-5">
                <h4>Be Humble.</h4>
                <img src={cultureCode15} alt="" />
              </div>
              <div className="cultureGridContent grid-6">
                <h4>Stay Crazy.</h4>
                <img src={cultureCode16} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chakra-page">
        <div className="chakra-heading">
          <h1>
            Feels like a <br />
            good fit?
          </h1>
          <p>Let's kick some ass together</p>
          <button>View all openings</button>
        </div>
        <img
          src={chakraImg1}
          ref={chakraRef1}
          className="chakra1"
          alt="chakra"
        />
        <img
          src={chakraImg2}
          ref={chakraRef2}
          className="chakra2"
          alt=""
          srcset=""
        />
        <img
          src={chakraImg3}
          ref={chakraRef3}
          className="chakra3"
          srcset=""
          alt=""
        />
      </div>

      <div className="footerSection">
        <img
          class="footerIcon"
          alt="Iaaxin - Send us your biggest challenge"
          src={footerIcon}
          width="240"
          height="176"
        />
        <div className="footerContainer">
          <div className="footerContainerLeft">
            <p className="description mt-5">Looking for digital superpowers?</p>
            <h4 className="title">
              Send us your
              <br /> biggest challenge
            </h4>
          </div>
          <div className="footerContainerRight">
            <form>
              <fieldset className="input-container">
                <input
                  type="text"
                  placeholder="Name"
                  className="formGroupName formControl"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="formGroupEmail formControl"
                />
                <textarea
                  rows="8"
                  placeholder="What’s your product all about?"
                  className="formGroupText formControl"
                ></textarea>
                <button className="footerBtn">GET IN TOUCH</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <span>
            <h1>Iaaxin</h1>
            <p>a product development studio</p>
          </span>
        </div>
        <div className="footer-right">
          <button>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </button>
          <button>
            <i className="fa fa-behance-square" aria-hidden="true"></i>
          </button>
          <button>
            <i className="fa fa-dribbble" aria-hidden="true"></i>
          </button>
          <button>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </button>
        </div>
      </footer>
      {/* </div> */}
    </>
  );
}

export default AppBody;
