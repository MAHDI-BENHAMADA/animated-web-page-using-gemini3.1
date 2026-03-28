import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-[5]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-24 md:pt-28 lg:pt-32 max-w-4xl mx-auto">
        {/* Avatars */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((n) => (
              <img
                key={n}
                src={`/avatar-${n}.png`}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <span className="ml-3 text-muted-foreground text-sm">
            7,000+ people already subscribed
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.05] mb-6"
        >
          Get <span className="font-serif italic font-normal">Inspired</span>{" "}
          with Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg max-w-2xl mx-auto mb-10"
          style={{ color: "hsl(var(--hero-subtitle))" }}
        >
          Join our feed for meaningful updates, news around technology and a
          shared journey toward depth and direction.
        </motion.p>

        {/* Email Form */}
        <motion.div
          {...fadeUp(0.45)}
          className="liquid-glass rounded-full p-2 max-w-lg mx-auto flex items-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground px-5 py-3 text-sm outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-full px-8 py-3 text-sm font-semibold tracking-wide shrink-0 cursor-pointer"
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
