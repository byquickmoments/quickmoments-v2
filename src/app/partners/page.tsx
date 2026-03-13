import Header from "@/components/Header";
import ForCreators from "@/components/ForCreators";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Creators | Quick Moments — Shoot & Get Paid in Hyderabad",
  description:
    "Join the Quick Moments creator network in Hyderabad. Shoot great content, skip the editing, and get paid premium rates. Apply as a partner today.",
};

export default function PartnersPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="pt-20">
        <ForCreators />
      </div>
      <Footer />
    </main>
  );
}
