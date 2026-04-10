"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Citrus,
  Layers3,
  MessageSquareText,
  Radar,
  ShieldCheck,
  Sparkles,
  Wand2,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const highlights = [
  "Orchestrate specialised agents across product, support, operations, and growth.",
  "Connect every agent to your tools, approvals, and long-term context.",
  "Move from chat to execution with visible steps, outcomes, and review points.",
];

const agentRoles = [
  {
    name: "Watermelon",
    badge: "Execution",
    tagline: "Drives multi-step work from request to completed outcome.",
    description:
      "Use Watermelon for planning, tool use, task breakdown, and dependable follow-through across internal workflows.",
    accent: "from-slate-600 via-slate-700 to-slate-900",
    icon: Bot,
  },
  {
    name: "Bittermelon",
    badge: "Safety",
    tagline: "Reviews intent, risk, and failure paths before actions run.",
    description:
      "Use Bittermelon when a workflow needs challenge, validation, approvals, or stronger operational guardrails.",
    accent: "from-slate-500 via-slate-600 to-slate-700",
    icon: ShieldCheck,
  },
  {
    name: "Honeydew",
    badge: "Experience",
    tagline: "Handles customer-facing conversations with a calm product voice.",
    description:
      "Use Honeydew for onboarding, support, account guidance, and conversational experiences that should feel polished and patient.",
    accent: "from-slate-400 via-slate-500 to-slate-600",
    icon: MessageSquareText,
  },
  {
    name: "Cantaloupe",
    badge: "Creative",
    tagline: "Turns briefs into launch-ready content, campaigns, and assets.",
    description:
      "Use Cantaloupe for messaging, launch materials, landing pages, and the creative systems that support go-to-market execution.",
    accent: "from-slate-500 via-slate-600 to-slate-700",
    icon: Sparkles,
  },
];

const platformPillars = [
  {
    title: "Agent orchestration",
    text: "Route work to the right specialist, coordinate handoffs, and keep long-running tasks moving without losing context.",
    icon: Workflow,
  },
  {
    title: "Shared memory",
    text: "Give agents durable context about customers, systems, and prior decisions so they improve over time instead of starting from zero.",
    icon: Layers3,
  },
  {
    title: "Human control",
    text: "Decide which actions run automatically, which require review, and where approvals should interrupt execution.",
    icon: ShieldCheck,
  },
  {
    title: "Operational visibility",
    text: "Track what happened, why it happened, and which tools or inputs shaped the result.",
    icon: Radar,
  },
];

const rolloutSteps = [
  {
    title: "Define your agent roles",
    text: "Start with a small set of focused agents so each one has a clear job, tone, and decision boundary.",
  },
  {
    title: "Connect tools and knowledge",
    text: "Attach APIs, files, business rules, and memory so the system can act inside real workflows instead of staying in demo mode.",
  },
  {
    title: "Launch with oversight",
    text: "Begin with human review, measure quality, and gradually increase autonomy where the platform proves reliable.",
  },
];

function MelonOrb() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-[540px] items-center justify-center sm:h-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_58%)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-72 w-72 rounded-full border border-white/25 bg-linear-to-br from-slate-700 via-slate-900 to-slate-950 shadow-[0_30px_140px_rgba(15,23,42,0.16)] sm:h-84 sm:w-84"
      >
        <div className="absolute inset-4 rounded-full border border-white/20" />
        <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-8 rounded-full bg-linear-to-b from-slate-300 to-slate-100 blur-[1px]" />
        <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border-10 border-slate-400/50" />
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
        initial={{ opacity: 0, x: -18, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
        className="absolute left-0 top-10 rounded-3xl border border-white/20 bg-white/75 px-4 py-3 shadow-lg shadow-rose-100/60 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <Workflow className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Platform</p>
            <p className="text-sm font-semibold text-slate-900">Orchestration layer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 18, y: 18 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
        className="absolute right-1 bottom-14 rounded-3xl border border-white/20 bg-white/75 px-4 py-3 shadow-lg shadow-emerald-100/60 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Controls</p>
            <p className="text-sm font-semibold text-slate-900">Approvals and review</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.65, ease: "easeOut" }}
        className="absolute bottom-[16%] left-[12%] rounded-full border border-white/20 bg-white/80 p-4 text-slate-900 shadow-lg backdrop-blur-xl"
      >
        <BrainCircuit className="h-6 w-6" />
      </motion.div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200">
        <Citrus className="h-4 w-4" />
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(148,163,184,0.12),transparent_28%),linear-gradient(to_bottom,#f8fafc,rgba(248,250,252,0.96))]" />

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-950 text-white shadow-lg shadow-slate-300/20">
              <Citrus className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                Agent Platform
              </p>
              <p className="text-lg font-semibold tracking-tight text-slate-950">Melon AI</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#platform" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Platform
            </a>
            <a href="#agents" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Agents
            </a>
            <a href="#workflow" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Workflow
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <a href="#agents">View agent roles</a>
            </Button>
            <Button asChild variant="default" className="inline-flex items-center gap-2">
              <a href="#launch">
                Build with Melon AI
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur"
              >
                <Sparkles className="h-4 w-4" />
                Agent systems for teams that need more than a chatbot
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.65, ease: "easeOut" }}
                className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
              >
                Build reliable AI teammates with{" "}
                <span className="text-slate-950">
                  Melon AI
                </span>
                .
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.65, ease: "easeOut" }}
                className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
              >
                Melon AI is an agent platform for companies that want AI to do real work, not just generate responses. Design specialised agents, connect them to your systems, and run workflows with memory, oversight, and clear ownership.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.65, ease: "easeOut" }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Button asChild variant="default" className="inline-flex items-center gap-2">
                  <a href="#launch">
                    See the platform vision
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="inline-flex items-center gap-2">
                  <a href="#platform">
                    Explore capabilities
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.65, ease: "easeOut" }}
                className="mt-10 grid gap-3"
              >
                {highlights.map((item) => (
                  <Card key={item} className="flex items-start gap-3 p-4 text-slate-700 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-600" />
                    <p className="text-sm leading-6 sm:text-base">{item}</p>
                  </Card>
                ))}
              </motion.div>
            </div>

            <MelonOrb />
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-md border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_20px_80px_rgba(15,23,42,0.12)] sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                <BrainCircuit className="h-4 w-4" />
                Why Melon AI
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                A platform designed for agents that need structure, context, and trust.
              </h3>
              <p className="mt-5 text-base leading-7 text-white/70">
                Most AI products stop at conversation. Melon AI is aimed at the harder layer underneath: role design, orchestration, tooling, memory, and the controls teams need before autonomous work becomes operationally useful.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Deploy focused agents instead of one overloaded assistant.",
                  "Blend automation with review so autonomy can expand safely over time.",
                  "Build a system your team can inspect, trust, and improve.",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                    <p className="text-sm leading-6 text-white/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {platformPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                    className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                      {pillar.title}
                    </h4>
                    <p className="mt-3 text-base leading-7 text-slate-600">{pillar.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="agents" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Agent system"
            title="One platform, many specialised agents."
            text="Melon AI should feel like a coordinated team. Each agent has a clear role, a defined responsibility, and a reason to exist inside the wider platform."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {agentRoles.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
                >
                  <Card className="group relative overflow-hidden transition hover:-translate-y-1 hover:shadow-xl p-7">
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${agent.accent}`} />
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-md bg-linear-to-br ${agent.accent} text-white shadow-lg`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                      {agent.badge}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                      {agent.name} Agent
                    </h3>
                    <p className="mt-2 text-base font-medium text-slate-700">{agent.tagline}</p>
                    <p className="mt-4 text-base leading-7 text-slate-600">{agent.description}</p>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                    Designed for platform workflows
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Adoption path"
            title="A practical route from prototype to production."
            text="The strongest agent platforms are introduced in layers. Start narrow, prove value, and expand autonomy only where the system earns trust."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {rolloutSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                className="relative rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="launch" className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8 lg:pb-28">
          <div className="relative overflow-hidden rounded-md border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-[0_20px_100px_rgba(15,23,42,0.18)] sm:px-12 sm:py-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/20 blur-3xl" />
            <div className="absolute -bottom-20 left-20 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  <Wand2 className="h-4 w-4" />
                  The next step for Melon AI
                </div>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Build Melon AI as the operating layer for specialised AI agents.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                  The brand is memorable, but the product story now carries real weight: Melon AI helps teams design, coordinate, and govern agent workflows that can move work forward with clarity and control.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="#platform"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  Review platform pillars
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  See rollout path
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
