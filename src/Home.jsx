import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Prodects from "./Prodects";
import About from "./About";
import Footer from "./Footer";
import Comment from "./Comment"; 
import b1 from "./assets/b1.png";
import b2 from "./assets/b2.png";

function Home() {
  const [bgImage, setBgImage] = useState(window.innerWidth > 1199 ? b1 : b2);

  // Update background on resize
  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth > 1199 ? b1 : b2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll up button logic
  useEffect(() => {
    const upBtn = document.querySelector(".up-btn");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        upBtn.style.display = "flex";
      } else {
        upBtn.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const introStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
  };

  return (
    <>
      <Nav/>

      {/* Intro Section */}
      <section className="intro" style={introStyle} id="home">
        <div className="intro-text">
          <h1>Golden Nile Lily</h1>
          <p>Fresh ,Natural & Beautiful Flowers</p>
          
            Golden Nile Lily brings you the most beautiful fresh and unique flower bouquets.<br/>
            Enjoy their fragrant scents and vibrant colors that brighten up every space.<br/>
            Our carefully selected flowers ensure a delightful and memorable shopping experience.
          
          <button 
            className="btn main-btn" 
            onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}
          >
            Shop now
          </button>
        </div>
      </section>      

      <About/>
      <Prodects/>
      <Comment/>
      <Footer/>

      {/* Scroll Up Button */}
      <button 
        className="btn up-btn" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ display: "none" }} // hidden initially
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}

export default Home;
