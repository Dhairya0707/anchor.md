"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Globe, 
  X, 
  Link2, 
  Package, 
  Terminal, 
  Copy, 
  Check, 
  Folder, 
  File, 
  ChevronRight, 
  Sparkles, 
  Cpu, 
  GitBranch, 
  ArrowRight, 
  Shield, 
  Layers, 
  Bot, 
  Menu,
  GitPullRequest,
  Heart
} from "lucide-react";

// ─── Constants & Data ──────────────────────────────────────────────────────────
const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4";

const AI_TOOLS = [
  "Cursor",
  "GitHub Copilot",
  "Claude",
  "ChatGPT",
  "Gemini",
  "Windsurf",
  "Zed AI",
  "VS Code",
  "Other",
];

const FEATURES = [
  {
    icon: Globe,
    title: "Model-Agnostic",
    desc: "Works with Claude, ChatGPT, Gemini, DeepSeek, Copilot — any AI with local file access.",
    badge: "Flexible"
  },
  {
    icon: Cpu,
    title: "Local-First",
    desc: "All files live in your repo. No cloud sync, no SaaS subscriptions, no data leaks.",
    badge: "100% Secure"
  },
  {
    icon: Layers,
    title: "Zero Lock-In",
    desc: "Plain markdown files. Read them, edit them, version-control them using standard Git.",
    badge: "Git Native"
  },
  {
    icon: Shield,
    title: "Multi-Agent Safe",
    desc: "Strict synchronization rules prevent race conditions in multi-agent environments.",
    badge: "Conflict Free"
  },
  {
    icon: Bot,
    title: "Role-Based Prompts",
    desc: "6 pre-built expert role prompts (Backend, Frontend, DevOps, QA, Designer, Security).",
    badge: "Expert AI"
  },
  {
    icon: GitBranch,
    title: "Instant Handoff",
    desc: "Switch AI models mid-task without repeating or losing a single context instruction.",
    badge: "Zero Friction"
  }
];

interface FileData {
  label: string;
  desc: string;
  content: string;
}

const FILES: Record<string, FileData> = {
  "@main.md": {
    label: "⚓ @main.md",
    desc: "The project's entry point. Fill this once with your tech stack, preferences, and architecture goals. The AI reads this first and uses it to bootstrap all other files.",
    content: `# ⚓ @main.md

## 🚀 PROJECT DETAILS
- **Project Name:** School ERP
- **Type:** Web App (SaaS)
- **Primary Tech Stack:** Next.js, Postgres, Prisma, Tailwind

## 📂 PROJECT STATUS
- [ ] New Project
- [x] Existing Project (Migrations pending)

## 🎯 KEY PREFERENCES
- Strict TypeScript & clean layout
- Modular, decoupled server actions`
  },
  "TODO.md": {
    label: "📋 TODO.md",
    desc: "The task tracker and roadmap. The AI reads this to know what is completed versus what's next, and auto-updates it after completing any task.",
    content: `# 📋 TODO.md

- [x] Core user auth system with session cookies
- [/] Database migrations for student records
- [ ] Fee payment gateway integration (Stripe)
- [ ] Email notifications template setup`
  },
  "TECH_STACK.md": {
    label: "⚙️ TECH_STACK.md",
    desc: "Specifies exact package versions, environments, database setups, and linting rules. Keeps the AI from recommending outdated or incompatible packages.",
    content: `# ⚙️ TECH_STACK.md

## 📦 DEPENDENCIES
- Next.js: ^15.0.0
- React: ^19.0.0
- Prisma: ^6.1.0
- TailwindCSS: ^4.0.0

## 🛠️ DEV ENVIRONMENT
- Node.js: >=18.0.0
- Package Manager: npm`
  },
  "CONTEXT_MEMORY.md": {
    label: "🧠 CONTEXT_MEMORY.md",
    desc: "Maintains a live snapshot of the AI's current session memory. It logs what was just built, why certain decisions were made, and context for the next turn.",
    content: `# 🧠 CONTEXT_MEMORY.md

- **Last Action:** Configured Prisma model for Student & Grade records.
- **Next Action:** Write the DB seeding script.
- **Key Decision:** Used composite index on (studentId, termId) for faster grade retrieval.`
  },
  "ARCHITECTURE.md": {
    label: "🏗️ ARCHITECTURE.md",
    desc: "Defines the system design, components flow, directory structure guidelines, and overall architecture map to prevent the AI from generating chaotic folder structures.",
    content: `# 🏗️ ARCHITECTURE.md

## 📂 DIRECTORY STRUCTURE
- \`/src/app/\` - Next.js App Router pages
- \`/src/components/\` - Reusable UI elements
- \`/src/lib/\` - Prisma client, utils, auth helper functions

## 🔁 SYSTEM FLOW
Client UI -> React Server Actions -> DB`
  }
};

const STEPS = [
  {
    num: "01",
    title: "Quick Install",
    desc: "Run the single-line command in your repository root. This copies the lightweight template folder."
  },
  {
    num: "02",
    title: "Bootstrap @main.md",
    desc: "Fill in your stack, preferences, and project guidelines inside the main entrypoint file."
  },
  {
    num: "03",
    title: "Tag in Chat",
    desc: "Tag @main.md or the role prompts in Cursor, Claude, or Copilot. The AI instantly consumes your repository rules."
  },
  {
    num: "04",
    title: "AI Auto-Syncs",
    desc: "The AI updates TODO.md and CONTEXT_MEMORY.md as it writes code, maintaining perfect state."
  }
];

const COMMANDS = {
  init: {
    desc: "Scaffolds the standard anchor.md/ folder structure and configures your project's .gitignore file automatically.",
    terminal: `🚀 Initializing anchor.md context system...
Added anchor.md/ to .gitignore
Created .gitignore and added anchor.md/

✅ anchor.md system initialized successfully!
Created context directory at: ./anchor.md`
  },
  export: {
    desc: "Aggregates all markdown files in anchor.md/ into a single share-to-ai.md file so you can drag-and-drop it into ChatGPT, Claude Projects, or Gemini.",
    terminal: `📦 Gathering anchor.md context files...

✅ share-to-ai.md generated successfully! (10 files bundled)
Added share-to-ai.md to .gitignore

💡 Next Steps:
1. Upload share-to-ai.md or copy its contents.
2. Paste it in your web-based AI assistant (Gemini/ChatGPT/Claude).
3. Prompt: "Read this context file to understand my project state."`
  },
  status: {
    desc: "Performs diagnostic health checks on context files, audits checklist progress from TODO.md, and lists active status summaries.",
    terminal: `🔍 Running diagnostics on anchor.md context...

📁 Context Files Status:
  [✅] @main.md - Present (6061 bytes)
  [✅] TECH_STACK.md - Present (3210 bytes)
  [✅] ARCHITECTURE.md - Present (5554 bytes)
  [✅] TODO.md - Present (3875 bytes)
  [✅] CONTEXT_MEMORY.md - Present (6272 bytes)

📋 Active Roadmap (TODO.md):
  - Completed:   24
  - In Progress: 2
  - Remaining:   4

✨ Diagnostics complete!`
  }
};





// ─── AI Chat Simulation Component ──────────────────────────────────────────────

type MsgRole = "user" | "ai-bad" | "ai-good" | "system" | "code" | "terminal";
interface SimMsg { role: MsgRole; text: string; label?: string; }

const SCENARIOS: {
  id: string;
  tab: string;
  emoji: string;
  title: string;
  subtitle: string;
  outcome: { ok: boolean; text: string };
  messages: SimMsg[];
}[] = [
  {
    id: "problem",
    tab: "The Problem",
    emoji: "🧠",
    title: "AI Amnesia — Every. Single. Session.",
    subtitle: "Without anchor.md, your AI resets to zero on every new chat.",
    outcome: { ok: false, text: "❌ 15+ minutes lost re-explaining. Bad stack decision made." },
    messages: [
      { role: "system", text: "— New chat session started. All previous context wiped. —" },
      { role: "user", text: "Build the billing checkout page for our app." },
      { role: "ai-bad", text: "Sure! Quick question — what's your tech stack?", label: "⚠️ Forgot" },
      { role: "user", text: "Next.js + Supabase + Stripe. I explained this yesterday." },
      { role: "ai-bad", text: "Got it! And what's your orders table schema?", label: "⚠️ Forgot" },
      { role: "user", text: "😤 I already shared that last session..." },
      { role: "ai-bad", text: "I don't have access to previous sessions. Can you paste the schema?", label: "⚠️ Forgot" },
      { role: "ai-bad", text: "Also — are you using Prisma or raw SQL? Which auth library?", label: "⚠️ Hallucinating" },
    ],
  },
  {
    id: "new-project",
    tab: "New Project",
    emoji: "🚀",
    title: "Bootstrap a new project in 60 seconds.",
    subtitle: "Run one command, fill your rules once. Your AI is ready forever.",
    outcome: { ok: true, text: "✅ AI built the entire auth module correctly on the first try — zero follow-up questions." },
    messages: [
      { role: "terminal", text: "$ npx create-anchor-md\n✅ Created anchor.md/ folder\n✅ Generated @main.md, TODO.md, CONTEXT_MEMORY.md\n✅ Added to .gitignore" },
      { role: "system", text: "— Fill your tech stack & rules into anchor.md/@main.md —" },
      { role: "system", text: "— Open Cursor / Claude. Tag @main.md in your first message. —" },
      { role: "user", text: "@main.md Build the user authentication module." },
      { role: "ai-good", text: "📋 Reading @main.md — loading project context...", label: "✅ Context loaded" },
      { role: "ai-good", text: "Got it. Next.js 15 + Supabase Auth + TypeScript strict mode. Building now:", label: "✅ Perfect stack match" },
      { role: "code", text: "// auth/actions.ts — matches your Supabase setup\nexport async function signIn(email: string, pass: string) {\n  const { data, error } = await supabase.auth.signInWithPassword(\n    { email, password: pass }\n  );\n  if (error) throw new AppError(error.message);\n  return data.session;\n}" },
    ],
  },
  {
    id: "existing-project",
    tab: "Existing Project",
    emoji: "📂",
    title: "Plug into your existing codebase.",
    subtitle: "Already mid-project? Initialize and let the AI audit your current state.",
    outcome: { ok: true, text: "✅ AI mapped the full codebase. TODO.md filled. Context saved for every future session." },
    messages: [
      { role: "terminal", text: "$ npx create-anchor-md\n✅ Initialized in existing project root\n✅ Scaffolded anchor.md/ alongside your source" },
      { role: "user", text: "@main.md Audit this codebase and fill in the context files." },
      { role: "ai-good", text: "📋 Scanning project structure...", label: "✅ Running audit" },
      { role: "ai-good", text: "📋 Writing DATABASE_SCHEMA.md from your Prisma models...", label: "✅ Auto-documenting" },
      { role: "ai-good", text: "📋 Writing CONTEXT_MEMORY.md — capturing current progress...", label: "✅ Memory saved" },
      { role: "ai-good", text: "📋 Writing TODO.md — 3 features in progress, 7 remaining.", label: "✅ Roadmap built" },
      { role: "system", text: "— anchor.md context synced. Every future AI session starts here. —" },
    ],
  },
  {
    id: "new-chat",
    tab: "New Chat, Zero Loss",
    emoji: "💬",
    title: "Tag @main.md once. Whole session aligned.",
    subtitle: "Start a fresh chat, tag @main.md once, and your AI remembers everything.",
    outcome: { ok: true, text: "✅ New session. Zero re-explaining. AI continued exactly where you left off." },
    messages: [
      { role: "system", text: "— Brand new chat session (Day 12 of development) —" },
      { role: "user", text: "@main.md Continue from where we left off. Add subscription tier logic." },
      { role: "ai-good", text: "📋 @main.md loaded — full context ready.", label: "✅ Instant recall" },
      { role: "ai-good", text: "I see from CONTEXT_MEMORY.md you finished auth module on Day 11.", label: "✅ Remembers history" },
      { role: "ai-good", text: "TODO.md shows 'Subscription Tiers' is next. DB has a plan_tier enum on users.", label: "✅ Knows your schema" },
      { role: "ai-good", text: "Building tier-gated middleware now — Pro, Growth, Free, matching your Stripe price IDs:", label: "✅ Correct stack" },
      { role: "code", text: "// middleware/withPlan.ts\nexport function withPlan(plan: 'free' | 'pro' | 'growth') {\n  return (req: NextRequest) => {\n    const userPlan = req.headers.get('x-plan-tier');\n    if (userPlan !== plan) redirect('/upgrade');\n  };\n}" },
    ],
  },
];

function ChatBubble({ msg, isAlt }: { msg: SimMsg; isAlt: boolean }) {
  if (msg.role === "terminal") {
    return (
      <div className="w-full bg-black border border-white/10 rounded-xl p-4 font-mono text-[11px] text-green-400 whitespace-pre leading-relaxed">
        {msg.text}
      </div>
    );
  }
  if (msg.role === "code") {
    return (
      <div className="w-full bg-slate-900 border border-indigo-500/20 rounded-xl p-4 font-mono text-[11px] text-indigo-200 whitespace-pre leading-relaxed">
        {msg.text}
      </div>
    );
  }
  if (msg.role === "system") {
    return (
      <div className="text-center text-[10px] text-white/30 font-mono py-1">
        {msg.text}
      </div>
    );
  }
  const isUser = msg.role === "user";
  const isBad = msg.role === "ai-bad";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} gap-2.5`}>
      {!isUser && (
        <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold mt-0.5 ${
          isBad ? "bg-red-900/60 text-red-300" : "bg-indigo-900/60 text-indigo-300"
        }`}>
          {isBad ? "AI" : "⚓"}
        </div>
      )}
      <div className="flex flex-col gap-1" style={{ maxWidth: "80%" }}>
        {msg.label && (
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full self-start ${
            isBad ? "text-red-400 bg-red-500/10" : "text-indigo-400 bg-indigo-500/10"
          }`}>
            {msg.label}
          </span>
        )}
        <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-slate-700 text-white rounded-br-sm"
            : isBad
              ? "bg-slate-800 text-red-100 rounded-bl-sm border border-red-500/15"
              : "bg-indigo-950/70 text-indigo-50 rounded-bl-sm border border-indigo-500/20"
        }`}>
          {msg.text}
        </div>
      </div>
      {isUser && (
        <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold mt-0.5 bg-slate-700 text-white">
          U
        </div>
      )}
    </div>
  );
}

function AIChatSimulation() {
  const [activeTab, setActiveTab] = useState(0);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scenario = SCENARIOS[activeTab];
  const msgs = scenario.messages;

  const selectTab = (i: number) => {
    setActiveTab(i);
    setStep(0);
    setPlaying(true);
  };

  // Auto-start on scroll into view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setPlaying(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Advance messages with role-aware delays
  useEffect(() => {
    if (!playing || step >= msgs.length) return;
    const prevRole = step > 0 ? msgs[step - 1].role : null;
    const delay = step === 0 ? 400
      : prevRole === "terminal" ? 1400
      : prevRole === "code" ? 1200
      : 850;
    const t = setTimeout(() => setStep(s => s + 1), delay);
    return () => clearTimeout(t);
  }, [playing, step, msgs]);

  // Scroll chat to bottom
  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [step]);

  const isFinished = step >= msgs.length;
  const showTyping = playing && step < msgs.length && step > 0 &&
    msgs[step]?.role !== "system" && msgs[step]?.role !== "terminal";

  return (
    <section ref={sectionRef} className="py-24 border-t border-white/5 px-4" style={{ background: "linear-gradient(180deg, #0a0a14 0%, #0c0e1a 100%)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Live Demo
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-5 tracking-tight">
            See it work. <span className="text-indigo-400">Right now.</span>
          </h2>
          <p className="mt-4 text-white/50 text-base sm:text-lg max-w-xl mx-auto">
            Watch how anchor.md changes every stage of your AI workflow — from setup to daily use.
          </p>
        </div>

        {/* Scenario Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {SCENARIOS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => selectTab(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <span>{s.emoji}</span>
              <span>{s.tab}</span>
            </button>
          ))}
        </div>

        {/* Main simulation window */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50" style={{ background: "#0d0f1a" }}>

          {/* Window chrome */}
          <div className="flex items-center justify-between px-5 py-3 bg-slate-900/80 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[11px] font-mono text-white/30">{scenario.emoji} {scenario.tab}</span>
            <div>
              {isFinished ? (
                <span className="text-[10px] font-mono text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">● Done</span>
              ) : playing ? (
                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded-full animate-pulse">● Playing</span>
              ) : (
                <span className="text-[10px] font-mono text-white/20 px-2 py-0.5 rounded-full">● Ready</span>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-[260px_1fr]">
            {/* Left sidebar */}
            <div className="border-r border-white/5 p-6 flex flex-col gap-6" style={{ background: "#08090f" }}>
              <div>
                <div className="text-3xl mb-3">{scenario.emoji}</div>
                <h3 className="font-bold text-white text-sm leading-snug">{scenario.title}</h3>
                <p className="text-white/40 text-xs mt-2 leading-relaxed">{scenario.subtitle}</p>
              </div>

              <div className="space-y-1.5">
                <p className="text-[10px] font-mono text-white/25 uppercase tracking-widest mb-3">Scenarios</p>
                {SCENARIOS.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => selectTab(i)}
                    className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all ${
                      activeTab === i ? "bg-indigo-600/30 text-indigo-200 border border-indigo-500/30" : "text-white/40 hover:text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <span>{s.emoji}</span>
                    <span className="leading-tight">{s.tab}</span>
                  </button>
                ))}
              </div>

              {isFinished && (
                <div className={`mt-auto p-3 rounded-xl text-xs leading-relaxed ${
                  scenario.outcome.ok
                    ? "bg-indigo-500/10 border border-indigo-500/20 text-indigo-200"
                    : "bg-red-500/10 border border-red-500/20 text-red-200"
                }`}>
                  {scenario.outcome.text}
                </div>
              )}
            </div>

            {/* Right — chat area */}
            <div className="flex flex-col">
              <div
                ref={chatRef}
                className="flex-1 overflow-y-auto p-6 flex flex-col gap-4"
                style={{ minHeight: "460px", maxHeight: "460px" }}
              >
                {msgs.slice(0, step).map((msg, i) => (
                  <div key={i} style={{ animation: "fadeSlideIn 0.3s ease both" }}>
                    <ChatBubble msg={msg} isAlt={activeTab !== 0} />
                  </div>
                ))}
                {showTyping && (
                  <div className="flex justify-start gap-2.5">
                    <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${
                      activeTab === 0 ? "bg-red-900/60 text-red-300" : "bg-indigo-900/60 text-indigo-300"
                    }`}>
                      {activeTab === 0 ? "AI" : "⚓"}
                    </div>
                    <div className={`px-4 py-3 rounded-2xl rounded-bl-sm border ${
                      activeTab === 0 ? "bg-slate-800 border-red-500/15" : "bg-indigo-950/70 border-indigo-500/20"
                    }`}>
                      <div className="flex gap-1 items-center">
                        <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${activeTab === 0 ? "bg-red-400/60" : "bg-indigo-400/70"}`} style={{ animationDelay: "0ms" }} />
                        <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${activeTab === 0 ? "bg-red-400/60" : "bg-indigo-400/70"}`} style={{ animationDelay: "150ms" }} />
                        <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${activeTab === 0 ? "bg-red-400/60" : "bg-indigo-400/70"}`} style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Progress bar + controls */}
              <div className="px-6 py-3 border-t border-white/5 flex items-center justify-between gap-4 bg-slate-900/40">
                <div className="flex items-center gap-1.5 flex-1">
                  {msgs.map((_, i) => (
                    <span
                      key={i}
                      className={`transition-all duration-300 rounded-full flex-shrink-0 ${
                        i < step
                          ? (activeTab === 0 ? "w-2 h-2 bg-red-400" : "w-2 h-2 bg-indigo-400")
                          : "w-1.5 h-1.5 bg-white/15"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-[10px] text-white/30 font-mono">{Math.min(step, msgs.length)}/{msgs.length} messages</div>
                {isFinished ? (
                  <button
                    onClick={() => { setStep(0); setPlaying(true); }}
                    className="text-[11px] text-white/40 hover:text-white font-mono transition-colors"
                  >
                    ↺ Replay
                  </button>
                ) : !playing ? (
                  <button
                    onClick={() => setPlaying(true)}
                    className="text-[11px] text-indigo-400 hover:text-indigo-300 font-mono transition-colors"
                  >
                    ▶ Play
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs font-mono mt-6">
          Click any tab to explore each scenario →{" "}
          <a href="#install" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
            or run npx create-anchor-md now
          </a>
        </p>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

const PROMPTS = [
  {
    id: "new-project",
    tab: "1. New Project",
    title: "Kick off a fresh repository",
    desc: "Use this prompt when bootstrapping a brand new app. It directs the AI to read your rough ideas in @anchor.md/main.md and ask 3-5 critical clarifying questions about the architecture before code is written.",
    promptText: `Read my rough idea and tech preferences inside @anchor.md/main.md.  idea : [here is given else ask from user].

Before you generate the rest of the workspace or write any code, analyze the project's type, scale, and requirements. Ask me 3-5 critical, tailored questions about the tech stack, auth library, database schema, or target constraints so we can align first.`
  },
  {
    id: "existing-project",
    tab: "2. Existing Codebase",
    title: "Inject memory into current project",
    desc: "Use this prompt when introducing anchor.md to an already active project. It tells the AI to read your codebase rules in anchor.md/main.md, scan your project structure, and generate the rest of the context files.",
    promptText: `We are setting up anchor.md in our existing project. 

Audit the current codebase, then read @anchor.md/main.md and follow it.`
  },
  {
    id: "new-session",
    tab: "3. New Chat Session",
    title: "Avoid context drift in new chats",
    desc: "Use this prompt at the start of any new session or when switching AI models. It immediately aligns the model with your active workspace rules and task history by reading anchor.md/main.md.",
    promptText: `Let's start a fresh chat session. Read @anchor.md/main.md to load the project rules, DB schema, decisions, latest progress in CONTEXT_MEMORY.md, and next items in TODO.md.

Once loaded, tell me what feature we are working on next according to TODO.md.`
  }
];

function QuickStartPrompts() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text", err);
    }
  };

  const selected = PROMPTS[activeTab];

  return (
    <section className="py-24 border-t border-white/5 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            <Sparkles className="w-3 h-3 animate-pulse" />
            Developer Workflows
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight text-white">
            Primary AI Prompts
          </h2>
          <p className="mt-3 text-white/50 text-sm sm:text-base max-w-xl mx-auto">
            Get 100x efficiency immediately. Copy these pre-built workflows directly into Cursor, Claude, ChatGPT, or Gemini.
          </p>
        </div>

        <div className="bg-slate-900/20 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.05)] backdrop-blur-md">
          {/* Tabs Container */}
          <div className="flex border-b border-white/5 bg-slate-950/40 p-2.5 gap-2 flex-wrap">
            {PROMPTS.map((p, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => { setActiveTab(idx); setCopied(false); }}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/15"
                      : "bg-transparent border-transparent text-white/40 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white" : "bg-white/20"}`} />
                  {p.tab}
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-8 flex flex-col gap-6">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                {selected.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/40 leading-relaxed">
                {selected.desc}
              </p>
            </div>

            {/* Prompt terminal wrapper */}
            <div className="rounded-2xl border border-white/10 bg-slate-950 overflow-hidden flex flex-col shadow-inner">
              {/* Terminal top bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-white/30 font-mono ml-2">prompt.txt</span>
                </div>
                
                <button
                  onClick={() => handleCopy(selected.promptText)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold font-mono border transition-all duration-200 cursor-pointer ${
                    copied
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 scale-105"
                      : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy Prompt"}
                </button>
              </div>

              {/* Terminal prompt content */}
              <div className="p-5 overflow-x-auto">
                <pre className="font-mono text-xs sm:text-sm text-indigo-200/90 whitespace-pre-wrap leading-relaxed select-all">
                  {selected.promptText}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SocialBtn Helper ──────────────────────────────────────────────────────────
function SocialBtn({
  href,
  bg,
  color,
  children,
}: {
  href: string;
  bg: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity ${bg} ${color}`}
    >
      {children}
    </a>
  );
}

// ─── Main Landing Page ─────────────────────────────────────────────────────────
export default function LandingPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFile, setActiveFile] = useState<string>("@main.md");
  const [activeCmd, setActiveCmd] = useState<'init' | 'export' | 'status'>('init');
  const [subEmail, setSubEmail] = useState("");
  const [subbed, setSubbed] = useState(false);
  const [subbing, setSubbing] = useState(false);

  const toggleTool = (tool: string) => {
    setSelected((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  const trackEvent = (action: string, category: string, label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", action, {
        event_category: category,
        event_label: label,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const mailEndpoint = process.env.NEXT_PUBLIC_MAIL_API_URL || "https://mailservice-five.vercel.app/api/contact/anchor.md";

    try {
      const response = await fetch(mailEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: `Selected Tools: ${selected.join(", ") || "None"}\n\nMessage:\n${message}`,
        }),
      });

      if (response.ok) {
        setSent(true);
        trackEvent("submit_contact", "form", name);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Failed to submit form. Please check your network connection.");
    } finally {
      setSending(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("npx create-anchor-md").then(() => {
      setCopied(true);
      trackEvent("copy_cli", "engagement", "npx create-anchor-md");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubbing(true);
    const mailEndpoint = process.env.NEXT_PUBLIC_MAIL_API_URL || "https://mailservice-five.vercel.app/api/contact/anchor.md";
    const emailToSub = subEmail;

    try {
      const response = await fetch(mailEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: emailToSub,
          message: "Requesting newsletter/update subscription for anchor.md",
        }),
      });

      if (response.ok) {
        setSubbed(true);
        setSubEmail("");
        trackEvent("subscribe_newsletter", "form", emailToSub);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Failed to subscribe. Please check your network connection.");
    } finally {
      setSubbing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden bg-grid-pattern">
      {/* Schema.org markup for SEO, AEO, and GEO optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "anchor.md",
            "operatingSystem": "All",
            "applicationCategory": "DeveloperApplication",
            "description": "A lightweight, local-first AI context system that travels with your repo. Switch models, IDEs, and team members without losing context.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      {/* ─── HERO SECTION WITH VIDEO CARD ─── */}
      <header className="p-3 sm:p-4 md:p-6">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)] flex flex-col justify-between p-4 sm:p-6 md:p-8">
          
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            src={VIDEO_URL}
          />

          {/* Dark overlay with linear gradient top-to-bottom for better legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

          {/* ── Navbar ── */}
          <nav className="relative z-10 flex items-center justify-between">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl pl-3 sm:pl-4 pr-2 py-2 flex items-center justify-between gap-3 sm:gap-6 w-full sm:w-auto">
              {/* Logo */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-lg leading-none">⚓</span>
                <span className="font-bold text-white text-sm tracking-tight">
                  anchor.md
                </span>
              </div>

              {/* Nav links */}
              <div className="hidden sm:flex items-center gap-6">
                {[
                  { label: "Why anchor.md?", href: "#problem" },
                  { label: "Features", href: "#features" },
                  { label: "Open Source", href: "#contributing" },
                  { label: "Workflow", href: "#workflow" },
                  { label: "Blog", href: "/blog" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/80 text-sm font-medium hover:text-white transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={handleCopy}
                className="ml-auto bg-white text-black text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                {copied ? "Copied! ✓" : "Get Started"}
              </button>
            </div>
          </nav>

          {/* ── Hero Center / Bottom Content ── */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-12 lg:mt-auto">
            {/* Headline and CLI Input Widget */}
            <div className="lg:max-w-xl xl:max-w-2xl shrink-0 flex flex-col gap-6">
              <div>
                <h1 className="text-white text-4xl sm:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-tight drop-shadow-xl">
                  Stop AI Amnesia.
                  <br />
                  A permanent memory{" "}
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                    className="text-indigo-300"
                  >
                    layer.
                  </span>
                </h1>
                <p className="mt-4 text-white/70 text-base sm:text-lg font-normal drop-shadow max-w-md">
                  Make your agentic AI work like a 100x more effective developer. Maintain a local, permanent memory of database schemas, code conventions, completed milestones, and future tasks—100% offline in your repository.
                </p>
              </div>

              {/* Interactive terminal code widget */}
              <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-md shadow-2xl relative group">
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[10px] text-white/40 font-mono ml-2">bash</span>
                  </div>
                  <span className="text-[10px] text-indigo-400 font-mono font-semibold uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded-full">
                    Copy Command
                  </span>
                </div>
                <div 
                  onClick={handleCopy}
                  className="flex items-center justify-between gap-4 font-mono text-sm sm:text-base text-indigo-200 cursor-pointer select-none py-1 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-indigo-500 shrink-0">$</span>
                    <span className="truncate">npx create-anchor-md</span>
                  </div>
                  <button className="p-2 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-lg transition-all active:scale-95 shrink-0">
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* ── Contact Form Card ── */}
            <div className="w-full lg:w-[400px] xl:w-[440px] shrink-0">
              <div className="bg-white text-slate-950 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-5 sm:p-6 flex flex-col gap-4">
                {!sent ? (
                  <>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      Get Updates & Support
                    </h2>

                    {/* Email + socials row */}
                    <div className="flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2.5">
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs text-gray-400">Open an issue</span>
                        <a
                          href="https://github.com/Dhairya0707/anchor.md/issues"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 font-semibold hover:underline text-sm truncate"
                        >
                          github.com/anchor.md
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <SocialBtn
                          href="https://github.com/Dhairya0707/anchor.md"
                          bg="bg-gray-100"
                          color="text-gray-800"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </SocialBtn>
                        <SocialBtn
                          href="https://www.npmjs.com/package/create-anchor-md"
                          bg="bg-red-50"
                          color="text-red-500"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 7.334v8h6.666v-1.333H2.666v-5.334h5.334v6.667H12v-8H0zm13.333 0v8H20v-8h-6.667zm5.333 6.666H14.667v-5.333H18.67v5.333zM21.333 7.334v8H24v-8h-2.667z"/>
                          </svg>
                        </SocialBtn>
                        <SocialBtn
                          href="http://linkedin.com/in/dhairya-darji-072428284/"
                          bg="bg-blue-50"
                          color="text-blue-600"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </SocialBtn>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-gray-400 font-medium text-xs">OR FEEDBACK</span>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                          placeholder="Full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          aria-label="Full name"
                          required
                        />
                        <input
                          type="email"
                          className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          aria-label="Email address"
                          required
                        />
                      </div>

                      <textarea
                        rows={3}
                        className="text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition resize-none"
                        placeholder="How are you using anchor.md? What would make it better?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        aria-label="Your message or feedback"
                        required
                      />

                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                          I use anchor.md with...
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {AI_TOOLS.map((tool) => (
                            <button
                              key={tool}
                              type="button"
                              onClick={() => toggleTool(tool)}
                              aria-pressed={selected.includes(tool)}
                              className={`text-[10px] font-semibold px-2 py-1.5 rounded-lg border transition-all ${
                                selected.includes(tool)
                                  ? "bg-slate-900 text-white border-slate-900"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                              }`}
                            >
                              {tool}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-60 cursor-pointer"
                      >
                        {sending ? "Sending..." : "Send my message"}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl text-green-600 font-bold">
                      ✓
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">
                      You&apos;re all set!
                    </h3>
                    <p className="text-xs text-gray-500 text-center">
                      Thanks for reaching out. Let&apos;s build awesome context layers.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── WHY ANCHOR.MD / THE PROBLEM SECTION ─── */}
      <section id="problem" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-indigo-500/10 rounded-full">
            The Amnesia Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
            Stop your AI from forgetting context mid-session
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg">
            Starting a new chat wipes all context. Stale decisions lead to database errors and stack mismatch hallucinations. anchor.md provides a permanent local memory layer.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { value: "99% Faster", label: "Context Handoff", desc: "10 mins → 2 seconds using @main.md" },
            { value: "85% Saved", label: "Context Tokens", desc: "No wasted context window repetitions" },
            { value: "95% Onboarding Cut", label: "Time-to-Context", desc: "Instant codebase setup alignment" },
            { value: "99% Fewer", label: "Npm Build Errors", desc: "Strictly matches TECH_STACK.md rules" }
          ].map((m, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 text-center flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">{m.value}</span>
              <span className="text-xs sm:text-sm font-semibold text-white/95 mt-1">{m.label}</span>
              <span className="text-[11px] text-white/50 mt-1 leading-normal">{m.desc}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without anchor.md */}
          <div className="bg-slate-900/50 border border-red-500/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-red-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-3xl rounded-full" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 font-bold">
                ✕
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Without anchor.md</h3>
              <ul className="space-y-3.5 text-white/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">▪</span>
                  <span>New sessions wipe all context, forcing you to repeat database schemas and styles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">▪</span>
                  <span>AI forgets past decisions, writing code with the wrong libraries or deprecated stack versions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">▪</span>
                  <span>Hallucinations run rampant as the model tries to guess your project boundaries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">▪</span>
                  <span>No sync between your IDE agent and web-based chats like ChatGPT or Gemini web apps.</span>
                </li>
              </ul>
            </div>
            <p className="mt-8 text-xs text-red-400/80 font-mono">Status: Repetitive & Leaky</p>
          </div>

          {/* With anchor.md */}
          <div className="bg-gradient-to-br from-indigo-950/20 to-slate-900 border border-indigo-500/25 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-indigo-500/40 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-3xl rounded-full" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white mb-3">With anchor.md</h3>
              <ul className="space-y-3.5 text-white/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-0.5">▪</span>
                  <span>A permanent local memory layer that persists details across every session.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-0.5">▪</span>
                  <span>Your AI works like an elite employee who remembers every schema, roadmap step, and guideline.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-0.5">▪</span>
                  <span>100% offline context storage directly inside your repository—no SaaS fees or data leaks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-0.5">▪</span>
                  <span>Zero tool lock-in: seamlessly export and load latest updates to browser-based AI chats.</span>
                </li>
              </ul>
            </div>
            <p className="mt-8 text-xs text-indigo-400 font-mono">Status: Standardized & Versioned</p>
          </div>
        </div>
      </section>

      <AIChatSimulation />

      <QuickStartPrompts />

      {/* ─── KEY FEATURES GRID ─── */}
      <section id="features" className="py-20 bg-slate-950 border-t border-white/5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-indigo-500/10 rounded-full">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
              Standardizing AI development context
            </h2>
            <p className="mt-4 text-white/60 text-base sm:text-lg">
              No databases, no SaaS fees. Just raw Markdown files organized with absolute precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={i}
                  className="bg-slate-900/40 border border-white/5 hover:border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 transition-all mb-6">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <span className="text-[10px] font-mono bg-white/5 border border-white/5 text-white/60 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {feature.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTRIBUTING SECTION ─── */}
      <section id="contributing" className="py-24 border-t border-white/5 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/3 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-widest font-semibold px-4 py-1.5 bg-rose-500/10 rounded-full border border-rose-500/20">
              <Heart className="w-3 h-3" />
              Open Source
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-5 tracking-tight">
              Built in the open. <span className="text-rose-400">By the community.</span>
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              anchor.md is open-source (MIT) and welcomes contributions of all kinds — whether it&apos;s the CLI, context templates, or the website itself.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <a
              href="https://github.com/Dhairya0707/anchor.md/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900/40 border border-white/5 hover:border-rose-500/30 hover:bg-rose-500/5 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
                <GitPullRequest size={18} />
              </div>
              <h3 className="font-bold text-white text-sm mb-1.5">Contribution Guide</h3>
              <p className="text-white/50 text-xs leading-relaxed">
                Learn how to set up the project locally, submit PRs, and follow our conventions.
              </p>
            </a>

            <a
              href="https://github.com/Dhairya0707/anchor.md/blob/main/CONTRIBUTING.md#cli-package-create-anchor-md"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900/40 border border-white/5 hover:border-rose-500/30 hover:bg-rose-500/5 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
                <Terminal size={18} />
              </div>
              <h3 className="font-bold text-white text-sm mb-1.5">CLI Package</h3>
              <p className="text-white/50 text-xs leading-relaxed">
                Improve the core npm package — init, export, status commands, install script, and more.
              </p>
            </a>

            <a
              href="https://github.com/Dhairya0707/anchor.md/blob/main/CONTRIBUTING.md#website-anchor-mdwebapp"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900/40 border border-white/5 hover:border-rose-500/30 hover:bg-rose-500/5 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
                <Globe size={18} />
              </div>
              <h3 className="font-bold text-white text-sm mb-1.5">Website & Docs</h3>
              <p className="text-white/50 text-xs leading-relaxed">
                Fix typos, improve the landing page, add blog posts, or enhance documentation.
              </p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/Dhairya0707/anchor.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-rose-500/30 text-white px-5 py-2.5 rounded-xl text-sm font-mono transition-all group"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>Star on GitHub</span>
            </a>
            <a
              href="https://github.com/Dhairya0707/anchor.md/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 text-sm font-mono transition-colors group"
            >
              <span>Browse issues</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE FILE TREE EXPLORER ─── */}
      <section id="explorer" className="py-20 bg-slate-900/30 border-t border-white/5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-indigo-500/10 rounded-full">
              File Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
              Inside the anchor.md directory
            </h2>
            <p className="mt-4 text-white/60 text-base sm:text-lg">
              Select any file in the structure to view its purpose and typical Markdown layout structure.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch bg-slate-950/60 border border-white/15 rounded-3xl p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto shadow-2xl">
            {/* Sidebar tree (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <Folder className="text-indigo-400" size={18} />
                <span className="font-mono text-sm font-semibold tracking-tight">project-root/</span>
              </div>

              {/* Subfolder list */}
              <div className="flex flex-col gap-1.5 pl-4 border-l border-white/5 font-mono text-sm">
                <div className="flex items-center gap-2 text-indigo-300 py-1 font-semibold">
                  <Folder size={16} />
                  <span>anchor.md/</span>
                </div>

                {/* Markdown Files inside anchor.md */}
                <div className="flex flex-col gap-1 pl-4">
                  {Object.keys(FILES).map((filename) => {
                    const isActive = activeFile === filename;
                    return (
                      <button
                        key={filename}
                        onClick={() => setActiveFile(filename)}
                        className={`flex items-center gap-2 text-left py-1.5 px-3 rounded-xl transition-all ${
                          isActive 
                            ? "bg-indigo-500/10 text-indigo-300 border-l-2 border-indigo-400 pl-2" 
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <File size={14} />
                        <span className="truncate">{filename}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Editor preview (7 cols) */}
            <div className="lg:col-span-7 flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-slate-950">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-indigo-500/20" />
                  <span className="font-mono text-xs text-white/70">{FILES[activeFile].label}</span>
                </div>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold font-mono">
                  Preview
                </span>
              </div>

              {/* Description */}
              <div className="p-4 bg-indigo-500/5 border-b border-white/5">
                <p className="text-xs sm:text-sm text-indigo-200/90 leading-relaxed">
                  {FILES[activeFile].desc}
                </p>
              </div>

              {/* Code window */}
              <pre className="flex-1 p-4 font-mono text-xs sm:text-sm text-white/80 overflow-y-auto leading-relaxed bg-slate-950 max-h-[300px] lg:max-h-[350px]">
                <code>{FILES[activeFile].content}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLI COMMANDS REFERENCE ─── */}
      <section id="install" className="py-20 bg-slate-900/10 border-t border-white/5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-indigo-500/10 rounded-full">
              CLI Utility
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
              Manage context with simple commands
            </h2>
            <p className="mt-4 text-white/60 text-base sm:text-lg">
              Run commands directly in your project root to align your local state or bundle files for web AI assistants.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Command selectors (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
              {(Object.keys(COMMANDS) as Array<keyof typeof COMMANDS>).map((cmdKey) => {
                const isActive = activeCmd === cmdKey;
                const cmdInfo = COMMANDS[cmdKey];
                return (
                  <button
                    key={cmdKey}
                    onClick={() => setActiveCmd(cmdKey)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-indigo-500/10 border-indigo-500/30 text-white shadow-[0_0_15px_rgba(99,102,241,0.05)]"
                        : "bg-slate-900/10 border-white/5 text-white/70 hover:border-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-indigo-400" : "bg-white/20"}`} />
                      <h3 className="font-bold text-base font-mono text-white">
                        {cmdKey === "init" ? "npx create-anchor-md" : `create-anchor-md ${cmdKey}`}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed pl-3.5">
                      {cmdInfo.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Interactive Terminal (7 cols) */}
            <div className="lg:col-span-7 flex flex-col border border-white/15 rounded-2xl overflow-hidden bg-slate-950 shadow-2xl min-h-[300px]">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-white/40 font-mono ml-2">bash</span>
                </div>
                <span className="text-[10px] text-indigo-400 font-mono font-semibold uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded-full">
                  Terminal Output
                </span>
              </div>

              {/* Terminal Code Window */}
              <pre className="flex-1 p-5 font-mono text-xs sm:text-sm text-indigo-200/90 overflow-y-auto leading-relaxed bg-slate-950 max-h-[350px]">
                <div className="flex items-center gap-2 text-white/40 mb-3 select-none">
                  <span>$</span>
                  <span className="text-indigo-400 font-semibold">
                    {activeCmd === "init" ? "npx create-anchor-md" : `npx create-anchor-md ${activeCmd}`}
                  </span>
                </div>
                <code>{COMMANDS[activeCmd].terminal}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORKFLOW TIMELINE ─── */}
      <section id="workflow" className="py-20 bg-slate-950 border-t border-white/5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-indigo-500/10 rounded-full">
              Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
              Get going in four simple steps
            </h2>
            <p className="mt-4 text-white/60 text-base sm:text-lg">
              Set it up in minutes. The system integrates naturally with whatever IDE chat tool you prefer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {STEPS.map((step, i) => (
              <div key={i} className="relative bg-slate-900/30 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors">
                <div>
                  <span className="text-3xl font-extrabold text-indigo-500/20 font-mono block mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPATIBILITY STATEMENT BANNER ─── */}
      <section className="py-20 bg-slate-900/10 border-t border-white/5 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-950/30 to-slate-950 border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />
          
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-indigo-500/10 rounded-full">
            Universal Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-4 tracking-tight text-white">
            Works with any AI agent & environment
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            If your development environment or AI assistant has the ability to read, reference, or attach local files, it fully supports <span className="text-white font-semibold">anchor.md</span> out of the box. No custom extensions, configuration, or plugins needed.
          </p>
        </div>
      </section>

      {/* ─── BOTTOM CTA SECTION ─── */}
      <section className="py-20 bg-gradient-to-t from-slate-950 to-indigo-950/20 border-t border-white/5 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-indigo-500/10 rounded-full">
            Bootstrap Context Now
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Stop starting from scratch
          </h2>
          <p className="text-white/70 max-w-lg mx-auto text-sm sm:text-base">
            Keep your AI aligned on requirements, packages, schemas, and guidelines across every branch and commit.
          </p>

          {/* Large terminal widget */}
          <div className="bg-slate-950 border border-white/15 rounded-2xl p-4 w-full max-w-lg shadow-2xl relative group my-4 text-left">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-white/40 font-mono ml-2">bash</span>
              </div>
              <span className="text-[10px] text-white/40 font-mono">Main command</span>
            </div>
            <div 
              onClick={handleCopy}
              className="flex items-center justify-between gap-4 font-mono text-sm sm:text-base text-white cursor-pointer select-none py-1.5"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-indigo-500 shrink-0">$</span>
                <span className="text-indigo-200 truncate font-semibold">npx create-anchor-md</span>
              </div>
              <button className="p-2.5 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-all active:scale-95 shrink-0 flex items-center gap-2 font-sans text-xs font-semibold">
                {copied ? (
                  <>
                    <Check size={14} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a 
              href="https://github.com/Dhairya0707/anchor.md"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden bg-slate-900 border border-indigo-500/30 hover:border-indigo-400 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            >
              <span className="text-yellow-400 group-hover:scale-125 transition-transform duration-300">★</span>
              <span className="text-white">Star anchor.md on GitHub</span>
              <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/25 ml-1">
                stargazers
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER SUBSCRIBE SECTION ─── */}
      <section className="py-16 bg-slate-950/20 border-t border-white/5 px-4 text-center">
        <div className="max-w-2xl mx-auto bg-slate-900/30 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-3xl rounded-full" />
          
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
            Subscribe to anchor.md updates
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mb-6 max-w-md mx-auto">
            Get notified about new role prompts, template updates, CLI releases, and core AI development workflows.
          </p>

          {!subbed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                aria-label="Newsletter email address"
                className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-white"
              />
              <button
                type="submit"
                disabled={subbing}
                className="bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all cursor-pointer active:scale-95 whitespace-nowrap"
              >
                {subbing ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          ) : (
            <div className="text-green-400 text-sm font-semibold flex items-center justify-center gap-2">
              <span>✓ Thanks for subscribing! You&apos;re on the list.</span>
            </div>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/5 py-12 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚓</span>
            <span className="font-bold text-white text-sm">anchor.md</span>
          </div>

          <p className="text-xs text-white/40 md:order-last">
            &copy; {new Date().getFullYear()} anchor.md. Built for developers. MIT License.
          </p>

          <div className="flex items-center gap-6">
            <a 
              href="https://www.npmjs.com/package/create-anchor-md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              npm package
            </a>
            <a 
              href="https://github.com/Dhairya0707/anchor.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              github repo
            </a>
            <a 
              href="https://github.com/Dhairya0707/anchor.md/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              contributing
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
