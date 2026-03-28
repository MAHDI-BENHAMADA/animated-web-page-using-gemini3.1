import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const platforms = [
  {
    icon: "/icon-chatgpt.png",
    name: "ChatGPT",
    description:
      "Users ask ChatGPT for recommendations. If your content isn't indexed, you're invisible.",
  },
  {
    icon: "/icon-perplexity.png",
    name: "Perplexity",
    description:
      "Perplexity surfaces answers from trusted sources. Mindloop ensures you're one of them.",
  },
  {
    icon: "/icon-google.png",
    name: "Google AI",
    description:
      "Google's AI Overviews now answer queries directly. Be the answer, not just a link.",
  },
];

export default function SearchChanged() {
  return (
    <section className="relative pt-52 md:pt-64 pb-6 md:pb-9 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          {...fadeUp(0)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.05] mb-6"
        >
          Search has{" "}
          <span className="font-serif italic font-normal">changed.</span>
          <br />
          Have you?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.15)}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24"
        >
          AI is reshaping how people discover content. Traditional SEO isn't
          enough anymore — you need to be part of the conversation AI is having.
        </motion.p>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {platforms.map((p, i) => (
            <motion.div key={p.name} {...fadeUp(0.1 * i)} className="text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={p.icon}
                  alt={p.name}
                  className="w-[200px] h-[200px] object-contain"
                />
              </div>
              <h3 className="font-semibold text-base text-foreground mb-2">
                {p.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-muted-foreground text-sm text-center"
        >
          If you don't answer the questions, someone else will.
        </motion.p>
      </div>
    </section>
  );
}
