import "./globals.css";import {Space_Grotesk,DM_Sans} from "next/font/google";
import Navbar from "@/components/Navbar";import Footer from "@/components/Footer";import Floating from "@/components/Floating";
const h=Space_Grotesk({subsets:["latin"],variable:"--f-head"});const b=DM_Sans({subsets:["latin"],variable:"--f-body"});
export const metadata={title:"TripSthan – Explore India Your Way",description:"Golden Triangle Tour India, Private Delhi Agra Jaipur Cab, Himachal Holiday Package and Same Day Taj Mahal Tour by Car.",keywords:["Golden Triangle Tour India","Private Delhi Agra Jaipur Cab","Himachal Holiday Package","Same Day Taj Mahal Tour by Car"]};
export default function R({children}){return(<html lang="en" className={`${h.variable} ${b.variable}`}><body><Navbar/>{children}<Footer/><Floating/></body></html>)}
