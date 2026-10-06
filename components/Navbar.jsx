"use client";
import {useState} from "react";import Link from "next/link";import {C,tel} from "@/lib/data";
const L=[["Home","/"],["Tours & Packages","/tours"],["Car Hire","/cars"],["Gallery","/gallery"],["About","/about"],["Contact","/contact"]];
export default function Navbar(){const [o,s]=useState(false);return(<header className="sticky top-0 z-50 bg-[#F7EFE4]/95 backdrop-blur border-b border-[#EAE0D2]">
<div className="hidden bg-[#261E19] text-xs text-[#E8DFC8] md:block"><div className="mx-auto flex max-w-6xl justify-between px-5 py-1.5"><span>{C.phones.map((p,i)=><a key={p} href={tel(p)} className="mr-4 hover:underline">{p}</a>)}</span><span>{C.emails.join("  |  ")}</span></div></div>
<nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5">
<Link href="/"><img src="/logo.png" alt="TripSthan" className="h-12 w-auto"/></Link>
<ul className="hidden gap-7 text-sm font-medium text-ink md:flex">{L.map(([n,h])=><li key={h}><Link href={h}>{n}</Link></li>)}</ul>
<Link href="/contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-2 text-sm font-semibold text-white transition hover:brightness-90">Start Journey</Link>
<button aria-label="Menu" onClick={()=>s(!o)} className="grid h-10 w-10 place-items-center rounded-full bg-dark text-white md:hidden">{o?"✕":"☰"}</button></nav>
{o&&<ul className="space-y-1 border-t bg-white px-5 py-3 md:hidden">{L.map(([n,h])=><li key={h}><Link onClick={()=>s(false)} href={h} className="block py-2 font-medium text-ink">{n}</Link></li>)}<li className="pt-2 text-sm">{C.phones.map(p=><a key={p} className="block py-1 text-body" href={tel(p)}>{p}</a>)}</li></ul>}
</header>)}
