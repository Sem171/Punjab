import { useEffect, useState } from 'react';
import { Nav, Preloader } from './sections/Chrome';
import Hero from './sections/Hero';
import Discover from './sections/Discover';
import Rivers from './sections/Rivers';
import Culture from './sections/Culture';
import Places from './sections/Places';
import Food from './sections/Food';
import Gallery from './sections/Gallery';
import Footer from './sections/Footer';
import { heroSlides } from './data/site';
import { useGlowPointer, useParallaxAll, useRevealAll } from './motion';

export default function App() {
  const [ready, setReady] = useState(false);

  useRevealAll();
  useParallaxAll();
  useGlowPointer();

  // Lift the curtain once the first hero frame is decoded, with a ceiling so slow networks aren't held hostage.
  useEffect(() => {
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        setTimeout(() => setReady(true), 350);
      }
    };
    const img = new Image();
    img.onload = finish;
    img.onerror = finish;
    img.src = heroSlides[0].photo.src;
    const cap = setTimeout(finish, 2200);
    return () => clearTimeout(cap);
  }, []);

  return (
    <>
      <Preloader done={ready} />
      <Nav />
      <main>
        <Hero ready={ready} />
        <Discover />
        <Rivers />
        <Culture />
        <Places />
        <Food />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
