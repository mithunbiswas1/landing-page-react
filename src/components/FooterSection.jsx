import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "How it Works", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  getHelp: [
    { name: "Support Carrer", href: "#" },
    { name: "24h Service", href: "#" },
    { name: "Quick Chat", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Policy", href: "#" },
    { name: "Business", href: "#" },
  ],
  contact: [
    { name: "WhatsApp", href: "#" },
    { name: "Support 24", href: "#" },
  ],
};

export const FooterSection = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* brand column  */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex justify-center cursor-pointer">
                <div className="h-4 w-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="h-4 w-4 bg-red-500 rounded-full opacity-100 hover:opacity-75 transition-opacity -ml-2"></div>
              </div>
              <span className="text-xl font-bold ml-1">The Next Design</span>
            </div>

            <p className="text-gray-600 mb-6">
              The cioy warned Little Blind Text, that where it came from it
              would have been rewritten a thoudand times.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-blue-600 transition-all duration-200"
              >
                <FaFacebook className="size-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-blue-600 transition-all duration-200"
              >
                <FaTwitter className="size-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-blue-600 transition-all duration-200"
              >
                <FaLinkedin className="size-5" />
              </a>
            </div>
          </div>

          {/* footer navigation  */}
          <div className="">
            <div className="">
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <div key={category} className="flex items-center">
                    <h3 className="text-lg font-semibold mb-4 uppercase">
                      {category}
                    </h3>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
