import LuxuryHeader from "@/components/layout/LuxuryHeader";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LuxuryHeader />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  ); 
}