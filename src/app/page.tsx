import { About } from "./about/about";
import { Gallery } from "./gallery/gallery";
import { Hero } from "./hero/hero";

export default function Home() {
  return (
<main>
      <Hero/>
      <About />
      <Gallery/>
    </main>
  );
};
