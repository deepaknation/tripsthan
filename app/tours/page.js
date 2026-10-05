import {img} from "@/lib/images";
import PackageCard from "@/components/PackageCard";import Parallax from "@/components/Parallax";import {packages} from "@/lib/data";
export const metadata={title:"Tours & Packages – TripSthan"};
export default function T(){return(<main><Parallax img={img("taj",1800)} priority h="min-h-[40vh]"><h1 className="text-4xl">Tours & Packages</h1></Parallax>
<div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">{packages.map((p,i)=><PackageCard key={p.slug} p={p} i={i%3}/>)}</div></main>)}
