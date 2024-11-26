import React, { useRef } from "react";

const mediaItems = [
  {
    type: "image",
    src: "https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/IMG-20241125-WA0002.jpg",
  },
  {
    type: "image",
    src: "https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/IMG-20241125-WA0003.jpg",
  },
  {
    type: "video",
    src: "/Snapinsta.app_video_AC43FF08C9D79B291974763BDC0EDCAD_video_dashinit.mp4", // Your video URL
  },
  {
    type: "image",
    src: "https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/IMG-20241125-WA0004.jpg",
  },
  {
    type: "image",
    src: "https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/IMG-20241125-WA0005.jpg",
  },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mediaItems.map((item, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg"
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <HoverVideo videoSrc={item.src} />
          )}
        </div>
      ))}
    </div>
  );
}

function HoverVideo({ videoSrc }: { videoSrc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      muted
      loop
      className="w-full h-64 object-cover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
