"use client";

import { motion } from "framer-motion";
import { Bot, Disc as Discord } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Particles = () => {
  return (
    <div className="particles">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <Particles />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 hexagon-bg opacity-20" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/20 via-transparent to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block mb-8 hero-card"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative glass-effect p-8 rounded-2xl border border-primary/20">
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src="https://raw.githubusercontent.com/StackBlitz/discord-bot-landing/main/public/bot-logo.png"
                  alt="Bot Logo"
                  width={128}
                  height={128}
                  className="rounded-2xl"
                />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold px-4 md:px-0"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Next Generation
            </span>
            <br />
            <span className="text-foreground">Discord Bot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 md:px-0"
          >
            Experience the future of Discord server management with advanced moderation,
            customization, and interactive features.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center px-4 md:px-0"
          >
            <Button
              size="lg"
              className="group glass-effect hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              <Bot className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Add to Discord
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group glass-effect hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary/40"
            >
              <Discord className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Join Community
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}