import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <div className="flex items-center space-x-3">
              <img
                src="https://i.ibb.co.com/6bRJ4fk/eclipse.webp"
                alt="Eclipse"
                className="w-12 h-12 rounded-full"
              />
              <h1 className="text-2xl font-bold">Eclipse Movie </h1>
            </div>
            <p className="mt-4 text-sm text-gray-100">
              Eclipse Movie Server Presents: "Eclipse of Shadows" Eclipse of
              Shadows is a thrilling cinematic experience hosted on Eclipse
              Movie Server. Set in a small town on the verge of cosmic chaos,
              the story follows the mysterious events triggered by an
              otherworldly eclipse. As the eclipse casts its shadow, hidden
              truths from both the heavens and the souls of the townspeople
              begin to emerge. The lines between reality and the supernatural
              blur, creating a gripping narrative. Eclipse Movie Server offers a
              unique platform for immersive storytelling, with Eclipse of
              Shadows inviting viewers into a world where every shadow tells a
              story.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="/" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact Us
                </a>
                <p className="pt-2">
                  Email: mdniloyhasan544@gmail.com 
                  <br />
                  Phone: 01309623416
                  <br /> 
                  Address: House 24, Road 8, Block B, Banani, Dhaka 1213, Bangladesh
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90"
              >
                <FaFacebook className="text-white" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:opacity-90"
              >
                <RiTwitterXLine className="text-white" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-700 hover:opacity-90"
              >
                <BsInstagram className="text-white" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-700 hover:opacity-90"
              >
                <IoLogoYoutube className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-100">
          <p>&copy; 2024 EcLipse Movie Server. All Rights Reserved.</p>
          <p>
            Designed with ❤️ by{" "}
            <a
              href="https://a-8-assignment.netlify.app/"
              className="hover:text-white underline"
            >
              Liton Uddin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
