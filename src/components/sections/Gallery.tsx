import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

import devImg from "@assets/633188208_122123684391002991_6671734969535941105_n_1780596173668.jpg";
import promoImg from "@assets/ChatGPT_Image_Jun_4,_2026,_11_04_09_AM_1780596342996.png";
import hotelHeroImg from "@assets/opengraph_1780600977492.jpg";
import hotelDashImg from "@assets/screencapture-24d064ea-b872-47cc-9833-e8958ec9ef4e-00-3kyephbm_1780601556017.png";
import ecommerceImg from "@assets/screencapture-localhost-e-commerce-index-php-2026-06-04-12_18__1780600924039.png";

const images = [
  { src: devImg, alt: "LOCOS Developer Portrait", aspect: "aspect-[3/4]" },
  { src: promoImg, alt: "LOCOS Developer — Cloud Solutions", aspect: "aspect-square" },
  { src: hotelHeroImg, alt: "Grand Azure Hotel Website", aspect: "aspect-video" },
  { src: hotelDashImg, alt: "Grand Azure Hotel Admin Dashboard", aspect: "aspect-video" },
  { src: ecommerceImg, alt: "Electric Shop E-Commerce Platform", aspect: "aspect-[4/3]" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading title="Gallery" subtitle="Workspace & Lifestyle" center />
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-12 space-y-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group rounded-xl overflow-hidden cursor-pointer border border-border break-inside-avoid ${img.aspect}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}