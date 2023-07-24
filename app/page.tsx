import { Navbar, Banner, About, Research } from "@/views";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <Navbar />
      <Banner />
      <About />
      <Research />
    </main>
  );
}
