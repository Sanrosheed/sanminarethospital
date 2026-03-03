// components/Footer.js
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* Where to Find Us */}
        <div>
          <h3 className="font-bold mb-4">WHERE TO FIND US</h3>
          {/* <p>Ajumonire Street,</p> */}
          <h1 className="mb-2 text-xl">Ogun State</h1>
          <p className="mb-6 flex gap-3">
            <FaLocationDot className="md:h-8 md:w-8" />
            11, Anuoluwapo Street Off Nana Apori Football Field Adiyan, Gasline
            Ogun State
          </p>

          <h1 className="mb-2 text-xl">Lagos State</h1>
          <p className="mb-6 flex gap-3">
            <FaLocationDot className="md:h-8 md:w-8" />
            19A Ajumonire Street, Off Ritlad School, Meiran Road, Lagos State,
            Nigeria
          </p>
        </div>

        {/* Our Treatments */}
        <div className="md:pl-12">
          <h3 className="font-bold mb-4">OUR TREATMENTS</h3>
          <ul className="space-y-2">
            <li>General practice</li>
            <li>Surgery</li>
            <li>Pediatrics</li>
            <li>Radiology</li>
            <li>Caesarean section</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Services</li>
            <li>Practices & Team</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info & Social Links */}
        <div className="flex flex-col space-y-4">
          <div>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block mr-4"
            >
              {/* <img src="/instagram-icon.svg" alt="Instagram" className="h-6 w-6 inline-block" /> */}
              <AiFillInstagram className="h-6 w-6 inline-block" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              {/* <img src="/facebook-icon.svg" alt="Facebook" className="h-6 w-6 inline-block" /> */}
              <FaFacebook className="h-6 w-6 inline-block" />
            </a>
          </div>
          <div className="text-lg font-semibold">
            <a href="tel:08028414000">08077735732</a>
          </div>
          <div className="text-lg">
            <a href="mailto:drsany13k@gmail.com">admin@sanminaret.com</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t mt-8 pt-4 text-center text-sm text-gray-400">
        <p>
          Complaints Policy |{" "}
          <a href="https://www.gdc-uk.org" className="underline">
            www.sanminaret.com
          </a>{" "}
          | Privacy Notice
        </p>
        <p>Copyright © SanMinaret Hospital. All rights reserved</p>
      </div>
    </footer>
  );
}
