"use client";
import Image from "next/image";import {useState} from "react";
export default function Img({src,alt="",sizes="(max-width:768px) 100vw,33vw",priority=false,className=""}){const [e,s]=useState(false);
return e?<div className="absolute inset-0 bg-gradient-to-br from-dark to-saffron/60"/>:<Image src={src} alt={alt} fill sizes={sizes} priority={priority} onError={()=>s(true)} className={`object-cover ${className}`}/>}
