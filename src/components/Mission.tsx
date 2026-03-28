import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraph1Words =
  "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.".split(
    " "
  );

const paragraph2Words =
  "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.".split(
    " "
  );

const highlightWords = new Set([
  "curiosity",
  "meets",
  "clarity",
]);

function Word({
  word,
  index,
  total,
  scrollYProgress,
  highlight,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  highlight: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={{
        opacity,
        color: highlight
          ? "hsl(var(--foreground))"
          : "hsl(var(--hero-subtitle))",
      }}
      className="inline-block mr-[0.3em]"
    >
      {word}
    </motion.span>
  );
}

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const totalWords = paragraph1Words.length + paragraph2Words.length;

  return (
    <section className="pt-0 pb-32 md:pb-44 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Video */}
        <div className="flex justify-center mb-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[800px] aspect-square object-cover rounded-2xl"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Scroll-driven word reveal */}
        <div ref={containerRef} className="text-center">
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-snug">
            {paragraph1Words.map((word, i) => (
              <Word
                key={i}
                word={word}
                index={i}
                total={totalWords}
                scrollYProgress={scrollYProgress}
                highlight={highlightWords.has(
                  word.replace(/[^a-zA-Z]/g, "").toLowerCase()
                )}
              />
            ))}
          </p>

          <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-snug">
            {paragraph2Words.map((word, i) => (
              <Word
                key={i}
                word={word}
                index={paragraph1Words.length + i}
                total={totalWords}
                scrollYProgress={scrollYProgress}
                highlight={false}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
