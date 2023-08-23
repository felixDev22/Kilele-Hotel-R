
import { Contact } from "./contact/contact";
import { Gallery } from "./gallery/gallery";
import { Hero } from "./hero/hero";

export default function Home() {
  return (
    <main className="overflow-y-scroll">
      <Hero />
  
      <Gallery />
      <Contact />
    </main>
  );
}
