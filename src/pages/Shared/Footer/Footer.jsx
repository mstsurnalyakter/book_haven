import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#1313130D]">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <span className="self-center text-2xl font-semibold">
              BookHaven
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Product
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Features
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Integrations
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Public API
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-900">Social media</div>
            <div className="flex justify-start space-x-3 text-2xl">
              <a
                rel="noopener noreferrer"
                href="https://github.com/mstsurnalyakter"
                title="GitHub"
                target="_blank"
                className="flex items-center p-1"
              >
                <FaGithub />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/mstsurnalyakter"
                title="Twitter"
                className="flex items-center p-1"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/mstsurnalyakte/?hl=en"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaInstagram />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://web.facebook.com/mstsurnalyakter"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/mst-surnaly-akter/"
                title="LinkedIn"
                className="flex items-center p-1"
              >
                <TiSocialLinkedinCircular />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#13131326]"></div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          BookHaven
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
