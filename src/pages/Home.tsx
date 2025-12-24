import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Mood = {
  id: string;
  label: string;
  headline: string;
  sub: string;
  bg: string;
};

const moods: Mood[] = [
  {
    id: "calm",
    label: "✨ Calm",
    headline: "Soft sparks. Peaceful vibes.",
    sub: "Perfect for home & family celebrations",
    bg: "from-emerald-950 via-green-900 to-black",
  },
  {
    id: "festive",
    label: "🎉 Festive",
    headline: "Celebrate like it’s Diwali night",
    sub: "Balanced joy. Crowd-friendly fireworks",
    bg: "from-orange-900 via-amber-800 to-black",
  },
  {
    id: "loud",
    label: "💥 Loud",
    headline: "Make the sky remember you",
    sub: "High-energy display for big moments",
    bg: "from-red-900 via-rose-800 to-black",
  },
  {
    id: "kids",
    label: "👶 Kids",
    headline: "Tiny hands. Big smiles.",
    sub: "Low-noise, safe & joyful effects",
    bg: "from-teal-900 via-cyan-800 to-black",
  },
];

export function Home({ theme }: { theme?: any }) {
  const [activeMood, setActiveMood] = useState<Mood>(moods[1]);
  const userInteracted = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (userInteracted.current) return;

      setActiveMood((prev) => {
        const index = moods.findIndex((m) => m.id === prev.id);
        return moods[(index + 1) % moods.length];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleMoodClick = (mood: Mood) => {
    userInteracted.current = true;
    setActiveMood(mood);
  };

  return (
    <section
      className={`min-h-screen w-full bg-gradient-to-br ${activeMood.bg} transition-colors duration-700`}
    >
      {/* WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-orange-500/20 flex items-center justify-center text-4xl">
            🔥
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          TK Fireworks
        </h1>

        {/* Dynamic headline */}
        <p className="text-xl md:text-2xl font-semibold text-orange-400 mb-2 transition-all duration-500">
          {activeMood.headline}
        </p>

        <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-10 transition-all duration-500">
          {activeMood.sub}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
          <Link
            to="/catalog"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-bold transition-all duration-200 hover:scale-[1.03]"
          >
            Explore Catalog →
          </Link>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold transition-all duration-200 hover:scale-[1.03]"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mood selector */}
        <div className="flex flex-wrap justify-center gap-3">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => handleMoodClick(mood)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  activeMood.id === mood.id
                    ? "bg-white text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {mood.label}
            </button>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-24 text-xs text-gray-400 animate-pulse">
          ↓ Scroll to explore featured fireworks
        </div>
      </div>
    </section>
  );
}

export default Home;
