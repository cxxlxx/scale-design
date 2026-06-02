import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem", padding: "8rem 3rem" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)" }}>Coming soon</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, color: "var(--cream)", textAlign: "center" }}>Contact</h1>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--fog)", maxWidth: "30rem", textAlign: "center" }}>This page is being lovingly designed. Check back soon.</p>
      </main>
      <Footer />
    </>
  );
}
