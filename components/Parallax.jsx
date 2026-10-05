"use client";
import {useRef} from "react";import {motion,useScroll,useTransform,useSpring} from "framer-motion";import Img from "./Img";
export default function Parallax({img,alt="",quality,children,h="min-h-[70vh]",priority=false}){
const r=useRef(null);const {scrollYProgress:p}=useScroll({target:r,offset:["start start","end start"]});
const sp={stiffness:70,damping:22,mass:.5};
const y=useSpring(useTransform(p,[0,1],["-6%","22%"]),sp);const scale=useSpring(useTransform(p,[0,1],[1.12,1.3]),sp);
const cy=useSpring(useTransform(p,[0,1],[0,-90]),sp);const o=useTransform(p,[0,.8],[1,0]);
return(<section ref={r} className={`relative overflow-hidden bg-dark ${h} flex items-center`}>
<motion.div style={{y,scale}} className="absolute inset-[-8%]"><Img src={img} alt={alt} quality={quality} priority={priority} sizes="100vw"/></motion.div>
<div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/45 to-dark/10"/>
<motion.div style={{y:cy,opacity:o}} className="relative mx-auto w-full max-w-6xl px-5 py-24 text-white [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h1]:drop-shadow-lg [&_p]:text-white/90">{children}</motion.div></section>)}
