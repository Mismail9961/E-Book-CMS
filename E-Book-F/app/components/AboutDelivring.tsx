import React from 'react';

const Page = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-12 py-10 gap-8">
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-[#0a0a23]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1d2b50]">
          Creative Web Agency Delivering <br className="hidden sm:block" /> Custom Solutions
        </h1>

        <ul className="mt-6 space-y-4 text-lg sm:text-xl">
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>
              Custom Web Design Solutions{" "}
              <span className="text-cyan-500 font-semibold">To Drive Conversions</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>
              Effective Marketing Campaigns{" "}
              <span className="text-cyan-500 font-semibold">To Generate Growth</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>
              Tailored Branding Strategies{" "}
              <span className="text-cyan-500 font-semibold">To Drive Engagement</span>
            </span>
          </li>
        </ul>

        <p className="mt-6 text-base sm:text-lg text-[#1a1a1a] leading-relaxed">
          Digital Silk is a web design company & digital marketing agency focused on growing brands online.
          We create effective brand strategies, custom web design, development, and digital marketing
          solutions to generate greater brand engagement and conversions. We work closely with our clients
          to ensure each project meets their brand guidelines and business goals and provide technical and
          marketing expertise to ensure optimal results.
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://pearsonbookspublishing.co.uk/neo/assets/images/Company.webp"
          alt="Web Design Trophy"
          className="w-full max-w-md md:max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Page;
