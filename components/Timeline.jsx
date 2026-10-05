"use client";
import {motion} from "framer-motion";
export default function Timeline({items}){return(
<ol className="relative mx-auto max-w-5xl">
<motion.span initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true}} transition={{duration:1.2}} style={{originY:0}} className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-line md:left-1/2"/>
{items.map(([t,d],i)=>{const left=i%2===0;return(
<li key={i} className={`relative pb-8 pl-12 md:w-1/2 md:pl-0 ${left?"md:pr-10":"md:ml-auto md:pl-10"}`}>
<motion.span initial={{scale:0}} whileInView={{scale:1}} viewport={{once:true}} transition={{type:"spring",delay:.15}} className={`absolute left-4 top-6 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-saffron text-sm font-bold text-white ring-4 ring-white ${left?"md:left-auto md:right-0 md:translate-x-1/2":"md:left-0"}`}>{i+1}</motion.span>
<motion.div initial={{opacity:0,x:left?-40:40}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.6,delay:.1}} className="card p-5">
<p className="text-sm font-semibold text-saffron">Day {i+1}</p><h3 className="text-lg">{t}</h3><p className="mt-2 text-sm">{d}</p></motion.div></li>)})}
</ol>)}
