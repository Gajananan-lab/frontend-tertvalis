import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  Check,
  CircleDollarSign,
  FileChartColumnIncreasing,
  Gauge,
  Layers3,
  MessageSquareText,
  Network,
  TrendingUp,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

const liveProductUrl = 'http://app.tertvalis.net';

const capabilities = [
  {
    number: '01',
    icon: BarChart3,
    title: 'See the shape of performance',
    description:
      'Bring multi-period actuals and approved budgets into a financial baseline your team can reason about. Understand where revenue, operating costs, and margins are heading together.',
    detail: 'Financial data management · Revenue & expense forecasting',
  },
  {
    number: '02',
    icon: Layers3,
    title: 'Compare the choices in front of you',
    description:
      'Build a Base Case, a Growth Case, and a Cost Reduction Case from the same starting point. Adjust operational drivers and see how each decision could shape the quarters ahead.',
    detail: 'Side-by-side scenarios · Driver-based planning',
  },
  {
    number: '03',
    icon: CircleDollarSign,
    title: 'Plan cash with the whole business in view',
    description:
      'Connect expected income, spending, and timing assumptions to a clearer view of runway and cash needs—so plans account for how the business actually operates.',
    detail: 'Cash flow planning · Runway & margin outlook',
  },
  {
    number: '04',
    icon: FileChartColumnIncreasing,
    title: 'Make variances easier to explain',
    description:
      'Bring forecast assumptions and actual results into one review. Give finance and leadership a clearer starting point for understanding line-item differences and deciding what deserves attention.',
    detail: 'Budget variance analysis · Decision-ready reviews',
  },
];

const workflow = [
  {
    number: '01',
    title: 'Bring the plan together',
    description:
      'Organize historical actuals, approved budgets, periods, and key business drivers into a consistent financial baseline.',
  },
  {
    number: '02',
    title: 'Explore what could change',
    description:
      'Adjust revenue, hiring, investment, or cost assumptions and compare alternative outcomes without losing sight of the baseline.',
  },
  {
    number: '03',
    title: 'Align around the next move',
    description:
      'Review projected results and variances together, then take a more informed financial view into planning conversations.',
  },
];

const roadmap = [
  {
    stage: 'Today',
    label: 'Planning foundations',
    icon: Check,
    description:
      'A product foundation for financial data management, forecasting, cash flow planning, scenario comparison, and budget variance review.',
    status: 'Current product direction',
  },
  {
    stage: 'Next horizon',
    label: 'Faster, richer forecasting',
    icon: Gauge,
    description:
      'Explore accelerated data preparation and model training with NVIDIA RAPIDS: cuDF for working with larger financial datasets and cuML for predictive forecasting experiments.',
    status: 'Planned exploration',
  },
  {
    stage: 'Longer horizon',
    label: 'Scaled intelligence',
    icon: BrainCircuit,
    description:
      'Evaluate specialized financial language models with NVIDIA NeMo for plain-language variance narratives and advisory workflows, alongside optimized inference through NVIDIA NIM and production serving with Triton as scale and readiness warrant.',
    status: 'Future direction',
  },
];

const roadmapTools = [
  { name: 'RAPIDS · cuDF · cuML', use: 'Accelerated data work & forecasting research' },
  { name: 'NeMo', use: 'Domain-adapted financial language models' },
  { name: 'NIM', use: 'Optimized, scalable model inference' },
  { name: 'Triton', use: 'Production model serving & orchestration' },
];

export const TertFinProductPage: React.FC = () => (
  <div className="overflow-hidden">
    <section className="relative isolate min-h-[620px] lg:min-h-[680px] flex items-center bg-[#070D28] pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-48 right-[-5%] h-[32rem] w-[32rem] rounded-full bg-[#076CF2]/25 blur-3xl" />
        <div className="absolute bottom-[-18rem] left-[18%] h-[34rem] w-[34rem] rounded-full bg-[#05F2AD]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,15,216,.18),transparent_55%),linear-gradient(0deg,#070D28,transparent_65%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/85">
              <span className="h-2 w-2 rounded-full bg-[#05F2AD] shadow-[0_0_14px_#05F2AD]" />
              Tertvalis Financial Intelligence
            </motion.div>
            <motion.h1 id="product-heading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }} className="mt-6 max-w-3xl font-heading text-4xl sm:text-5xl lg:text-[4.3rem] font-medium leading-[1.08] tracking-tight text-white">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C5D7FF] to-[#6CF2CB]">TertFin.</span><br />
              Plan with more of the picture.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.14 }} className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              Bring financial actuals, budgets, and business assumptions into a clearer view of what may come next. Compare scenarios, understand the tradeoffs, and give every planning conversation a stronger starting point.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.22 }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={liveProductUrl} className="inline-flex items-center justify-center gap-2 rounded-xs bg-white px-6 py-3.5 text-sm font-bold text-[#0D0D0D] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100">
                Explore the live product <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#product-capabilities" className="inline-flex items-center justify-center gap-2 rounded-xs border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                See what you can plan <ArrowDownRight className="h-4 w-4" />
              </a>
            </motion.div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#05F2AD]" /> Forecasting & cash planning</span>
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#05F2AD]" /> Side-by-side scenarios</span>
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#05F2AD]" /> Budget variance clarity</span>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.16 }} className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/15 bg-white/[0.08] p-4 shadow-2xl shadow-black/25 backdrop-blur-sm sm:p-5">
              <div className="flex items-center justify-between px-1 pb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Planning overview</p>
                  <p className="mt-1 font-heading text-base font-semibold text-white">A clearer view ahead</p>
                </div>
                <span className="rounded-full border border-[#05F2AD]/25 bg-[#05F2AD]/10 px-2.5 py-1 text-[10px] font-semibold text-[#70F6CD]">SCENARIO VIEW</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0B1436]/80 p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-slate-400"><span>Illustrative quarterly outlook</span><span>Planning view</span></div>
                <div className="mt-5 flex h-36 items-end gap-2 sm:gap-3" aria-label="Illustrative comparison of three scenario trends">
                  {[46, 56, 51, 68, 62, 76, 70, 86, 80, 96, 89, 100].map((height, index) => (
                    <div key={index} className="flex h-full flex-1 items-end gap-0.5">
                      <span className="w-full rounded-t-sm bg-[#5D78FF]/75" style={{ height: `${height * 0.66}%` }} />
                      <span className="hidden w-full rounded-t-sm bg-[#05F2AD]/80 sm:block" style={{ height: `${Math.min(height * 0.79, 96)}%` }} />
                      <span className="hidden w-full rounded-t-sm bg-[#8EA3BD]/55 md:block" style={{ height: `${height * 0.53}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[10px] text-slate-500"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                  {[
                    ['Base case', 'Steady view', 'bg-[#5D78FF]'],
                    ['Growth', 'Upside levers', 'bg-[#05F2AD]'],
                    ['Cost focus', 'Efficiency view', 'bg-[#8EA3BD]'],
                  ].map(([name, note, color]) => (
                    <div key={name} className="rounded-lg bg-white/[0.045] p-2.5">
                      <span className={`mb-2 block h-1 w-5 rounded-full ${color}`} />
                      <p className="text-[11px] font-semibold text-white">{name}</p>
                      <p className="mt-0.5 text-[9px] text-slate-500">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-center text-[10px] text-slate-500">Illustrative product concept · outcomes depend on business inputs and assumptions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section id="product-capabilities" className="scroll-mt-24 bg-[#FAFAFA] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="WHAT TERTFIN HELPS YOU DO" title="Make your financial plan useful in the moments that matter" subtitle="From the first consolidated view to a leadership decision, TertFin helps connect financial detail with the questions teams need to answer." />
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {capabilities.map(({ number, icon: Icon, title, description, detail }) => (
            <motion.article key={number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.4 }} className="group rounded-xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_45px_rgba(5,15,216,0.08)]">
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#050FD8]"><Icon className="h-5 w-5" /></span>
                <span className="font-mono-tabular text-xs text-slate-300">{number}</span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-[#0D0D0D]">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{description}</p>
              <p className="mt-5 border-t border-slate-100 pt-4 text-[11px] font-semibold tracking-wide text-[#475569]">{detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionHeading kicker="FROM INPUTS TO INSIGHT" title="A planning rhythm your whole team can follow" subtitle="TertFin gives finance and business leaders a shared path from the numbers they have to the decisions they need to make." />
            <div className="rounded-xl bg-brand-mesh-light p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#050FD8] shadow-sm"><MessageSquareText className="h-5 w-5" /></span>
                <div><p className="text-sm font-semibold text-[#0D0D0D]">A better conversation starts here</p><p className="mt-0.5 text-xs text-slate-600">Bring assumptions into the open before the review.</p></div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">What happens to cash runway if hiring moves forward a quarter? Which cost adjustments protect margin without slowing growth? Compare the possibilities while the choices are still yours to make.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {workflow.map(({ number, title, description }, index) => (
                <motion.div key={number} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.38, delay: index * 0.07 }} className="relative flex gap-4 sm:gap-5 rounded-xl border border-slate-200 bg-[#FAFAFA] p-5 sm:p-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue-gradient font-mono-tabular text-xs font-bold text-white shadow-md shadow-blue-900/15">{number}</div>
                  <div className="pt-0.5"><h3 className="font-heading text-lg font-semibold text-[#0D0D0D]">{title}</h3><p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#F4F7FC] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="BUILT AROUND FINANCE TEAMS" title="Clarity that travels across the business" subtitle="TertFin supports the people who create the plan, the leaders who weigh the tradeoffs, and the teams responsible for turning decisions into action." />
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: TrendingUp, title: 'Finance leaders', text: 'Bring budgets, forecasts, and cash outlooks into a more connected planning view. Spend less time reconciling disconnected versions and more time reviewing what changed.' },
            { icon: Network, title: 'Executive teams', text: 'Compare growth and cost choices with their financial implications visible. Create a common basis for discussing priorities, timing, and investment.' },
            { icon: Boxes, title: 'Department owners', text: 'See how operating assumptions relate to the wider financial plan. Make it easier to bring context to forecast updates and budget conversations.' },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-xl border border-slate-200/80 bg-white p-6 sm:p-7">
              <Icon className="h-6 w-6 text-[#076CF2]" />
              <h3 className="mt-5 font-heading text-lg font-semibold text-[#0D0D0D]">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="A THOUGHTFUL PATH FORWARD" title="From planning foundations to accelerated intelligence" subtitle="The roadmap builds from useful financial workflows toward larger-scale prediction and explanation—at a pace guided by product readiness and customer needs." />
        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {roadmap.map(({ stage, label, icon: Icon, description, status }, index) => (
            <article key={stage} className="relative rounded-xl border border-slate-200 bg-[#FAFAFA] p-6 sm:p-7">
              {index < roadmap.length - 1 && <div className="absolute -right-3 top-10 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 md:flex"><ArrowRight className="h-3.5 w-3.5" /></div>}
              <div className="flex items-center justify-between"><span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-[#050FD8]">{stage}</span><Icon className="h-5 w-5 text-[#076CF2]" /></div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-[#0D0D0D]">{label}</h3>
              <p className="mt-2.5 min-h-[7rem] text-sm leading-relaxed text-slate-600">{description}</p>
              <p className="mt-5 border-t border-slate-200 pt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">{status}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-blue-100 bg-gradient-to-r from-[#F7F9FF] to-[#F1FCFA] p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#050FD8]">Technology, in support of the work</p><p className="mt-2 text-sm leading-relaxed text-slate-600">These NVIDIA technologies are roadmap candidates for future exploration, not a statement of current deployment.</p></div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:min-w-[57%]">
              {roadmapTools.map(({ name, use }) => <div key={name} className="rounded-lg border border-slate-200/80 bg-white/80 p-3"><p className="text-xs font-bold text-[#0D0D0D]">{name}</p><p className="mt-1 text-[10px] leading-snug text-slate-500">{use}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#070D28] py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(7,108,242,.3),transparent_50%)]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto flex flex-col gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65EFC9]">A clearer plan starts with a conversation</p><h2 className="mt-3 font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">See your financial choices with more context.</h2><p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">Explore TertFin and bring a stronger view of the future into your next planning conversation.</p></div>
        <a href={liveProductUrl} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xs bg-white px-6 py-3.5 text-sm font-bold text-[#0D0D0D] transition hover:-translate-y-0.5 hover:bg-slate-100">Open TertFin <ArrowRight className="h-4 w-4" /></a>
      </div>
    </section>
  </div>
);
