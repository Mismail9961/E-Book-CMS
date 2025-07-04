import React from 'react';

const FeatureImage = () => {
  return (
    <div className="w-full py-10 px-4 flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="w-full md:w-[40%]">
        <img
          src="https://pearsonbookspublishing.co.uk/neo/assets/images/p1.jpg"
          alt="Feature 1"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
      <div className="w-full md:w-[40%]">
        <img
          src="https://pearsonbookspublishing.co.uk/neo/assets/images/p1.jpg"
          alt="Feature 2"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureImage;
