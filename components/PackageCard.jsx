"use client";
import Link from "next/link";import Img from "./Img";import Reveal from "./Reveal";
export default function PackageCard({p,i=0}){return(<Reveal delay={i*.1} className="h-full"><Link href={"/tours/"+p.slug} className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
<div className="relative h-48 overflow-hidden"><Img src={p.img} alt={p.title} sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,25vw" className="transition duration-700 group-hover:scale-110"/><span className="absolute right-3 top-3 rounded-full bg-saffron px-3 py-1 text-xs font-semibold text-white">{p.days} {p.days>1?"Days":"Day"}</span></div>
<div className="flex flex-1 flex-col p-4"><h3 className="text-base text-ink">{p.title}</h3><p className="mt-1 line-clamp-3 flex-1 text-sm text-body">{p.overview}</p><p className="mt-3 text-sm text-body">From <b className="text-lg text-saffron">{p.price}</b></p></div></Link></Reveal>)}
