"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Globe,
  Layers3,
  MessageSquareText,
  Orbit,
  ShieldCheck,
  Sparkles,
  Wand2,
  Citrus,
} from "lucide-react";

const agents = [
  {
    name: "Watermelon Agent",
    tagline: "Your flagship multi-step execution agent.",
    description:
      "Built for planning, coordination, and autonomous task execution across your product, operations, and growth workflows.",
    accent: "from-rose-500 via-pink-500 to-red-500",
    badge: "Flagship",
    icon: Bot,
  },
  {
    name: "Bittermelon Agent",
    tagline: "The critical thinker in your agent lineup.",
    description:
      "Designed to challenge assumptions, inspect risk, and stress-test decisions before they hit production.",
    accent: "from-lime-500 via-emerald-500 to-green-600",
    badge: "Risk & Review",
    icon: ShieldCheck,
  },
  {
    name: "Honeydew Agent",
    tagline: "The calm interface for customer interaction.",
    description:
      "Ideal for support, onboarding, and conversational guidance with a softer brand voice and smooth workflows.",
    accent: "from-emerald-300 via-lime-300 to-green-400",
    badge: "CX",
    icon: MessageSquareText,
  },
  {
    name: "Cantaloupe Agent",
    tagline: "The creative operator for content and campaigns.",
    description:
      "A specialised agent for launching ideas, producing assets, and helping teams move from concept to release.",
    accent: "from-orange-400 via-amber-400 to-yellow-300",
    badge: "Creative",
    icon: Sparkles,
  },
];

const features = [
  {
    title: "Agent-first architecture",
    text: "Launch with a strong brand today, then expand naturally into a family of specialised agents tomorrow.",
    icon: Layers3,
  },
  {
    title: "Built to keep evolving",
    text: "Melon AI is positioned as a living platform, ready for orchestration, memory, tools, and role-based agents.",
    icon: Orbit,
  },
  {
    title: "Clear product narrative",
    text: "A distinctive naming system helps users understand each agent’s personality, purpose, and value at a glance.",
    icon: Brain,
  },
  {
    title: "Ready for global launch",
    text: "A modern Next.js and Tailwind foundation gives you speed, responsiveness, and room to scale the site.",
    icon: Globe,
  },
];

const steps = [
  {
    title: "Choose your agent",
    text: "Start with the right specialist for the task, from execution to review to communication.",
  },
  {
    title: "Connect tools and context",
    text: "Feed each agent the data, APIs, and instructions it needs to perform with clarity.",
  },
  {
    title: "Move from prompt to outcome",
    text: "Let Melon AI turn requests into measurable outputs, workflows, and decisions.",
  },
];

function MelonOrb() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-[520px] items-center justify-center sm:h-[500px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),transparent_60%)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-72 w-72 rounded-full border border-white/20 bg-gradient-to-br from-rose-400 via-pink-500 to-red-500 shadow-[0_25px_120px_rgba(244,63,94,0.35)] sm:h-80 sm:w-80"
      >
        <div className="absolute inset-4 rounded-full border border-white/20" />
        <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-8 rounded-full bg-gradient-to-b from-lime-300 to-green-500 blur-[1px]" />
        <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-emerald-400/90" />
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_28%),radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

        {[
          "left-[24%] top-[28%]",
          "left-[58%] top-[24%]",
          "left-[67%] top-[46%]",
          "left-[50%] top-[64%]",
          "left-[30%] top-[56%]",
        ].map((pos, index) => (
          <div
            key={index}
            className={`absolute ${pos} h-3.5 w-2.5 rotate-12 rounded-full bg-slate-900/80 shadow-sm`}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
        className="absolute -left-2 top-8 rounded-3xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:left-0"
      >
        <div className="flex items-center gap-3 text-black">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em]">Flagship</p>
            <p className="text-sm font-semibold">Watermelon Agent</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
        className="absolute -right-1 bottom-12 rounded-3xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 text-black">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em]">Guardrail</p>
            <p className="text-sm font-semibold">Bittermelon Agent</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-1/2 right-[10%] translate-y-24 rounded-full border border-white/15 bg-white/10 p-4 text-black backdrop-blur-xl"
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-medium text-emerald-700 backdrop-blur">
        <Citrus className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
    </div>
  );
}

export default function MelonAILandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fff8f6] text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(132,204,22,0.18),transparent_30%),linear-gradient(to_bottom,#fff8f6,rgba(255,248,246,0.92))]" />

      <header className="sticky top-0 z-40 border-b border-white/40 bg-[#fff8f6]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 text-white shadow-lg shadow-rose-500/25">
              <Citrus className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Official Site</p>
              <p className="text-lg font-semibold tracking-tight text-slate-900">Melon AI</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#agents" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Agents
            </a>
            <a href="#platform" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Platform
            </a>
            <a href="#launch" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Launch
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 sm:inline-flex">
              View roadmap
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
              Join waitlist
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur"
              >
                <Sparkles className="h-4 w-4" />
                A fresh brand for the next generation of AI agents
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.65, ease: "easeOut" }}
                className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
              >
                Meet <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Melon AI</span>, the home of intelligent agents with distinct personalities.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.65, ease: "easeOut" }}
                className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
              >
                Launch your official brand with a visually memorable melon-inspired identity today, then grow into a full ecosystem of specialised agents like Watermelon Agent, Bittermelon Agent, and more.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.65, ease: "easeOut" }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800">
                  Launch Melon AI
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                  Explore agents
                  <ChevronRight className="h-4 w-4" />
                </button>
              </motion.div>
            </div>

            <MelonOrb />
          </div>
        </section>

        <section id="agents" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Agent family"
            title="One brand. Many melon-coded specialists."
            text="Melon AI gives you a scalable naming system for a growing lineup of intelligent products, each with a clear function and a memorable identity."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${agent.accent}`} />
                  <div className="flex items-start justify-between gap-4">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${agent.accent} text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                      {agent.badge}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{agent.name}</h3>
                    <p className="mt-2 text-base font-medium text-slate-700">{agent.tagline}</p>
                    <p className="mt-4 text-base leading-7 text-slate-600">{agent.description}</p>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                    See role concept
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[36px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_20px_80px_rgba(15,23,42,0.2)] sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                <Cpu className="h-4 w-4" />
                Platform narrative
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                A playful visual world, grounded in real AI product ambition.
              </h3>
              <p className="mt-5 text-base leading-7 text-white/70">
                The melon theme gives Melon AI an ownable identity: organic, fresh, colourful, modular, and recognisable. It balances approachability with product seriousness, making the brand feel memorable without looking childish.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Distinct naming framework for future agents",
                  "Visual language built from rind, seeds, gradients, and soft organic shapes",
                  "Strong contrast between playful theme and premium product execution",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                    <p className="text-sm leading-6 text-white/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                    className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-rose-100 text-slate-900">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{feature.title}</h4>
                    <p className="mt-3 text-base leading-7 text-slate-600">{feature.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="How it works"
            title="From concept to agent ecosystem"
            text="Position Melon AI as a platform that begins with one polished launch page and expands into a complete agent-driven experience over time."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                className="relative rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="launch" className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8 lg:pb-28">
          <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-slate-900 px-8 py-12 text-white shadow-[0_20px_100px_rgba(15,23,42,0.28)] sm:px-12 sm:py-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/20 blur-3xl" />
            <div className="absolute -bottom-20 left-20 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  <Wand2 className="h-4 w-4" />
                  Ready to launch your official presence
                </div>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Melon AI is ready for a bold, memorable, modern debut.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                  Use this landing page as the brand foundation, then keep building your product, agents, and future pages around a consistent melon-driven identity system.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
                  Start building
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">
                  View brand system
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
