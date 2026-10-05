import {img} from "@/lib/images";
import Link from "next/link";import Parallax from "@/components/Parallax";import {Offers,Destinations,Why,Services,Testimonials} from "@/components/HomeSections";
export default function Home(){return(<main>
<Parallax img="/hero-taj-sunrise.jpg" alt="Taj Mahal at sunrise across the Yamuna river with a boatman" priority quality={95} h="min-h-[85vh]"><h1 className="!text-white text-4xl sm:text-6xl">Your Perfect India<br/><span className="text-saffron">Adventure Awaits</span></h1>
<p className="mt-4 max-w-md text-white/85">From the royal forts of Rajasthan to the wild jungles of Ranthambore, we craft journeys tailored just for you.</p>
<Link href="/tours" className="btn mt-8">Explore Packages</Link></Parallax>
<Offers/><Destinations/><section className="mx-auto max-w-3xl px-5 py-12 text-center"><h2 className="text-2xl">Golden Triangle Tour India, Planned Your Way</h2><p className="mt-3">Book a Private Delhi Agra Jaipur Cab with an English-speaking guide, heritage walks and optional luxury stays. Prefer the mountains? Choose a Himachal Holiday Package, or see the Taj in a day with our Same Day Taj Mahal Tour by Car.</p></section><Why/><Services/><Testimonials/>
<Parallax img={img("hawa",1800)} h="min-h-[50vh]"><h2 className="!text-white text-3xl sm:text-4xl">Ready to Explore India?</h2><p className="mt-2 text-white/85">Let's plan your dream trip today. Slots are filling fast for this season!</p><Link href="/contact" className="btn mt-6">Book Your Trip</Link></Parallax></main>)}
