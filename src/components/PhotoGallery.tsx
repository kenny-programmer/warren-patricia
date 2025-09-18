import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import coupleMain from '@/assets/couple-main.jpg';
import earlyDating from '@/assets/early-dating.jpg';
import engagement from '@/assets/engagement.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    { src: "/img2.jpg", alt: "Warren & Patricia together" },
    { src: "/img3.jpg", alt: "Early dating memories" },
    { src: "/img4.jpg", alt: "Our engagement" },
    { src: "/img1.jpg", alt: "Memory 1" },
    { src: "/image2.jpg", alt: "Memory 2" },
    { src: "/proposal.jpg", alt: "Memory 4" },
  ];

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {photos.slice(0, 8).map((photo, index) => (
          <div
            key={index}
            className="wedding-card overflow-hidden group cursor-pointer"
            onClick={() => openGallery(index)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black/90 border-none">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={prevPhoto}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={nextPhoto}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full max-h-[80vh] object-contain"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} of {photos.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallery;