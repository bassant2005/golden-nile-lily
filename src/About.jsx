import "./about.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import video from "./assets/video.mp4"


function About(){
    return(<>
    <section className="about" id="about">
        <div className="container">
          {/* Section Title */}
          <h1><span>About </span>Us</h1>

          <div className="row align-items-center">
            {/* Left column: Video */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="video text-center">
                <video
                  src={video}
                  loop
                  autoPlay
                  muted
                  playsInline
                  className="img-fluid rounded"
                ></video>
                <h3 className="overlay-text">Best Flower Sellers</h3>
              </div>
            </div>

            {/* Right column: Text */}
            <div className="col-lg-6 col-md-12">
              <div className="about-text">
                <h3>Why Choose Us?</h3>
                <p>
                  At Golden Nile Lily, we deliver fresh and beautifully arranged flowers for every occasion. 
                  Our bouquets are carefully selected to bring joy, elegance, and vibrant colors to your home or office.
                </p>

                <p>
                  We are committed to exceptional quality and customer satisfaction. 
                  Every arrangement is crafted with love and attention to detail, ensuring a memorable floral experience.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="icons row">
        <div className="icon-card col-lg-3 col-md-6 col-sm-12"> 
          <div> 
            <i className="fa-solid fa-vault"></i> 
          </div> 
          <div> 
            <h5>Secure payment</h5>                 
            <p>Protected by 'paypal'</p> 
          </div> 
        </div>

        <div className="icon-card col-lg-3 col-md-6 col-sm-12"> 
          <div> 
            <i className="fa-solid fa-gifts"></i> 
          </div> 
          <div> 
            <h5>Offers & gifts</h5>                 
            <p>For special customers</p> 
          </div> 
        </div>

        <div className="icon-card col-lg-3 col-md-6 col-sm-12"> 
          <div> 
            <i className="fa-solid fa-truck"></i> 
          </div> 
          <div> 
            <h5>Free delivery</h5>                 
            <p>For the first 3 orders</p> 
          </div> 
        </div>

        <div className="icon-card col-lg-3 col-md-6 col-sm-12"> 
          <div> 
            <i className="fa-solid fa-sack-dollar"></i> 
          </div> 
          <div> 
            <h5>3 days return</h5>                 
            <p>And get your money back</p> 
          </div> 
        </div>
      </section>
    </>)
}

export default About