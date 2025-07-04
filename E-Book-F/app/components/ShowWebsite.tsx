import React from 'react';

const ShowStoppingWebsites = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3075] mb-6">
            We Create Show-Stopping <br /> Websites
          </h2>
          <p className="text-[#1c1c1c] text-[17px] mb-6">
            Our web design agency has created stunning websites for businesses across the globe.
            We work with all types of companies, from fintech to fashion – and don’t stop until
            we’ve created the perfect website.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#1E3075] font-semibold text-[16px]">
            <li>Pixel Perfect</li>
            <li>WordPress, Shopify, HubSpot & More</li>
            <li>Custom Design With Figma</li>
            <li>Ultra-Fast Expedited Service Available</li>
          </ul>
        </div>

        {/* Right Image Content */}
        <div className="w-full md:w-1/2 relative">
          <img src="https://pearsonbookspublishing.co.uk/neo/assets/images/aboutimg2.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ShowStoppingWebsites;
