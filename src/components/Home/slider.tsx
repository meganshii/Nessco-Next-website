import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const videos: string[] = [
  "/video/bg.mp4",
  "/video/Homebg.mp4",
  "/video/iotvideo.mp4",
  "/video/bg.mp4",
  "/video/Homebg.mp4",
  "/video/iotvideo.mp4",
  "/video/bg.mp4",
  "/video/Homebg.mp4",
  "/video/iotvideo.mp4",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel: React.FC = () => {
  const [videoIndex, setVideoIndex] = useState<number>(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setVideoIndex((pv) => {
          if (pv === videos.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && videoIndex < videos.length - 1) {
      setVideoIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && videoIndex > 0) {
      setVideoIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative h-full w-auto overflow-hidden  ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${videoIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Videos videoIndex={videoIndex} />
      </motion.div>

      <Dots videoIndex={videoIndex} setVideoIndex={setVideoIndex} />
      {/* <GradientEdges /> */}
    </div>
  );
};

type VideosProps = {
  videoIndex: number;
};

const Videos: React.FC<VideosProps> = ({ videoIndex }) => {
  return (
    <>
      {videos.map((videoSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            background: "black",
          }}
          animate={{
            scale: videoIndex === idx ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className="h-full w-full shrink-0 rounded-xl "
        >
          <video
            src={videoSrc}
            autoPlay={videoIndex === idx}
            loop
            muted
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      ))}
    </>
  );
};

type DotsProps = {
  videoIndex: number;
  setVideoIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Dots: React.FC<DotsProps> = ({ videoIndex, setVideoIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {videos.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setVideoIndex(idx)}
          className={`h-2 w-2 rounded-full transition-colors ${
            idx === videoIndex ? "bg-neutral-50" : "bg-neutral-500"
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges: React.FC = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[60px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[60px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
