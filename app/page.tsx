"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Database,
  Github,
  Layers,
  Linkedin,
  Mail,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";

const navItems = ["Home", "About", "Services", "Projects", "Experience", "Contact"];
const rotatingWords = ["Predictive Analytics", "Executive BI Dashboards", "Growth Intelligence"];

const techStack = ["Python", "SQL", "Power BI", "Tableau", "Databricks", "PySpark", "Streamlit", "Machine Learning", "Excel", "GitHub"];

const services = [
  { title: "Business Intelligence", icon: BarChart3, desc: "Interactive KPI dashboards and executive-ready reporting." },
  { title: "Data Engineering", icon: Database, desc: "Scalable pipelines for clean, trusted, and timely data." },
  { title: "Forecasting & ML", icon: TrendingUp, desc: "Predictive models for demand, churn, and revenue optimization." },
  { title: "Analytics Automation", icon: Workflow, desc: "Automated workflows that eliminate manual reporting overhead." },
];

const projects = [
  { name: "Retail Sales Intelligence Suite", tags: ["Power BI", "SQL"], impact: "+24% conversion uplift" },
  { name: "Customer Churn Prediction Engine", tags: ["Python", "ML"], impact: "18% churn reduction" },
  { name: "Supply Chain Delay Risk Monitor", tags: ["Databricks", "PySpark"], impact: "31% faster exception resolution" },
  { name: "Streamlit Executive Ops Cockpit", tags: ["Streamlit", "Excel"], impact: "40+ hrs/month saved" },
  { name: "Marketing Attribution Insight Hub", tags: ["Tableau", "GitHub"], impact: "2.1x campaign ROI clarity" },
];

const experiences = [
  { company: "Hurix Systems", role: "Data Analyst", period: "2024 - Present" },
  { company: "Unified Mentor", role: "Business Analytics Intern", period: "2023 - 2024" },
  { company: "GodSend Technology", role: "Data Science Trainee", period: "2023" },
  { company: "Flex India", role: "Operations Analyst Intern", period: "2022" },
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="font-bold tracking-tight">Arunprakash B</div>
          <ul className="hidden gap-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer transition hover:text-brand-600">{item}</li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/arun8nov" target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /></a>
            <a href="https://github.com/arun8nov" target="_blank" rel="noreferrer"><Github className="h-5 w-5" /></a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2" id="Home">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700"><Sparkles className="h-4 w-4" />Analytics Consultant</p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">Driving growth with <span className="bg-brand-gradient bg-clip-text text-transparent">{rotatingWords[wordIndex]}</span></h1>
          <p className="mt-5 max-w-xl text-slate-600">I help companies transform fragmented data into strategic decisions through business intelligence, analytics engineering, and applied machine learning.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-brand-gradient px-5 py-3 font-semibold text-white shadow-soft">Book Strategy Call</button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold">View Projects <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {["35+", "12", "92%"].map((kpi, idx) => <div key={kpi} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-glass"><p className="text-2xl font-bold">{kpi}</p><p className="text-xs text-slate-500">{["Dashboards", "Industries", "Client Retention"][idx]}</p></div>)}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} className="relative rounded-3xl border border-white/60 bg-white/70 p-8 shadow-soft backdrop-blur">
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-cyan-200/60 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-purple-200/60 blur-2xl" />
          <div className="space-y-4">
            <div className="animate-float rounded-2xl bg-slate-100 p-4">Weekly revenue trend: <span className="font-semibold text-green-600">+18.4%</span></div>
            <div className="animate-float rounded-2xl bg-slate-100 p-4 [animation-delay:1.2s]">Forecast confidence: <span className="font-semibold text-brand-700">94%</span></div>
            <div className="animate-float rounded-2xl bg-slate-100 p-4 [animation-delay:2s]">Pipeline health score: <span className="font-semibold text-violet-700">A+</span></div>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100/70 px-6 py-20" id="About"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div><h2 className="text-3xl font-bold">About Arunprakash B</h2><p className="mt-4 text-slate-600">Arunprakash is a results-focused analytics and BI professional specializing in turning operational complexity into executive clarity. His approach blends analytics strategy, dashboard storytelling, and scalable data foundations to deliver business impact.</p></div><div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-glass"><p className="font-semibold">Positioning</p><p className="mt-3 text-slate-600">Analytics / BI Partner for growth-stage and enterprise teams seeking measurable outcomes across sales, marketing, operations, and product performance.</p></div></div></section>

      <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-bold">Tech Stack</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{techStack.map((tech, i) => <motion.div key={tech} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-glass hover:-translate-y-1">{tech}</motion.div>)}</div></div></section>

      <section className="bg-slate-100/70 px-6 py-20" id="Services"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-bold">Services</h2><div className="mt-8 grid gap-6 md:grid-cols-2">{services.map((service) => <motion.article key={service.title} whileHover={{ y: -6 }} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-glass"><service.icon className="h-8 w-8 text-brand-600" /><h3 className="mt-4 text-xl font-semibold">{service.title}</h3><p className="mt-2 text-slate-600">{service.desc}</p><div className="mt-4 h-1 w-16 bg-brand-gradient opacity-60 transition group-hover:w-28" /></motion.article>)}</div></div></section>

      <section className="px-6 py-20" id="Projects"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-bold">Featured Projects</h2><div className="mt-8 grid gap-6 lg:grid-cols-2">{projects.map((project) => <motion.div key={project.name} whileHover={{ y: -4 }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-glass"><h3 className="text-xl font-semibold">{project.name}</h3><div className="mt-3 flex gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">{tag}</span>)}</div><p className="mt-4 text-slate-600">Impact: {project.impact}</p><button className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-700">View Case Study <ArrowRight className="h-4 w-4" /></button></motion.div>)}</div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{["$3.2M influenced revenue", "28% average process efficiency gain", "99.2% reporting accuracy"].map((stat) => <div key={stat} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold shadow-glass">{stat}</div>)}</div></div></section>

      <section className="bg-slate-100/70 px-6 py-20" id="Experience"><div className="mx-auto max-w-5xl"><h2 className="text-3xl font-bold">Experience Timeline</h2><div className="mt-8 space-y-6 border-l-2 border-brand-200 pl-6">{experiences.map((exp) => <motion.div key={exp.company} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 20 }} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-glass"><span className="absolute -left-[34px] top-7 h-4 w-4 rounded-full bg-brand-500" /><p className="font-semibold">{exp.role} · {exp.company}</p><p className="text-sm text-slate-500">{exp.period}</p></motion.div>)}</div></div></section>

      <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-bold">Testimonials</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{[1,2,3].map((item) => <div key={item} className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-500">Client testimonial placeholder #{item}</div>)}</div></div></section>

      <section className="bg-brand-gradient px-6 py-20 text-white" id="Contact"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div><h2 className="text-3xl font-bold">Let&apos;s build your next analytics advantage.</h2><p className="mt-3 text-white/90">Share your current BI or analytics challenge and I&apos;ll propose a focused roadmap.</p></div><form className="rounded-3xl bg-white/20 p-6 backdrop-blur"><div className="grid gap-4"><input placeholder="Your Name" className="rounded-xl border border-white/30 bg-white/90 px-4 py-3 text-slate-900" /><input placeholder="Your Email" className="rounded-xl border border-white/30 bg-white/90 px-4 py-3 text-slate-900" /><textarea placeholder="Tell me about your goals" className="h-28 rounded-xl border border-white/30 bg-white/90 px-4 py-3 text-slate-900" /><button className="rounded-xl bg-slate-900 px-5 py-3 font-semibold"><span className="inline-flex items-center gap-2">Send Message <Mail className="h-4 w-4" /></span></button></div></form></div></section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-slate-600"><p>© {new Date().getFullYear()} Arunprakash B. Data-driven decisions, designed for growth.</p><div className="flex items-center gap-3"><Building2 className="h-4 w-4" /> <Briefcase className="h-4 w-4" /> <Layers className="h-4 w-4" /></div></div></footer>
    </main>
  );
}
