import React from 'react';

const WebDesignHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#0e021a] via-[#19043a] to-[#090519] text-white py-16 px-6 md:px-20 min-h-[50vh] flex flex-col md:flex-row items-center justify-between">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <button className="bg-cyan-400 text-[#090519] font-semibold px-6 py-2 rounded-full text-sm md:text-base shadow-lg">
          TOP RATED AGENCY FOR WEB DESIGN
        </button>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Your Website Puts You In The <br />
          <span className="text-[#00E0F0]">Limelight!</span> Let Our Web Design <br />Agency Help You Shine.
        </h1>

        <p className="text-lg text-gray-200 font-medium">
          We’re a web design agency that creates websites that burst with excitement, on any CRM your heart may desire.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://pearsonbookspublishing.co.uk/neo/assets/images/web-designs-img.webp"
          alt="Web Design Preview"
          className="max-w-full h-auto drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default WebDesignHero;
