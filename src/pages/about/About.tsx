import './stylesAbout.css'
import { FaClock, FaDollarSign, FaHeadset, FaInstagram, FaLinkedin, FaShoppingCart, FaStore, FaTwitter, FaUsers } from "react-icons/fa"
import { FaTruckFast } from "react-icons/fa6"
import {imgAbout} from '@/assets/index'
import { aboutPerson } from "@/assets/index";

function About() {
  return (
    <>
      <div>
        <div className="topSection">
          <div className="textStory">
            <h1 className="ourStory">Our Story</h1>
            <p>
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 930 brands and serves
              3 millions customers across the region.
              <br />
              <br />
              Exclusive has more than 1 million products to offer, giving you a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer
            </p>
          </div>
          <img src={imgAbout} className="imgAbout" alt="imgAbout" />
        </div>
        <div className="iconsSection">
          <div className="oneIcon">
            <FaStore size={32} className="" />
            <h3 className="number">10.5k</h3>
            <p className="desc">Sellers on our site</p>
          </div>
          <div className="oneIcon active">
            <FaDollarSign size={32} className="" />
            <h3 className="number">33k</h3>
            <p className="desc">Monthly Product Sale</p>
          </div>
          <div className="oneIcon">
            <FaShoppingCart size={32} className="mb-2" />
            <h3 className="number">45.5k</h3>
            <p className="desc">Customers active in our site</p>
          </div>
          <div className="oneIcon">
            <FaUsers size={32} className="" />
            <h3 className="number">25k</h3>
            <p className="desc">Annual gross sales in our site</p>
          </div>
        </div>
        <div className="persons">
          <div className="onePerson">
            <img src={aboutPerson} className="imgAbout" alt="img" />
            <h3 className="">Tom Cruise</h3>
            <p className="job">Founder & Chairman</p>
            <div className="social">
              <a href="#" className="">
                <FaTwitter size={16} />
              </a>
              <a href="#" className=" ">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
          <div className="onePerson">
            <img src={aboutPerson} className="imgAbout" alt="img" />

            <h3 className="">Emma Watson</h3>
            <p className="job">Managing Director</p>
            <div className="social">
              <a href="#" className="">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
          <div className="onePerson">
            <img src={aboutPerson} className="imgAbout" alt="img" />

            <h3 className="">Will Smith</h3>
            <p className="job">Product Designer</p>
            <div className="social">
              <a href="#" className="">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="oneService">
            <FaTruckFast size={32} className="icon" />
            <h3 className="">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-600">
              Free delivery for all orders over $45
            </p>
          </div>
          <div className="oneService">
            <FaHeadset size={32} className="icon" />
            <h3 className=""></h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>
          <div className="oneService">
            <FaClock size={32} className="icon" />
            <h3 className="">MONEY BACK GUARANTEE</h3>
            <p className="">No-return, money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About