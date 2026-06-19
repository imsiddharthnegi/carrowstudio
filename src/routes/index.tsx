import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, Twitter, Instagram, Linkedin, ChevronDown } from "lucide-react";
import { Shader, ChromaFlow, FilmGrain, FlutedGlass, Swirl } from "shaders/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carrow Studio — Strategy-led digital design" },
      { name: "description", content: "We craft digital experiences for brands ready to dominate their category online." },
      { property: "og:title", content: "Carrow Studio" },
      { property: "og:description", content: "Strategy-led creatives, delivering results in digital and beyond." },
    ],
  }),
  component: Index,
});

const EASE = "cubic-bezier(0.25,0.1,0.25,1)";

const PartnerIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
  </svg>
);

const LinkIcon = ({ className }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

function RollText({ text }: { text: string }) {
  return (
    <span className="overflow-hidden h-[20px] inline-flex flex-col" style={{ transition: `transform 500ms ${EASE}` }}>
      <span className="flex flex-col group-hover:-translate-y-1/2" style={{ transition: `transform 500ms ${EASE}` }}>
        <span className="h-[20px] leading-[20px]">{text}</span>
        <span className="h-[20px] leading-[20px]">{text}</span>
      </span>
    </span>
  );
}


function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ["Projects", "Studio", "Journal", "Connect"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden pt-[72px]" style={{ backgroundColor: "#EFEFEF" }}>
        {/* Shader stack */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Shader style={{ width: "100%", height: "100%" }}>
            <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
            <ChromaFlow baseColor="#ffffff" downColor="#ff5f03" leftColor="#ff5f03" rightColor="#ff5f03" upColor="#ff5f03" momentum={13} radius={3.5} />
            <FlutedGlass aberration={0.61} angle={31} frequency={8} highlight={0.12} highlightSoftness={0} lightAngle={-90} refraction={4} shape="rounded" softness={1} speed={0.15} />
            <FilmGrain strength={0.05} />
          </Shader>
        </div>

        {/* Nav */}
        <div className="fixed top-0 left-0 right-0 z-[100]">
          <div
            className={`mx-auto w-full max-w-[1440px] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${scrolled ? "px-4 sm:px-6 pt-3" : "px-0 pt-0"
              }`}
          >
            <nav
              className={`grid grid-cols-3 items-center transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] border ${scrolled
                ? "bg-white/70 backdrop-blur-[12px] border-white/30 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.03)] mx-0"
                : "bg-white/80 backdrop-blur-[12px] border-white/20 rounded-2xl mx-2"
                }`}
              style={{ padding: scrolled ? "10px 16px" : "16px 24px" }}
            >
              {/* Left column */}
              <div className="flex items-center justify-start">
                <a href="#" className="font-semibold text-gray-900 tracking-tight hover:text-gray-600 transition-colors duration-300" style={{ fontSize: 16 }}>
                  Carrow Studio
                </a>
              </div>

              {/* Center column */}
              <div className="hidden md:flex items-center justify-center gap-6 sm:gap-8">
                {navLinks.map((l) => (
                  <a key={l} href="#" className="text-gray-900 hover:text-gray-500 transition-colors duration-300" style={{ fontSize: 14 }}>{l}</a>
                ))}
              </div>

              {/* Right column */}
              <div className="flex items-center justify-end">
                <div className="hidden md:flex items-center">
                  <a href="#" className="group bg-gray-900 text-white rounded-full pl-5 pr-2 py-2 flex items-center gap-3 font-medium" style={{ fontSize: 13 }}>
                    <RollText text="Book a strategy call" />
                    <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-900 group-hover:-rotate-45" style={{ transition: `transform 500ms ${EASE}` }}>
                      <ArrowRight size={12} />
                    </span>
                  </a>
                </div>
                <button className="md:hidden bg-gray-900 text-white rounded-full p-2.5" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                  <Menu size={18} />
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Spacer */}
        <div className="relative z-20 flex-1" />

        {/* Hero content */}
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
          <div className="text-gray-900 tracking-wide mb-5 sm:mb-8" style={{ fontSize: 13 }}>Carrow Studio</div>
          <h1
            className="font-medium text-gray-900"
            style={{
              fontSize: "clamp(1.75rem,7vw,4.2rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            <span className="sm:hidden">We help companies grow without pretending growth is simple.</span>
            <span className="hidden sm:inline" style={{ fontSize: "clamp(2.5rem,5vw,4.2rem)" }}>
              We help companies grow<br />without pretending growth<br />is simple.
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-[620px] leading-relaxed" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
            Carrow Studio partners with a small number of clients each quarter on brand strategy, design, and marketing that's built to perform.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mt-8 sm:mt-12">
            <a href="#" className="group rounded-full pl-6 sm:pl-8 pr-2 sm:pr-2.5 py-2 sm:py-2.5 flex items-center gap-3.5 sm:gap-4 text-white font-medium" style={{ backgroundColor: "#F26522", fontSize: 16, transition: `background-color 300ms ${EASE}` }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e05a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F26522")}
            >
              <RollText text="Start a project" height={24} />
              <span className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center group-hover:-rotate-45" style={{ color: "#F26522", transition: `transform 500ms ${EASE}` }}>
                <ArrowRight size={16} />
              </span>
            </a>

            <div className="flex items-center gap-2 bg-white rounded-[4px] px-3 py-2 cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
              </svg>
              <span className="text-[13px] font-medium text-gray-900">Certified Partner</span>
              <span className="text-[10px] bg-gray-900 text-white px-1.5 py-0.5 rounded font-medium">Featured</span>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex justify-center pb-6 hidden sm:flex">
          <ChevronDown size={20} className="text-gray-900/40 animate-bounce" />
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
            <div
              className="absolute left-0 right-0 bottom-0 bg-white rounded-2xl mx-3 mb-3 p-6"
              style={{
                animation: `slideUp 500ms ${EASE} forwards`,
              }}
            >
              <div className="flex items-center justify-end mb-6">
                <button onClick={() => setMenuOpen(false)} className="bg-gray-900 text-white rounded-full p-2.5"><X size={18} /></button>
              </div>
              <div className="flex flex-col gap-2 mb-6">
                {navLinks.map((l) => (
                  <a key={l} href="#" className="text-gray-900 font-medium" style={{ fontSize: 28, lineHeight: "32px" }}>{l}</a>
                ))}
              </div>
              <a href="#" className="group rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-3 text-white font-medium w-full" style={{ backgroundColor: "#F26522", fontSize: 13 }}>
                <RollText text="Start a project" />
                <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center" style={{ color: "#F26522" }}>
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
            <style>{`@keyframes slideUp { from { transform: translateY(100%);} to { transform: translateY(0);} }`}</style>
          </div>
        )}
      </section>

      {/* ============ ABOUT ============ */}
      <section className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white font-semibold flex items-center justify-center" style={{ fontSize: 11 }}>1</div>
            <div className="font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5" style={{ fontSize: 12 }}>Introducing Carrow</div>
          </div>

          <h2
            className="px-5 sm:px-8 lg:px-12 font-medium text-gray-900 mb-12 sm:mb-16 lg:mb-28"
            style={{ fontSize: "clamp(1.5rem,4vw,3.2rem)", lineHeight: 1.12, letterSpacing: "-0.02em" }}
          >
            Strategy-led creatives, delivering<br />results in digital and beyond.
          </h2>

          {/* Mobile/Tablet */}
          <div className="lg:hidden px-5 sm:px-8">
            <p className="font-medium text-gray-900 mb-6 max-w-[500px]" style={{ fontSize: 15, lineHeight: 1.65, letterSpacing: "-0.01em" }}>
              We're selective about the work we take on.<br />
              Once we commit, we obsess — research, design, strategy, testing.<br />
              Until the work delivers measurable results.
            </p>
            <a href="#" className="group inline-flex rounded-full pl-5 pr-2 py-2 items-center gap-3 text-white font-medium mb-8" style={{ backgroundColor: "#F26522", fontSize: 13 }}>
              <RollText text="About our studio" />
              <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center group-hover:-rotate-45" style={{ color: "#F26522", transition: `transform 500ms ${EASE}` }}>
                <ArrowRight size={14} />
              </span>
            </a>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <img src="https://images.unsplash.com/photo-1519086588705-c935fdedcc14?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Studio" className="sm:w-[45%] rounded-xl sm:rounded-2xl object-cover" style={{ aspectRatio: "3/2" }} />
              <img src="https://images.unsplash.com/photo-1502810190503-8303352d0dd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work" className="sm:w-[55%] rounded-xl sm:rounded-2xl object-cover" style={{ aspectRatio: "900/600" }} />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid px-12 items-end gap-6 xl:gap-8" style={{ gridTemplateColumns: "26% 1fr 48%" }}>
            <img src="https://images.unsplash.com/photo-1519086588705-c935fdedcc14?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Studio" className="self-end rounded-2xl object-cover w-full" style={{ height: "380px", objectFit: "cover" }} />
            <div className="self-start flex flex-col items-end">
              <p className="font-medium text-gray-900 mb-6 text-right max-w-[440px]" style={{ fontSize: 16, lineHeight: 1.7, letterSpacing: "-0.01em" }}>
                We're selective about the work we take on.<br />
                Once we commit, we obsess — research, design, strategy, testing.<br />
                Until the work delivers measurable results.
              </p>
              <a href="#" className="group inline-flex rounded-full pl-5 pr-2 py-2 items-center gap-3 text-white font-medium" style={{ backgroundColor: "#F26522", fontSize: 13 }}>
                <RollText text="About our studio" />
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:-rotate-45" style={{ color: "#F26522", transition: `transform 500ms ${EASE}` }}>
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
            <img src="https://images.unsplash.com/photo-1502810190503-8303352d0dd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work" className="self-end rounded-2xl object-cover w-full" style={{ height: "380px", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ============ CASE STUDIES ============ */}
      <section className="pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white font-semibold flex items-center justify-center" style={{ fontSize: 11 }}>2</div>
            <div className="font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5" style={{ fontSize: 12 }}>Featured concepts</div>
          </div>

          <h2
            className="px-5 sm:px-8 lg:px-12 font-medium text-gray-900 mb-10 sm:mb-14 lg:mb-16"
            style={{ fontSize: "clamp(1.75rem,7vw,4.2rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
          >
            Studio projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
            {/* Card 1 */}
            <div>
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: "329/246", backgroundColor: "#1a1d2e" }}>
                <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-white rounded-full h-9 flex items-center overflow-hidden group-hover:w-[148px] w-9 justify-start pl-2.5" style={{ transition: `width 300ms ease-in-out` }}>
                  <LinkIcon className="text-gray-900 -rotate-45 group-hover:rotate-0 shrink-0" />
                  <span className="text-gray-900 font-medium opacity-0 group-hover:opacity-100 ml-2 whitespace-nowrap" style={{ fontSize: 13, transition: `opacity 300ms ease-in-out 100ms` }}>Learn more</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed" style={{ fontSize: 13 }}>An interactive 3D experience exploring motion design and immersive storytelling. A conceptual exploration of how dynamic visuals can elevate brand presence.</p>
              <h3 className="font-semibold text-gray-900 mt-1" style={{ fontSize: 14 }}>Narrativ</h3>
            </div>

            {/* Card 2 */}
            <div>
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: "329/246", backgroundColor: "#6b6b6b" }}>
                <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-gray-900 rounded-full h-9 flex items-center overflow-hidden group-hover:w-[168px] w-9 justify-start pl-2.5" style={{ transition: `width 300ms ease-in-out` }}>
                  <ArrowRight size={14} className="text-white -rotate-45 group-hover:rotate-0 shrink-0" style={{ transition: `transform 300ms ease-in-out` }} />
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 ml-2 whitespace-nowrap" style={{ fontSize: 13, transition: `opacity 300ms ease-in-out 100ms` }}>View case study</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed" style={{ fontSize: 13 }}>A concept redesign exploring how strategic design and streamlined UX can modernize a platform experience. A studio exploration of conversion-focused design principles.</p>
              <h3 className="font-semibold text-gray-900 mt-1" style={{ fontSize: 14 }}>Luminar</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-[#F9F9F9] border-t border-b border-gray-100 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto px-5">
          <p className="text-[#F26522] text-sm font-medium tracking-wide mb-4">Let's work together</p>
          <h2
            className="font-medium text-gray-900 mb-6"
            style={{
              fontSize: "clamp(2rem,5vw,3.8rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            Ready to start something that actually works?
          </h2>
          <p className="text-gray-600 mb-10" style={{ fontSize: 16, lineHeight: 1.65 }}>
            We take on a small number of projects each quarter. If you're serious about growth and willing to invest in strategy, let's talk.
          </p>
          <a href="#" className="group inline-flex rounded-full pl-5 sm:pl-6 pr-2 py-2 items-center gap-3 text-white font-medium" style={{ backgroundColor: "#F26522", fontSize: 13, transition: `background-color 300ms ${EASE}` }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e05a1a")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F26522")}
          >
            <RollText text="Start a project" />
            <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center group-hover:-rotate-45" style={{ color: "#F26522", transition: `transform 500ms ${EASE}` }}>
              <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-white/80 backdrop-blur-[10px] border-t border-black/10 pt-16 sm:pt-20 pb-8 sm:pb-10">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Brand column */}
            <div className="md:col-span-2">
              <span className="font-semibold text-gray-900 tracking-tight" style={{ fontSize: 16 }}>Carrow Studio</span>
              <p className="text-gray-600 mt-4 max-w-[220px]" style={{ fontSize: 14, lineHeight: 1.65 }}>
                Strategy and design built to perform.
              </p>
              {/* Social media icons/links row */}
              <div className="flex gap-4 mt-6">
                {[
                  { name: "Twitter", Icon: Twitter, url: "https://twitter.com" },
                  { name: "Instagram", Icon: Instagram, url: "https://instagram.com" },
                  { name: "LinkedIn", Icon: Linkedin, url: "https://linkedin.com" },
                ].map(({ name, Icon, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-950 transition-colors duration-300"
                    aria-label={name}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation columns */}
            <div>
              <h4 className="font-semibold text-gray-400 tracking-widest uppercase mb-4" style={{ fontSize: 11 }}>
                Studio
              </h4>
              <div className="flex flex-col gap-3">
                {["Projects", "About", "Journal", "Careers"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-600 hover:text-gray-950 transition-colors duration-300"
                    style={{ fontSize: 14 }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Services column */}
            <div>
              <h4 className="font-semibold text-gray-400 tracking-widest uppercase mb-4" style={{ fontSize: 11 }}>
                Services
              </h4>
              <div className="flex flex-col gap-3">
                {["Brand Strategy", "Web Design", "Motion & 3D", "Growth Marketing"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-600 hover:text-gray-950 transition-colors duration-300"
                    style={{ fontSize: 14 }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side: Support column */}
            <div>
              <h4 className="font-semibold text-gray-400 tracking-widest uppercase mb-4" style={{ fontSize: 11 }}>
                Support
              </h4>
              <div className="flex flex-col gap-3">
                {["Contact Us", "FAQ", "Shipping", "Returns"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-600 hover:text-gray-950 transition-colors duration-300"
                    style={{ fontSize: 14 }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left */}
            <p className="text-gray-500 w-full md:w-auto text-left" style={{ fontSize: 13 }}>
              &copy; 2026 Carrow Studio. All rights reserved.
            </p>
            {/* Center */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <a
                href="https://siddharthnegi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F26522] hover:text-[#e05a1a] transition-colors duration-300 font-medium text-center"
                style={{ fontSize: 13 }}
              >
                Made with ❤ by Siddharth Negi
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a
                href="mailto:hello@carrow.studio"
                className="text-gray-600 hover:text-gray-950 transition-colors duration-300 font-medium"
                style={{ fontSize: 13 }}
              >
                hello@carrow.studio
              </a>
            </div>
            {/* Right */}
            <div className="flex gap-4 w-full md:w-auto justify-end text-gray-500" style={{ fontSize: 13 }}>
              <a href="#" className="hover:text-gray-950 transition-colors duration-300">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-950 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

