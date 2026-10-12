"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS } from "@/lib/galleryData";
import { C, tel, wa } from "@/lib/data";
import { ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";

export default function GalleryView() {
  const [visibleCount, setVisibleCount] = useState(24);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);

  const displayedItems = GALLERY_ITEMS.slice(0, visibleCount);
  const currentPhoto =
    lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  // Reset zoom & pan when switching photo
  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, []);

  // Open Lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index);
    resetZoom();
    document.body.style.overflow = "hidden";
  };

  // Close Lightbox
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    resetZoom();
    document.body.style.overflow = "";
  }, [resetZoom]);

  // Navigate photos
  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    const newIndex =
      (lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setLightboxIndex(newIndex);
    resetZoom();
  }, [lightboxIndex, resetZoom]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    const newIndex = (lightboxIndex + 1) % GALLERY_ITEMS.length;
    setLightboxIndex(newIndex);
    resetZoom();
  }, [lightboxIndex, resetZoom]);

  // Zoom handlers
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPanPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const toggleZoom = () => {
    if (zoomLevel === 1) {
      setZoomLevel(2);
    } else {
      resetZoom();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showPrev, showNext, closeLightbox]);

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50 && zoomLevel === 1) {
      if (diff > 0) showNext();
      else showPrev();
    }
    setTouchStart(null);
  };

  // Pan / Drag handling when zoomed
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - panPosition.x,
        y: e.clientY - panPosition.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // WhatsApp inquiry URL
  const getWhatsAppInquiry = (photo) => {
    const text = `Hi TripSthan! I saw Photo #${photo.id} on your website gallery and would like to inquire about this tour & private cab booking.`;
    return `${wa}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full">
      {/* Simple, Clean Photo Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {displayedItems.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-xl sm:rounded-2xl bg-stone-200/70 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-stone-200/60"
            >
              {/* Clean Image with Smooth Zoom on Hover */}
              <Image
                src={photo.src}
                alt={`TripSthan Travel Photo ${photo.id}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
              />

              {/* Minimalist Hover Overlay with subtle zoom icon */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button (if more photos available) */}
        {visibleCount < GALLERY_ITEMS.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 24)}
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:brightness-105 transition-all duration-300 active:scale-95"
            >
              <span>Load More Photos</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
                +{Math.min(24, GALLERY_ITEMS.length - visibleCount)}
              </span>
            </button>
            <p className="mt-2 text-xs text-stone-500">
              Showing {displayedItems.length} of {GALLERY_ITEMS.length} photos
            </p>
          </div>
        )}
      </div>

      {/* Clean Lightbox Modal with Zoom & Navigation */}
      <AnimatePresence>
        {lightboxIndex !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-black/60 z-20">
              {/* Counter */}
              <div className="text-xs sm:text-sm font-semibold text-white/80">
                {lightboxIndex + 1} / {GALLERY_ITEMS.length}
              </div>

              {/* Zoom and Close Controls */}
              <div className="flex items-center gap-2">
                {/* Zoom In (+) */}
                <button
                  onClick={handleZoomIn}
                  title="Zoom In"
                  className="rounded-full p-2 text-white/80 hover:bg-white/15 hover:text-white transition"
                >
                  <ZoomIn className="h-5 w-5" strokeWidth={2} />
                </button>

                {/* Zoom Level Indicator */}
                <button
                  onClick={resetZoom}
                  title="Reset Zoom"
                  className="rounded-full px-2.5 py-1 text-xs font-mono text-white bg-white/10 hover:bg-white/20 transition"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>

                {/* Zoom Out (-) */}
                <button
                  onClick={handleZoomOut}
                  title="Zoom Out"
                  className="rounded-full p-2 text-white/80 hover:bg-white/15 hover:text-white transition"
                >
                  <ZoomOut className="h-5 w-5" strokeWidth={2} />
                </button>

                {/* Close (X) */}
                <button
                  onClick={closeLightbox}
                  title="Close (Esc)"
                  className="ml-2 rounded-full bg-white/15 p-2 text-white hover:bg-red-600 transition"
                >
                  <X className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Main Stage: Photo with Smooth Zoom & Drag */}
            <div
              className="relative flex-1 flex items-center justify-center overflow-hidden p-2 sm:p-6"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onDoubleClick={toggleZoom}
              style={{
                cursor:
                  zoomLevel > 1
                    ? isDragging
                      ? "grabbing"
                      : "grab"
                    : "zoom-in",
              }}
            >
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                title="Previous Photo"
                className="absolute left-3 sm:left-6 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-lg hover:bg-saffron transition-all"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
              </button>

              {/* The Active Image */}
              <motion.div
                key={currentPhoto.id}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{
                  scale: zoomLevel,
                  opacity: 1,
                  x: panPosition.x,
                  y: panPosition.y,
                }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{
                  scale: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative max-h-full max-w-full flex items-center justify-center select-none"
              >
                <img
                  src={currentPhoto.src}
                  alt={`TripSthan Photo ${currentPhoto.id}`}
                  draggable={false}
                  className="max-h-[75vh] sm:max-h-[80vh] w-auto max-w-[94vw] sm:max-w-[88vw] object-contain rounded-lg shadow-2xl"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                title="Next Photo"
                className="absolute right-3 sm:right-6 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-lg hover:bg-saffron transition-all"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
              </button>
            </div>

            {/* Bottom Bar: WhatsApp and Call */}
            <div className="border-t border-white/10 bg-black/60 px-4 py-3 z-20">
              <div className="mx-auto max-w-4xl flex items-center justify-center sm:justify-between gap-3">
                <span className="hidden sm:inline-block text-xs text-white/70">
                  Tip: Double-click to zoom in / out
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href={getWhatsAppInquiry(currentPhoto)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow hover:brightness-110 transition active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <a
                    href={tel(C.phones[0])}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/25 transition active:scale-95"
                  >
                    <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
