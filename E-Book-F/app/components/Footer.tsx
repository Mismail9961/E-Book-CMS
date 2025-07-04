import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <img
              src="https://pearsonbookspublishing.co.uk/neo/assets/images/logo.png"
              alt="Logo"
              className="w-24 h-auto"
            />
          </div>
          <p className="text-sm text-gray-200">
            Before launching your digital presence, having a well-defined plan is crucial.
            Our experts conduct thorough research on your industry, competitors.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-lg mb-3">Useful Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="font-bold text-lg mb-3">Policies</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📞 123123123</li>
            <li>📧 test@test.com</li>
            <li>🏢 Suit 201#, XYZ Building, ABC Street, LA</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm sm:text-base text-white">
        © 2025 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
