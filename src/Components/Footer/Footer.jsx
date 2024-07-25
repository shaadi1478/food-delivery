import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer mt-11" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <Link tp="/"><img src={assets.logo1} alt="" /></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, qui nisi? Illum optio impedit officiis.</p>
                    <div className="footer-social-icons">
                        <Link target="_blank" to="https://www.facebook.com/"><img src={assets.facebook_icon} alt="" /></Link>
                        <Link target="_blank" to="https://github.com/shaadi1478"><img src={assets.twitter_icon} alt="" /> </Link>
                        <Link to="https://www.linkedin.com/in/sheikh-shaadi-01477a2a0/"> <img src={assets.linkedin_icon} alt="" /></Link>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <NavLink to="/">
                        <li>Home</li>
                        </NavLink>
                        <li>Abou us</li>
                        <li>Delivary</li>
                        <li>Privacy Ploicy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+88 01956686338</li>
                        <li>sheikhshaadi137@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 @ SHEIKH SHAADI - All Right Reserved.
            </p>
        </div>
    );
};

export default Footer;