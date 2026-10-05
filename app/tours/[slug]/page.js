import {notFound} from "next/navigation";import Parallax from "@/components/Parallax";import Reveal from "@/components/Reveal";import Timeline from "@/components/Timeline";import {packages,wa} from "@/lib/data";
export const generateStaticParams=()=>packages.map(p=>({slug:p.slug}));
export default function D({params}){const p=packages.find(x=>x.slug===params.slug);if(!p)notFound();return(<main>
<Parallax img={p.hero} priority h="min-h-[55vh]"><h1 className="text-3xl sm:text-5xl">{p.title}</h1><p className="mt-3 max-w-xl text-white/85">{p.overview}</p></Parallax>
<section className="mx-auto max-w-6xl px-5 py-14"><h2 className="mb-6 text-2xl">Tour Highlights</h2><p className="mb-6 max-w-3xl">Every tour includes private AC transport, an experienced driver and English-speaking local guides, with heritage walks, authentic local food stops and hotel upgrades available on request.</p>
<ul className="grid gap-3 sm:grid-cols-2">{p.highlights.map((h,i)=><Reveal key={h} delay={i*.08}><li className="card p-3 text-sm list-none">✓ {h}</li></Reveal>)}</ul>
<h2 className="mb-8 mt-14 text-center text-2xl text-ink">Day-by-Day Itinerary</h2><Timeline items={p.itinerary}/>
<div className="mt-10 text-center"><a href={wa} className="btn">Enquire on WhatsApp</a></div></section></main>)}
