import React from 'react'
import {motion} from 'framer-motion'
const UiUx = () => {

    const data = {
  title: "UI/UX Design",
  tagline: "User-friendly interfaces for mobile and web apps, designed to look great and feel effortless.",
  rating: "5.0",
  badge: "Open for new projects",
  overview:
    "I combine user research, wireframing and visual design to create interfaces people enjoy using. From the first sketch to a high-fidelity Figma prototype, every screen is planned around your users and your business goals, so developers can build it without guesswork.",
  stats: [
    { label: "Delivery", value: "4-10 Days" },
    { label: "Screens", value: "10-40" },
    { label: "Revisions", value: "3" },
    { label: "Handoff", value: "Figma", highlight: true },
  ],
  heroTags: ["Mobile App", "Web App", "Landing Page"],
  tools: ["Figma", "FigJam", "Photoshop", "Illustrator", "Notion"],
  features: [
    "User research and personas",
    "Wireframing and user flows",
    "High-fidelity UI design",
    "Interactive Figma prototypes",
    "Design systems and style guides",
    "Mobile and web app design",
    "Usability review and improvements",
    "Developer-ready handoff",
  ],
  process: [
    { title: "Research", desc: "I study your users, competitors and goals to find the real problems." },
    { title: "Wireframe", desc: "I map user flows and layouts so the structure works before any styling." },
    { title: "Visual Design", desc: "I add colors, typography and components in a consistent design system." },
    { title: "Prototype", desc: "I connect the screens into a clickable prototype you can test." },
    { title: "Handoff", desc: "You receive organized Figma files, assets and specs ready for development." },
  ],
  faqs: [
    { q: "What do I receive at the end?", a: "A complete Figma file with all screens, components, a style guide and exported assets." },
    { q: "Do you design for both mobile and web?", a: "Yes. I design responsive layouts for web as well as mobile app screens." },
    { q: "Can you redesign my existing website or app?", a: "Yes. I review what you have, find the weak points and improve the experience." },
    { q: "Can you also code the design?", a: "Yes. I build designs with React and Tailwind CSS, so design and development stay consistent." },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardStyle =
  "rounded-2xl bg-black p-8 mb-8 border border-white/10 shadow-[0_20px_60px_-15px_rgba(132,76,242,0.25)] transition-colors duration-300 hover:border-purple-500/40";

const cardAnim = {
  variants: fadeUp,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
};

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "tools", label: "Tools" },
  { id: "faq", label: "FAQ" },
];

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div>
       <div className="relative overflow-x-clip bg-[#150d1f] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/25 blur-[140px]" />
      <div className="pointer-events-none absolute top-20 -right-40 h-[400px] w-[400px] rounded-full bg-fuchsia-600/15 blur-[140px]" />

      {/* ---------- Hero ---------- */}
      <section className="relative py-20">
        <div className="container mx-auto grid grid-cols-2 items-center gap-12">
          {/* Left */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">★★★★★</span>
                <b className="text-white">{data.rating}</b>
              </span>
              <span className="h-5 w-px bg-white/20" />
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-purple-300">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                {data.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-6xl font-bold leading-tight text-transparent"
            >
              {data.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="mb-10 text-lg leading-8 text-gray-300">
              {data.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-4 gap-4">
              {data.stats.map((s) => (
                <div
                  key={s.label}
                  className={`rounded-xl border p-4 text-center ${
                    s.highlight
                      ? "border-purple-500/40 bg-purple-600/15"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    {s.label}
                  </p>
                  <p className="mt-2 text-xl font-bold">{s.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/60 via-[#1c1030] to-black p-10 shadow-[0_20px_60px_-15px_rgba(132,76,242,0.4)]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-purple-500/30 blur-[80px]" />
              <p className="text-2xl italic text-gray-300">Designing with</p>
              <h2 className="mt-2 text-5xl font-extrabold leading-tight">
                UX <span className="text-purple-400">UI</span> &<br />
                PRODUCT
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  DESIGN
                </span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {data.heroTags.map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      i === data.heroTags.length - 1
                        ? "bg-green-500 text-black"
                        : "border border-white/20 bg-white/10"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
              <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Tools I use
              </span>
              <div className="flex gap-2">
                {data.tools.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-lg bg-purple-600/30 px-3 py-1 text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Sticky Tabs ---------- */}
      <div className="sticky top-0 z-20 border-y border-white/10 bg-[#150d1f]/80 backdrop-blur">
        <div className="container mx-auto flex gap-2 py-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => goTo(t.id)}
              className="rounded-lg px-5 py-2 text-base font-medium text-gray-300 transition hover:bg-purple-600/20 hover:text-white"
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Main + Sidebar ---------- */}
      <div className="container relative mx-auto grid grid-cols-[1fr_380px] items-start gap-10 py-16">
        {/* Main column */}
        <div>
          {/* Overview */}
          <motion.section id="overview" {...cardAnim} className={`${cardStyle} scroll-mt-24`}>
            <h2 className="mb-4 text-3xl font-semibold">Overview</h2>
            <p className="mb-8 text-lg leading-8 text-gray-400">{data.overview}</p>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {data.features.map((f) => (
                <motion.li
                  key={f}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-base text-gray-200"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-purple-600/30 text-sm text-purple-300">
                    ✔
                  </span>
                  {f}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Process */}
          <motion.section id="process" {...cardAnim} className={`${cardStyle} scroll-mt-24`}>
            <h2 className="mb-8 text-3xl font-semibold">How I work</h2>
            <div className="relative flex flex-col gap-8">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500 to-transparent" />
              {data.process.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-5"
                >
                  <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-800 text-lg font-bold shadow-[0_0_25px_rgba(132,76,242,0.5)]">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-lg text-gray-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tools */}
          <motion.section id="tools" {...cardAnim} className={`${cardStyle} scroll-mt-24`}>
            <h2 className="mb-5 text-3xl font-semibold">Tools & Software</h2>
            <div className="flex flex-wrap gap-3">
              {data.tools.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ y: -4 }}
                  className="cursor-default rounded-full border border-purple-500/30 bg-purple-600/20 px-5 py-2 text-base"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section id="faq" {...cardAnim} className={`${cardStyle} mb-0 scroll-mt-24`}>
            <h2 className="mb-5 text-3xl font-semibold">FAQ</h2>
            <div className="flex flex-col gap-4">
              {data.faqs.map((item) => (
                <details key={item.q} className="group rounded-xl border border-white/10 bg-white/5 p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                    {item.q}
                    <span className="text-purple-400 transition group-open:rotate-90">›</span>
                  </summary>
                  <p className="mt-3 text-lg text-gray-400">{item.a}</p>
                </details>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="sticky top-24 rounded-2xl border border-white/10 bg-black p-6 shadow-[0_20px_60px_-15px_rgba(132,76,242,0.3)]"
        >
          <div className="mb-5 flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Taking new projects
          </div>

          <div className="mb-5 rounded-2xl border border-purple-500/40 bg-purple-600/10 p-5">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              What you get
            </p>
            <h3 className="mt-2 text-2xl font-bold">Full UI/UX Package</h3>
            <p className="mt-1 text-sm font-medium text-green-400">Research to final handoff</p>
            <p className="mt-3 text-sm text-gray-400">
              Wireframes, UI screens, prototype and design system in one Figma file.
            </p>
          </div>

          <button className="mb-3 w-full rounded-xl bg-gradient-to-r from-purple-600 to-purple-900 py-4 font-semibold transition hover:opacity-90">
            Let’s Contact with Me
          </button>
          <button className="w-full rounded-xl border border-white/15 py-4 font-semibold transition hover:bg-white/5">
            Get a Free Consultation
          </button>

          <ul className="mt-6 space-y-3 text-sm text-gray-300">
            {["Clean, organized Figma files", "Free minor revisions", "Fast communication"].map((x) => (
              <li key={x} className="flex gap-3">
                <span className="text-purple-400">✔</span>
                {x}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </div>
    </div>
  )
}

export default UiUx
