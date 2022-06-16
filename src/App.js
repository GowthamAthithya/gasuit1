import "bootstrap/dist/css/bootstrap.min.css";
import { gsap } from "gsap";
import React, { useState, useEffect } from "react";
import AppBody from "./appBody";
import "./App.scss";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route /*Link*/ } from "react-router-dom";
import Showreel from "./showreel";

function App() {
  const [time, settime] = useState(false);

  useEffect(() => {
    gsapFunction();
  }, []);

  const gsapFunction = () => {
    const t1 = gsap.timeline({});
    const t2 = gsap.timeline({});

    t1.from(".title-animation", { fontSize: "2rem", opacity: 0 }).to(
      ".title-animation",
      {
        duration: 2,
        fontSize: window.innerWidth < 750 ? "2rem" : "10rem",
        opacity: 1,
      }
    );

    t2.from(".title-animation", {
      duration: 2,
      fontSize: window.innerWidth < 750 ? "2rem" : "10rem",
      delay: 4,
      opacity: 1,
    }).to(".title-animation", { fontSize: "2rem", opacity: 0 });
  };

  const bodyFunction = () => {
    setTimeout(() => {
      settime(true);
    }, 6000);
  };

  /*preloader only once start */

  useEffect(() => {
    const cookiesGet = sessionStorage.getItem("preloadcookie");
    if (!cookiesGet) {
      bodyFunction();
      sessionStorage.setItem("preloadcookie", "1");
    } else {
      settime(true);
    }
  }, []);
  /*preloader only once ends */

  return (
    // style={{ width: "100vw" }}
    <div className="App">
      <main>
        <section>
          {time ? (
            ""
          ) : (
            <div className="start-content">
              <span className="title-animation">GASUIT</span>
              <span className="start-content-loading container justify-content-center">
                <p>
                  <span>
                    {/* {" "} */}
                    Loading...
                    {/* {" "} */}
                    <span className="loadingNumber">
                      {Math.floor(Math.random() * 100 + 1)}%
                    </span>
                  </span>
                  {/* )} */}
                </p>
              </span>
            </div>
          )}
          {time ? <AppBody /> : ""}
        </section>
      </main>
      <BrowserRouter>
        <Routes>
          <Route path="/ShowReels" element={<Showreel />} />
          <Route path="/gasuit1" index element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
