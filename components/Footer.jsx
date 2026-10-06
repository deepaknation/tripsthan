import Link from "next/link";import {C,tel} from "@/lib/data";
export default function Footer(){return(<footer className="bg-dark text-white/70"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
<div><img src="/logo.png" alt="TripSthan" className="h-16 w-auto rounded bg-white p-1"/><p className="mt-4 text-sm">Your gateway to India: unforgettable, memorable holiday experiences at reasonable prices.</p></div>
<div className="text-sm"><h4 className="mb-3 font-semibold text-white">Explore</h4>{[["About","/about"],["Tours & Packages","/tours"],["Car Hire","/cars"],["Gallery","/gallery"],["Contact","/contact"]].map(([n,h])=><Link key={h} href={h} className="block py-1">{n}</Link>)}</div>
<div className="text-sm"><h4 className="mb-3 font-semibold text-white">Contact</h4>{C.phones.map(p=><a key={p} href={tel(p)} className="block py-1">{p}</a>)}{C.emails.map(e=><a key={e} href={"mailto:"+e} className="block break-all py-1">{e}</a>)}<p className="py-1">{C.address}</p></div></div>
<p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} TripSthan. All rights reserved.</p></footer>)}
