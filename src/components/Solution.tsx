import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const features = [
  {
    title: "Curated Feed",
    description:
      "AI-powered content recommendations tailored to your interests. No noise, just signal.",
  },
  {
    title: "Writer Tools",
    description:
      "Analytics, scheduling, and insights to help creators grow their audience organically.",
  },
  {
    title: "Community",
    description:
      "Connect with readers and writers who share your curiosity. Build real relationships.",
  },
  {
    title: "Distribution",
    description:
      "Reach readers across AI search, social, and our own network. Maximum visibility, zero spam.",
  },
];

export default function Solution() {
  return (
    <section className="py-32 md:py-44 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          {...fadeUp(0)}
          className="text-xs tracking-[3px] uppercase text-muted-foreground mb-6 text-center"
        >
          SOLUTION
        </motion.p>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-medium tracking-[-2px] leading-[1.1] mb-16 text-center"
        >
          The platform for{" "}
          <span className="font-serif italic font-normal">meaningful</span>{" "}
          content
        </motion.h2>

        {/* Video */}
        <motion.div {...fadeUp(0.2)} className="mb-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl object-cover"
            style={{ aspectRatio: "3/1" }}
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(0.1 * i)}>
              <h3 className="font-semibold text-base text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
