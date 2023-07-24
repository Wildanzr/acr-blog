import { Navbar, Banner, About } from "@/views";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <Navbar />
      <Banner />
      <About />
    </main>
  );
}
