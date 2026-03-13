"use client";
import { useRef, useState } from "react";
import ReelsPlayer from "@/components/ReelsPlayer";

const videos = [
  {
    src: "https://tgmfqe8nonxlzcgz.public.blob.vercel-storage.com/promo-1",
    label: "Delhi Café Launch",
    cat: "Brand",
  },
  {
    src: "https://tgmfqe8nonxlzcgz.public.blob.vercel-storage.com/AQP8X10zNAk74csWzZs6LdBKgyph5Q8lug5nrBnkgNFHLbDH6Xfe5zZfKxDH-_kqKndCN0WD4OV8kjTkKnPejjb1SI_BYUXs.mp4",
    label: "Tech Startup Event",
    cat: "Event",
  },
  {
    src: "https://tgmfqe8nonxlzcgz.public.blob.vercel-storage.com/AQOIQJL6ih8CKsUqnymogoJ0IEC2EQdCPf77ZROhyngrK1Ee-5UkyJsSBtznIZvf05g_NATwh0dsCEaWw2cvuOw0..mp4",
    label: "Fashion Pop-Up",
    cat: "Creator",
  },
  {
    src: "https://tgmfqe8nonxlzcgz.public.blob.vercel-storage.com/AQOEVyckkxd-c3PrdHmibeGm7ESgnKyZ9LOyKBaEuNs9QGOP9OriZfMtYR91c9RW2uhZZmeBJARzvRmavJ8zlt-q..mp4",
    label: "Restaurant Opening",
    cat: "Brand",
  },
  {
    src: "https://tgmfqe8nonxlzcgz.public.blob.vercel-storage.com/AQO9enrG5-_DKTSmMBgKPp53sSvZ2vd4nUZMJdNfPi_qlKn9SncWjngIvarwph_5S2QFOBwu9FFRyX_5IYtCVHrE..mp4",
    label: "Street Food Market",
    cat: "Creator",
  },
];

function DesktopReelCard({ src, label, cat }: { src: string; label: string; cat: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { video.play(); setPlaying(true); }
    else { video.pause(); setPlaying(false); }
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
      className="group relative rounded-2xl border border-white/8 overflow-hidden aspect-[9/16] bg-zinc-900 cursor-pointer hover:border-white/25 transition-all duration-300"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        loop muted playsInline preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`} />
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
        <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center hover:bg-white/25 transition-all duration-200 hover:scale-110">
          {playing
            ? <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
            : <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          }
        </div>
      </div>
      <button onClick={toggleMute} className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100">
        {muted
          ? <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 18 3.994 3.994 0 019 12v-1l.27.27L12 14v-2l-3.73-3.73L4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg>
          : <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
        }
      </button>
      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-1.5">
        <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
        <span className="text-[#E8392A] text-xs font-semibold uppercase tracking-wider">{cat}</span>
        <p className="text-white text-sm font-semibold mt-0.5">{label}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work">
      {/* ── Mobile: Full-screen Instagram Reels ── */}
      <div className="md:hidden">
        {/* Section header */}
        <div className="text-center py-10 px-5">
          <p className="text-[#E8392A] font-semibold text-sm uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">Recent Work</h2>
          <p className="text-white/50 text-sm">Scroll to watch our reels</p>
        </div>
        {/* Snap-scroll reels player */}
        <ReelsPlayer videos={videos} />
        {/* Instagram CTA below */}
        <div className="flex justify-center py-8 px-5">
          <a href="https://www.instagram.com/byquickmoments/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 text-white/70 hover:text-white text-sm font-medium px-6 py-3 rounded-xl transition-all duration-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            View on Instagram
          </a>
        </div>
      </div>

      {/* ── Desktop: Cards grid ── */}
      <div className="hidden md:block py-24 px-5 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#E8392A] font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Recent Work</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">See how we&apos;re helping brands grow on Instagram.</p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {videos.map((v) => <DesktopReelCard key={v.src} {...v} />)}
          </div>
          <div className="flex justify-center mt-10">
            <a href="https://www.instagram.com/byquickmoments/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 border border-white/15 text-white/70 hover:text-white text-sm font-medium px-6 py-3 rounded-xl transition-all duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              View on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
