import Image from "next/image";
import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import Cards from "./Components/cards";

export default function Home() {
  return (
    <div className="bg-[#252B42]">
       <Navbar />
       <Hero />
       <Cards/>
    </div>
  );
}
