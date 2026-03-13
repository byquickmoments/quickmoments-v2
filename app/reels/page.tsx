import type { Metadata } from "next";
import ReelsPlayer from "@/components/ReelsPlayer";

export const metadata: Metadata = {
  title: "Reels | Quick Moments",
  description: "Watch our latest reels from Quick Moments — Hyderabad's instant reel makers.",
};

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

export default function ReelsPage() {
  return (
    // Full-screen, no padding — just like Instagram Reels tab
    // The global body padding-bottom from layout handles the bottom nav space
    <main className="bg-black" style={{ height: "100svh", overflow: "hidden" }}>
      <ReelsPlayer videos={videos} />
    </main>
  );
}
