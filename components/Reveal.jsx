"use client";
import {motion} from "framer-motion";
export default function Reveal({children,delay=0,className=""}){return <motion.div className={className} initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
