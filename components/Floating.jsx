import {C,tel,wa} from "@/lib/data";
export default function Floating(){return(<div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
<a href={wa} target="_blank" aria-label="WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-xl text-white shadow-card">💬</a>
<a href={tel(C.phones[0])} aria-label="Call" className="grid h-12 w-12 place-items-center rounded-full bg-saffron text-xl text-white shadow-card">📞</a></div>)}
