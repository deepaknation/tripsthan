"use client";
import {useRef} from "react";import {motion,useScroll,useTransform,useSpring} from "framer-motion";import Img from "./Img";
export default function Parallax({img,alt="",quality,overlay,children,h="min-h-[70vh]",priority=false}){
const r=useRef(null);const {scrollYProgress:p}=useScroll({target:r,offset:["start start","end start"]});
const sp={stiffness:70,damping:22,mass:.5};
const y=useSpring(useTransform(p,[0,1],["-6%","22%"]),sp);const scale=useSpring(useTransform(p,[0,1],[1.12,1.3]),sp);
const cy=useSpring(useTransform(p,[0,1],[0,-90]),sp);const o=useTransform(p,[0,.8],[1,0]);
return(<section ref={r} className={`relative overflow-hidden bg-dark ${h} flex items-center`}>
<motion.div style={{y,scale}} className="absolute inset-[-8%]"><Img src={img} alt={alt} quality={quality} priority={priority} sizes="100vw" className="object-center"/></motion.div>
<div className={`absolute inset-0 ${overlay || "bg-gradient-to-t from-dark/85 via-dark/35 to-black/20 md:bg-gradient-to-r md:from-dark/75 md:via-dark/30 md:to-transparent"}`}/>
<motion.div style={{y:cy,opacity:o}} className="relative mx-auto w-full max-w-6xl px-5 py-24 text-white [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h1]:drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] [&_p]:text-white/95 [&_p]:drop-shadow">{children}</motion.div></section>)}
