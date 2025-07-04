"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface SliderImage {
  id: string;
  imageUrl: string;
}

interface SelectedImagePreview {
  file: File;
  url: string;
  name: string;
}

const SliderImageUploader: React.FC = () => {
  const [images, setImages] = useState<SliderImage[]>([]);
  const [selectedImages, setSelectedImages] = useState<SelectedImagePreview[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get<SliderImage[]>("http://localhost:5000/api/slider");
      setImages(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch images", err);
    }
  };

  const handleImageSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const previews: SelectedImagePreview[] = Array.from(files).map((file) => ({
      file,
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setSelectedImages(previews);
  };

  const handleUpload = async () => {
    if (selectedImages.length === 0) return;

    const formData = new FormData();
    selectedImages.forEach((img) => formData.append("images", img.file));

    try {
      await axios.post("http://localhost:5000/api/slider/init", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSelectedImages([]);
      fetchImages();
    } catch (err) {
      console.error("❌ Upload failed", err);
    }
  };

  const handleReplace = async (file: File, id: string) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.put(`http://localhost:5000/api/slider/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(`✅ Image replaced (URL not saved): ${res.data.newImageUrl}`);
    } catch (err) {
      console.error("❌ Replace failed", err);
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Upload Form */}
      <div className="space-y-4">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageSelection}
        />
        {selectedImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {selectedImages.map((img, index) => (
              <div key={index} className="border p-2 rounded shadow">
                <img src={img.url} alt={img.name} className="w-full h-32 object-cover rounded" />
                <p className="text-sm mt-2 truncate">{img.name}</p>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={selectedImages.length === 0}
        >
          Upload {selectedImages.length} Image(s)
        </button>
      </div>

      {/* Already Uploaded Images */}
      <div className="border-t pt-6">
        <h2 className="text-lg font-semibold mb-4">Uploaded Slider Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img.id} className="space-y-2">
              <img src={img.imageUrl} alt="Slider" className="w-full rounded shadow" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleReplace(file, img.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderImageUploader;
