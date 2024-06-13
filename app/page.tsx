import Hero from "@/components/Hero";
import Informations from "@/components/Informations";

export default function Home() {
  return (
    <main className="relative bg-orange-50 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <Hero />
        <Informations />
      </div>
    </main>
  );
}
