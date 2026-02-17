import {
  Phone,
  Mail,
  Menu,
  X,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ScalerIcon from "../assets/Scaler-icon.png";
import ScalerName from "../assets/name.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastY) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      lastY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== FLOATING WRAPPER ===== */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* ===== TOP BAR ===== */}

        <section
          className={`bg-[#3c6d71] text-white
  overflow-hidden transition-all duration-500 ease-in-out
  ${showTopBar ? "max-h-20 py-1.5 sm:py-2 opacity-100" : "max-h-0 py-0 opacity-0"}
  ${styles.fadeIn}`}
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            <div
              className="
      flex items-center justify-end
      gap-2 sm:gap-4 lg:gap-6
      text-[10px] sm:text-xs lg:text-sm
    "
            >
              {/* Phone */}
              <address className="not-italic flex items-end gap-1 whitespace-nowrap">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                <a href="tel:7989505377" className="hover:underline">
                  +91 798 950 5377
                </a>
              </address>

              {/* Social Icons */}
              {/* <div className="flex items-center gap-2 sm:gap-3">
                <SocialIcon>
                  <Youtube className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                </SocialIcon>
                <SocialIcon>
                  <Facebook className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                </SocialIcon>
                <SocialIcon>
                  <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                </SocialIcon>
              </div> */}

              {/* Email */}
              <address className="not-italic flex items-center gap-1 whitespace-nowrap">
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                <a
                  href="mailto:Scalerdental@gmail.com"
                  className="hover:underline truncate max-w-[120px] sm:max-w-none"
                >
                  Scalerdental@gmail.com
                </a>
              </address>
            </div>
          </div>
        </section>

        {/* ===== MAIN NAVBAR ===== */}
        <header className="bg-[#f2f8fc]/95 backdrop-blur-md shadow-md rounded-b-4xl md:rounded-b-full">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <img className="h-14 w-auto" src={ScalerIcon} alt="Scaler Logo" />
              <img
                className="h-10 w-auto pt-1"
                src={ScalerName}
                alt="Scaler Name"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-8 text-[#3c6d71] font-medium font-montserrat-alt">
              <NavLink to="#about">About</NavLink>
              <NavLink to="#why-us">Why Us?</NavLink>
              <NavLink to="#process">Process</NavLink>
              <NavLink to="#reviews">Reviews</NavLink>
              <NavLink to="#contact">Contact</NavLink>
            </nav>

            <a
              href="#contact"
              className="hidden lg:inline-block bg-[#3c6d71] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2c5154] transition duration-300 shadow-md hover:shadow-lg font-montserrat-alt"
            >
              Book Consultation
            </a>

            <button
              className="lg:hidden text-[#3c6d71]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#f2f8fc] px-6 pb-8 pt-6 text-[#3c6d71] font-medium shadow-lg flex flex-col items-center space-y-6 rounded-b-3xl font-montserrat-alt">
              <MobileNavLink to="#about" closeMenu={closeMenu}>
                About
              </MobileNavLink>
              <MobileNavLink to="#why-us" closeMenu={closeMenu}>
                Why Us?
              </MobileNavLink>
              <MobileNavLink to="#process" closeMenu={closeMenu}>
                Process
              </MobileNavLink>
              <MobileNavLink to="#reviews" closeMenu={closeMenu}>
                Reviews
              </MobileNavLink>
              <MobileNavLink to="#contact" closeMenu={closeMenu}>
                Contact
              </MobileNavLink>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-4 px-8 py-3 rounded-full bg-[#3c6d71] text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-montserrat-alt"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

/* DESKTOP NAV LINK */
function NavLink({ to, children }) {
  const handleScroll = (e) => {
    e.preventDefault();

    const target = document.querySelector(to);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <a
      href={to}
      onClick={handleScroll}
      className="relative group transition cursor-pointer"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3c6d71] transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

/* MOBILE NAV LINK */
function MobileNavLink({ to, children, closeMenu }) {
  const handleScroll = (e) => {
    e.preventDefault();

    const target = document.querySelector(to);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeMenu();
  };

  return (
    <a
      href={to}
      onClick={handleScroll}
      className="group relative text-lg font-medium transition-all duration-300 cursor-pointer"
    >
      <span className="transition-all duration-300 group-hover:text-black group-hover:tracking-wider">
        {children}
      </span>
      <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-[#3c6d71] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </a>
  );
}


