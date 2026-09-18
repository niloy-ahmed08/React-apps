import { useEffect, useRef, useState } from "react";

export default function TestimonialSlider({ testimonials }) {
  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "scale-100");
            entry.target.classList.remove("opacity-40", "scale-90");
          } else {
            entry.target.classList.remove("opacity-100", "scale-100");
            entry.target.classList.add("opacity-40", "scale-90");
          }
        });
      },
      { threshold: 0.6 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [testimonials]);
useEffect(() => {
  const el = containerRef.current;
  if (!el) return;

  // প্রথমে position জোর করে top এ নিয়ে আসো (event handler কল না করেই)
  el.scrollTop = 0;

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = el;
    setCanScrollUp(scrollTop > 10);
    setCanScrollDown(scrollTop + clientHeight < scrollHeight - 10);
  };

  el.addEventListener("scroll", handleScroll);
  return () => el.removeEventListener("scroll", handleScroll);
}, [testimonials]);
  return (
    <>
      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(14px); opacity: 1; }
        }
        @keyframes bounce-up {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-14px); opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.5); }
          50% { box-shadow: 0 0 0 12px rgba(168, 85, 247, 0); }
        }
        .scroll-hint-down {
          animation: bounce-down 1.4s ease-in-out infinite, pulse-glow 1.4s ease-in-out infinite;
        }
        .scroll-hint-up {
          animation: bounce-up 1.4s ease-in-out infinite, pulse-glow 1.4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative">
        {/* উপরের fade + arrow */}
        {canScrollUp && (
          <>
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0d0714] to-transparent z-10" />
            <div className="scroll-hint-up absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-purple-600/20 text-purple-400 text-3xl z-20">
              ↑
            </div>
          </>
        )}

        <div
          ref={containerRef}
          className="h-100 overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="h-100 snap-start flex items-center justify-center opacity-40 scale-90 transition-all duration-300 ease-out"
            >
              {t.content}
            </div>
          ))}
        </div>

        {/* নিচের fade + arrow */}
        {canScrollDown && (
          <>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0d0714] to-transparent z-10" />
            <div className="scroll-hint-down absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-purple-600/20 text-purple-400 text-3xl z-20">
              ↓
            </div>
          </>
        )}
      </div>
    </>
  );
}