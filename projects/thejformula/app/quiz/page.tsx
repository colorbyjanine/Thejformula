"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
  id: number;
  question: string;
  options: { text: string; value: string }[];
};

const questions: Question[] = [
  {
    id: 1,
    question: "What's your natural hair color?",
    options: [
      { text: "Black or dark brown", value: "dark" },
      { text: "Medium to light brown", value: "medium" },
      { text: "Blonde or light", value: "light" },
      { text: "Red or auburn", value: "red" },
    ],
  },
  {
    id: 2,
    question: "What's your skin undertone?",
    options: [
      { text: "Warm (golden, peachy, yellow)", value: "warm" },
      { text: "Cool (pink, red, blue)", value: "cool" },
      { text: "Neutral (mix of both)", value: "neutral" },
      { text: "Not sure 🤷‍♀️", value: "neutral" },
    ],
  },
  {
    id: 3,
    question: "How much maintenance are you willing to do?",
    options: [
      { text: "Minimal — I want easy, low-maintenance color", value: "low" },
      { text: "Moderate — I can come in every 8-12 weeks", value: "medium" },
      { text: "High — I love changing my look often", value: "high" },
    ],
  },
  {
    id: 4,
    question: "What vibe are you going for?",
    options: [
      { text: "Natural & subtle enhancement", value: "natural" },
      { text: "Sun-kissed & dimensional", value: "dimensional" },
      { text: "Bold & statement-making", value: "bold" },
      { text: "Trendy & fashion-forward", value: "trendy" },
    ],
  },
  {
    id: 5,
    question: "How healthy is your hair currently?",
    options: [
      { text: "Virgin hair — never colored", value: "virgin" },
      { text: "Healthy — colored but in good condition", value: "healthy" },
      { text: "Damaged — needs some TLC", value: "damaged" },
      { text: "Very damaged — broken, dry, or over-processed", value: "very-damaged" },
    ],
  },
];

type Result = {
  title: string;
  description: string;
  colors: string[];
  tips: string[];
  emoji: string;
};

const results: Record<string, Result> = {
  "warm-brunette": {
    title: "Warm Brunette Goddess",
    description: "Rich, warm brunette shades will complement your features beautifully. Think caramel highlights, honey tones, and golden brown dimension.",
    colors: ["Caramel Balayage", "Honey Brown", "Warm Chocolate", "Golden Highlights"],
    tips: ["Glazes can add shine between appointments", "Purple shampoo only if you go lighter", "Deep conditioning is your friend"],
    emoji: "🍯",
  },
  "cool-brunette": {
    title: "Cool Brunette Beauty",
    description: "Ash and cool-toned brunettes will look stunning on you. Think mushroom brown, ash brown, and cool espresso tones.",
    colors: ["Mushroom Brown", "Ash Brunette", "Cool Espresso", "Smoky Balayage"],
    tips: ["Blue/purple shampoo keeps brassiness away", "Toner refreshes between visits", "Avoid warm lighting in photos"],
    emoji: "🍄",
  },
  "warm-blonde": {
    title: "Golden Blonde Babe",
    description: "Warm, golden blondes are your jam! Buttery highlights, honey blonde, and champagne tones will make you glow.",
    colors: ["Buttery Blonde", "Honey Highlights", "Champagne Blonde", "Golden Balayage"],
    tips: ["Purple shampoo 1-2x per week max", "Olaplex is your best friend", "Protect from sun to prevent brassiness"],
    emoji: "🌻",
  },
  "cool-blonde": {
    title: "Icy Blonde Queen",
    description: "Cool, icy blondes are calling your name! Platinum, ash blonde, and silver tones will look incredible on you.",
    colors: ["Platinum Blonde", "Ash Blonde", "Icy Highlights", "Silver Blonde"],
    tips: ["Purple shampoo is essential", "Regular toner appointments", "Bond treatments are a must"],
    emoji: "❄️",
  },
  "dimensional": {
    title: "Dimensional Dream",
    description: "You'd look amazing with multi-tonal, dimensional color! Balayage, highlights, and lowlights create depth and movement.",
    colors: ["Balayage", "Babylights", "Face-Framing Highlights", "Dimensional Color"],
    tips: ["Grows out beautifully", "Less maintenance than all-over color", "Style with waves to show dimension"],
    emoji: "✨",
  },
  "bold-color": {
    title: "Bold Color Creative",
    description: "You're ready for something special! Whether it's a vivid fashion color or a dramatic transformation, let's make a statement.",
    colors: ["Copper Red", "Rose Gold", "Burgundy", "Fashion Colors"],
    tips: ["Color-safe products are essential", "Cold water rinses preserve color", "Touch-ups needed more frequently"],
    emoji: "🎨",
  },
  "natural-enhance": {
    title: "Natural Enhancement",
    description: "A subtle enhancement of your natural color will give you that 'your hair but better' look. Think glosses and soft dimension.",
    colors: ["Glossy Treatment", "Subtle Highlights", "Root Shadow", "Shine Boost"],
    tips: ["Glosses last 4-6 weeks", "Super low maintenance", "Great for first-time color"],
    emoji: "🌿",
  },
  "repair-first": {
    title: "Repair & Restore",
    description: "Let's focus on getting your hair healthy first! Once we restore your hair's integrity, we can explore color options safely.",
    colors: ["Bond Repair Treatment", "Olaplex Service", "Deep Conditioning", "Trim & Treatment"],
    tips: ["K18 mask is amazing for damage", "Patience is key", "Healthy hair holds color better"],
    emoji: "💆‍♀️",
  },
};

function getResult(answers: Record<number, string>): Result {
  // Very damaged hair -> repair first
  if (answers[5] === "very-damaged") {
    return results["repair-first"];
  }

  // Bold/trendy vibe
  if (answers[4] === "bold" || answers[4] === "trendy") {
    return results["bold-color"];
  }

  // Natural vibe
  if (answers[4] === "natural") {
    return results["natural-enhance"];
  }

  // Dimensional vibe
  if (answers[4] === "dimensional") {
    return results["dimensional"];
  }

  // Based on undertone and natural color
  const undertone = answers[2];
  const natural = answers[1];

  if (natural === "light" || natural === "medium") {
    return undertone === "warm" ? results["warm-blonde"] : results["cool-blonde"];
  } else {
    return undertone === "warm" ? results["warm-brunette"] : results["cool-brunette"];
  }
}

export default function HairQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? getResult(answers) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-[#F5F0EB]">
      {/* Header */}
      <section className="pt-28 pb-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#E8967A] mb-3">
            ✨ Hair Color Quiz
          </p>
          <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
            What Hair Color Is Right For You?
          </h1>
          {!showResult && (
            <p className="text-[#9A9086]">
              Answer {questions.length} quick questions to discover your perfect shade
            </p>
          )}
        </div>
      </section>

      {/* Quiz Content */}
      <section className="px-4 pb-16">
        <div className="max-w-xl mx-auto">
          {!showResult ? (
            <>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-[#9A9086] mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-[#E8DDD4] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#E8967A] to-[#D4826A] transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6 text-center">
                  {questions[currentQuestion].question}
                </h2>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full p-4 text-left bg-[#FAF7F2] hover:bg-[#E8967A]/10 rounded-xl transition-all hover:scale-[1.02] border-2 border-transparent hover:border-[#E8967A]/30"
                    >
                      <span className="text-[#3D3935]">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Back Button */}
              {currentQuestion > 0 && (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  className="mt-4 text-sm text-[#9A9086] hover:text-[#3D3935] flex items-center gap-1 mx-auto"
                >
                  ← Back
                </button>
              )}
            </>
          ) : (
            /* Result */
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <span className="text-6xl block mb-4">{result?.emoji}</span>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                {result?.title}
              </h2>
              <p className="text-[#9A9086] mb-6">
                {result?.description}
              </p>

              {/* Recommended Colors */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[#3D3935] mb-3 uppercase tracking-wider">
                  Colors to Try
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {result?.colors.map((color, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-[#E8967A]/20 to-[#D4826A]/20 text-[#3D3935] rounded-full text-sm"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-[#FAF7F2] rounded-xl p-4 mb-6 text-left">
                <h3 className="text-sm font-semibold text-[#3D3935] mb-2">Pro Tips:</h3>
                <ul className="text-sm text-[#9A9086] space-y-1">
                  {result?.tips.map((tip, idx) => (
                    <li key={idx}>• {tip}</li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <Link
                  href="/book"
                  className="block w-full bg-[#E8967A] text-white py-3 rounded-full font-medium hover:bg-[#D4826A] transition-colors"
                >
                  Book a Consultation
                </Link>
                <button
                  onClick={restart}
                  className="block w-full bg-[#FAF7F2] text-[#3D3935] py-3 rounded-full font-medium hover:bg-[#E8DDD4] transition-colors"
                >
                  Take Quiz Again
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
