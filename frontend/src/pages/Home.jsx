import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import { TypewriterEffect } from "../components/ui/TypewriterEffect";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";

import linen1 from "../assets/linen1.jpg";
import linen2 from "../assets/linen2.jpg";
import linen3 from "../assets/linen3.jpg";
import linen4 from "../assets/linen4.jpg";
import linen5 from "../assets/linen5.jpg";
import linen6 from "../assets/linen6.jpg";
import linen7 from "../assets/linen7.jpg";
import linen8 from "../assets/linen8.jpg";
import linen9 from "../assets/linen9.jpg";
import linen10 from "../assets/linen10.jpg";
import linen11 from "../assets/linen11.jpg";
import linen12 from "../assets/linen12.jpg";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/DraggableCard/DraggableCard";

const typewriterWords = [
  { text: "Breezy ", className: "font-playfair" },
  { text: "layers. ", className: "font-playfair" },
  { text: "Clean ", className: "font-playfair" },
  { text: "lines. ", className: "font-playfair" },
  { text: "Linen, ", className: "font-playfair" },
  { text: "reimagined.", className: "font-playfair" },
];


const items = [
  { image: linen8, className: "absolute top-28 right-[25%] rotate-[-6deg]" },
  { image: linen9, className: "absolute top-16 left-[15%] rotate-[3deg]" },

  { image: linen11, className: "absolute top-36 left-[35%] rotate-[-4deg]" },
  { image: linen12, className: "absolute top-20 right-[30%] rotate-[6deg]" },
  { image: linen6, className: "absolute top-24 left-[45%] rotate-[-7deg]" },
  { image: linen7, className: "absolute top-8 left-[30%] rotate-[4deg]" },
  { image: linen1, className: "absolute top-10 left-[20%] rotate-[-5deg]" },
  { image: linen2, className: "absolute top-40 left-[25%] rotate-[-7deg]" },
  { image: linen3, className: "absolute top-5 left-[40%] rotate-[8deg]" },
];

const testimonials = [
  {
    quote:
      "Wearing August&Sage makes me feel composed and intentional. The textures are light yet grounded — a balance I’ve never found elsewhere. It’s effortless elegance stitched with care.",
    name: "Ira Malhotra",
    title: "Mumbai",
  },
  {
    quote:
      "I didn’t think clothes could feel poetic until I wore August&Sage. Each piece seems to carry silence, calm, and a story waiting to be told. It’s wearable mindfulness.",
    name: "Rehaan D’Souza",
    title: "Goa",
  },
  {
    quote:
      "Every time I wear one of their shirts, someone asks me where it's from. That’s the power of intentional design — it doesn’t shout, it resonates. Timeless beauty, season after season.",
    name: "Kavya Deshmukh",
    title: "Pune",
  },
  {
    quote:
      "This isn’t just fashion — it’s presence. The way each garment falls, breathes, and feels… it’s like I’ve slowed down without losing momentum. Thank you, August&Sage.",
    name: "Aditya Nair",
    title: "Bangalore",
  },
  {
    quote:
      "There’s honesty in every fold, every line, every thread. I’ve never felt more like myself than when dressed in August&Sage. It’s more than a brand — it’s a feeling.",
    name: "Leela Mathur",
    title: "Udaipur",
  },
  {
    quote:
      "It’s become my go-to for slow mornings and golden hour strolls. Their pieces don’t just fit — they belong. This brand is living art.",
    name: "Aryan Sehgal",
    title: "New Delhi",
  },
  {
    quote:
      "Wearing August&Sage makes me stand still in the best way. It grounds me while lifting my style. Nothing loud — just deeply intentional.",
    name: "Simran Kapadia",
    title: "Jaipur",
  },
  {
    quote:
      "My wardrobe feels transformed. I’ve never owned clothes that breathe with me like this. Minimal design, maximum impact.",
    name: "Rohan Gupta",
    title: "Chandigarh",
  },
  {
    quote:
      "As someone who usually hates dressing up, August&Sage changed that. I feel composed, comfortable, and honestly — kind of cinematic. It’s like wearing the mood I want to live in.",
    name: "Zara Menon",
    title: "Kochi",
  },
  {
    quote:
      "The quality? Impeccable. The style? Subtle and striking. The experience? Pure gratitude. I don’t just wear these pieces — I cherish them.",
    name: "Dev Arora",
    title: "Lucknow",
  },
];


const Home = () => {
  return (
    <div>
      <Hero />

      <TypewriterEffect words={typewriterWords} />

      <DraggableCardContainer className="relative flex min-h-[80vh] w-full items-center justify-center overflow-clip">
        {items.map((item, index) => (
          <DraggableCardBody key={index} className={item.className}>
            <img
              src={item.image}
              alt={`linen${index + 1}`}
              className="pointer-events-none relative z-10 w-[18rem] h-[30rem] object-cover border-[2px] border-gray-400 rounded-md"
            />
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>

      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
      <div className="bg-neutral-50 py-16">
        <InfiniteMovingCards items={testimonials} />
      </div>
    </div>
  );
};

export default Home;
