"use client";
import { useRef, useState, useEffect, useCallback } from "react";

interface ReelData {
  src: string;
  label: string;
  cat: string;
}

function ReelSlide({ src, label, cat, isActive }: ReelData & { isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [muted, setMuted] = useState(true);
  const [likeAnim, setLikeAnim] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const lastTap = useRef(0);

  // Auto-play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      // Double tap
      if (!liked) {
        setLiked(true);
        setShowHeart(true);
        setTimeout(() => setShowHeart(false), 800);
      }
    }
    lastTap.current = now;
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((p) => !p);
    if (!liked) {
      setLikeAnim(true);
      setTimeout(() => setLikeAnim(false), 500);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div
      className="relative w-full max-w-full flex-shrink-0 snap-start overflow-hidden bg-black"
      style={{ height: 'calc(100svh - 4rem)' }}
      onClick={handleDoubleTap}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

      {/* Double-tap heart animation */}
      {showHeart && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <svg
            className="w-28 h-28 text-white drop-shadow-lg animate-ping"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      )}

      {/* Top bar — brand + mute */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5">
              <circle cx="18" cy="18" r="7" fill="#E8392A" />
              <circle cx="18" cy="18" r="3" fill="white" />
              <rect x="6" y="6" width="24" height="24" rx="5" stroke="#111" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
          <span className="text-white text-sm font-bold drop-shadow">@byquickmoments</span>
        </div>
        <button
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white"
          aria-label="Toggle mute"
        >
          {muted ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 18 3.994 3.994 0 019 12v-1l.27.27L12 14v-2l-3.73-3.73L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </div>

      {/* Right action bar */}
      <div className="absolute right-3 bottom-28 z-10 flex flex-col items-center gap-6">
        {/* Like */}
        <button onClick={toggleLike} className="flex flex-col items-center gap-1.5">
          <div className={`transition-transform duration-200 ${likeAnim ? "scale-150" : "scale-100"}`}>
            <svg
              className={`w-7 h-7 drop-shadow transition-colors duration-200 ${liked ? "text-[#E8392A]" : "text-white"}`}
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth={liked ? "0" : "2"}
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <span className="text-white text-xs font-semibold drop-shadow">{liked ? "1.2K" : "1.1K"}</span>
        </button>

        {/* Comment */}
        <button className="flex flex-col items-center gap-1.5">
          <svg className="w-7 h-7 text-white drop-shadow" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-white text-xs font-semibold drop-shadow">48</span>
        </button>

        {/* Share */}
        <button className="flex flex-col items-center gap-1.5">
          <svg className="w-7 h-7 text-white drop-shadow" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span className="text-white text-xs font-semibold drop-shadow">Share</span>
        </button>

        {/* Save */}
        <button onClick={() => setSaved((p) => !p)} className="flex flex-col items-center gap-1.5">
          <svg
            className={`w-7 h-7 drop-shadow transition-colors duration-200 ${saved ? "text-white" : "text-white"}`}
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>

        {/* Music disc */}
        <div className="w-10 h-10 rounded-full border-2 border-white/40 bg-zinc-800 flex items-center justify-center animate-spin" style={{ animationDuration: "4s" }}>
          <div className="w-3 h-3 rounded-full bg-white/60" />
        </div>
      </div>

      {/* Bottom left: caption */}
      <div className="absolute bottom-8 left-4 right-20 z-10">
        <p className="text-white font-bold text-base drop-shadow mb-1">@byquickmoments</p>
        <p className="text-white/80 text-sm drop-shadow leading-snug">
          <span className="text-[#E8392A] font-semibold">{cat}</span> · {label}
        </p>
        <p className="text-white/60 text-xs mt-1.5 drop-shadow">
          🎵 Original sound · QuickMoments
        </p>
      </div>
    </div>
  );
}

export default function ReelsPlayer({ videos }: { videos: ReelData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const index = Math.round(container.scrollTop / container.clientHeight);
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory"
      style={{ height: 'calc(100svh - 4rem)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      {videos.map((v, i) => (
        <ReelSlide key={v.src} {...v} isActive={i === activeIndex} />
      ))}
    </div>
  );
}
