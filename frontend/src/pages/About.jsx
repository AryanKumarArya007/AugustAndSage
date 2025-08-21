import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";

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

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.aboutUsImg}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6  md:w-2/4 text-gray-600">
          <p>
            At August & Sage, we believe that clothing is more than just fabric
            — it’s a reflection of individuality, grace, and timeless beauty.
            Our brand was born out of a desire to blend classic aesthetics with
            a modern, thoughtful approach to fashion. Every piece we create is
            designed to feel effortless yet distinctive, combining elegance with
            comfort for those who value style that lasts beyond seasons.
          </p>
          <p>
            The name August & Sage captures the essence of our philosophy.
            "August" symbolizes warmth, creativity, and quiet confidence, while
            "Sage" reflects wisdom, simplicity, and grounded beauty. Together,
            they represent our commitment to crafting garments that balance
            contemporary design with a sense of enduring charm.
          </p>
          <p>
            For those who seek beauty in simplicity and confidence in
            authenticity, August & Sage offers more than clothing — it offers a
            way of being. Wear warmth. Wear wisdom. Wear August & Sage.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at August & Sage is to create timeless, thoughtfully
            crafted clothing that empowers individuals to embrace their unique
            style with confidence and ease. We are committed to designing pieces
            that blend simplicity with sophistication, offering lasting quality
            over fleeting trends. Guided by principles of sustainability,
            authenticity, and mindful living, we aim to inspire a wardrobe that
            reflects personal values while honoring the beauty of effortless,
            everyday elegance.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At August & Sage, we promise exceptional quality with every piece,
            crafted from premium, carefully sourced materials. Each product
            undergoes strict quality checks to ensure timeless style and lasting
            durability.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shopping with August & Sage is effortless, offering a seamless
            online experience from browsing to checkout. Enjoy easy returns,
            secure payments, and prompt delivery right to your doorstep.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            At August & Sage, we prioritize your satisfaction with responsive,
            friendly, and personalized customer support. Our team is always
            ready to assist you at every step for a smooth and delightful
            shopping experience.
          </p>
        </div>
      </div>
      <div className="bg-neutral-50 py-16">
        <InfiniteMovingCards items={testimonials} />
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
