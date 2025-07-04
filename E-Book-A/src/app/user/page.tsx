"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type SliderImage = {
  id: string;
  imageUrl: string;
};

const UserImageSlider = () => {
  const [images, setImages] = useState<SliderImage[]>([]);

  useEffect(() => {
    axios.get("/api/slider").then((res) => setImages(res.data));
  }, []);

  return (
    <div className="w-full overflow-x-auto py-4 px-2">
      <div className="flex gap-4 w-max">
        {images.map((img) => (
          <div
            key={img.id}
            className="min-w-[250px] h-[150px] flex-shrink-0 overflow-hidden rounded-lg shadow"
          >
            <img
              src={img.imageUrl}
              alt="slider"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserImageSlider;
