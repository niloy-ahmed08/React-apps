import { useEffect, useRef } from "react";

export default function TestimonialSlider({ testimonials }) {
  const itemRefs = useRef([]);

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

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {testimonials.map((t, i) => (
        <div
          key={i}
          ref={(el) => (itemRefs.current[i] = el)}
          className="h-screen snap-start flex items-center justify-center opacity-40 scale-90 transition-all duration-700 ease-out"
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}