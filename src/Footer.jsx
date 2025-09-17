import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./footer.css";
import "./Prodects.css";
import logo from "./assets/l.png";
import mastercard from "./assets/mastercard.png";
import visa from "./assets/visa.png";

function Footer() {
  return (
    <>
      <section className="footer">
        <footer className="pt-5 pb-4">
          <div className="container">
            <div className="row">
              {/* Quick Links */}
              <div className="col-md-3 col-sm-6 mb-4">
                <h5 className="fw-bold">Quick Links</h5>
                <ul className="list-unstyled">
                   <li><a href="#home" className="text-decoration-none">Home</a></li>
                   <li><a href="#about" className="text-decoration-none">About</a></li>
                   <li><a href="#products" className="text-decoration-none">Products</a></li>
                   <li><a href="#review" className="text-decoration-none">Review</a></li>
                   <li><a href="#contact" className="text-decoration-none">Comment</a></li>
                </ul>
               </div>

               {/* Extra Links */}
               <div className="col-md-3 col-sm-6 mb-4">
                  <h5 className="fw-bold">Extra Links</h5>
                    <ul className="list-unstyled">
                    <li><a href="#profile" className="text-decoration-none">My Account</a></li>
                    <li><a href="#cart" className="text-decoration-none">My Order</a></li>
                    <li><a href="#favorites" className="text-decoration-none">My Favorite</a></li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="col-md-3 col-sm-6 mb-4">
                  <h5 className="fw-bold">Contact Info</h5>
                  <p className="mb-1">+20-109-792-4295</p>
                  <p className="mb-1">basant.tareq.2005@gmail.com</p>
                  <p className="mb-2">Cairo, Egypt 🇪🇬</p>

                    {/* Payment icons */}
                  <div className="d-flex gap-2 Payment">
                    <img src={mastercard} alt="mastercard" />
                    <img src={visa} alt="visa" />
                  </div>
                </div>

                {/* Logo / Image */}
                <div className="col-md-3 col-sm-6 mb-4 text-center">
                    <img src={logo} alt="Bassant Logo"/>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="text-center pt-3 mt-3 border-top">
                <p className="mb-0">
                  &copy; {new Date().getFullYear()} Created By <span className="fw-bold">`Bassant Tarek`</span> | All Rights Reserved
                </p>
              </div>
            </div>
          </footer>
      </section>
    </>
  );
}
export default Footer

