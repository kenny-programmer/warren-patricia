import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Grid, MoreHorizontal } from 'lucide-react';

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const photos = [
    { src: "/mem1.jpg", alt: "Warren & Patricia together" },
    { src: "/mem2.jpg", alt: "Early dating memories" },
    { src: "/mem3.jpg", alt: "Our engagement" },
    { src: "/mem4.jpg", alt: "Memory 1" },
    { src: "/mem5.jpg", alt: "Memory 2" },
    { src: "/mem6.jpg", alt: "Memory 4" },
    { src: "/mem7.jpg", alt: "Memory 2" },
    { src: "/mem11.jpg", alt: "Memory 4" },
    { src: "/mem8.jpg", alt: "Memory 2" },
    { src: "/mem9.jpg", alt: "Memory 4" },
    { src: "/mem10.jpg", alt: "Memory 2" },
    { src: "/mem12.jpg", alt: "Memory 4" },
  ];

  const openGallery = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const displayedPhotos = showAll ? photos : photos.slice(0, 8);
  const hiddenCount = photos.length - 8;

  return (
    <>
      {/* Clean grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {displayedPhotos.map((photo, index) => (
          <div
            key={index}
            className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
            onClick={() => openGallery(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-square">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Grid className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {!showAll && hiddenCount > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MoreHorizontal className="w-5 h-5" />
            Show {hiddenCount} more photos
          </button>
        </div>
      )}

      {showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(false)}
            className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Show less
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full p-4">
            {/* Close button */}
            <button
              className="absolute top-8 right-8 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous button */}
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              onClick={prevPhoto}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Next button */}
            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              onClick={nextPhoto}
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Main image */}
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />

            {/* Image counter and title */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full text-white text-center">
              <div className="text-sm font-medium">{photos[currentIndex].alt}</div>
              <div className="text-xs text-gray-300 mt-1">
                {currentIndex + 1} of {photos.length}
              </div>
            </div>

            {/* Thumbnail navigation */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto pb-2">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-pink-400 scale-110'
                      : 'border-white/20 hover:border-white/50'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Keyboard navigation hint */}
          <div className="absolute top-8 left-8 text-white/60 text-sm">
            Use ← → keys to navigate
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;