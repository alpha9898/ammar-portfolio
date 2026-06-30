"use client";
import Cursor        from "@/components/ui/Cursor";
import CosmosCanvas  from "@/components/ui/CosmosCanvas";
import NavBar        from "@/components/ui/NavBar";
import Hero          from "@/components/sections/Hero";
import StatsBand     from "@/components/sections/StatsBand";
import Journey       from "@/components/sections/Journey";
import Stack         from "@/components/sections/Stack";
import Quote         from "@/components/sections/Quote";
import Projects      from "@/components/sections/Projects";
import Certs         from "@/components/sections/Certs";
import Contact       from "@/components/sections/Contact";
import Footer        from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <CosmosCanvas />
      <NavBar />
      <main>
        <Hero />
        <StatsBand />
        <Journey />
        <Stack />
        <Quote />
        <Projects />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
