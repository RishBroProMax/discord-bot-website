"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Settings, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Advanced Moderation",
    description: "Keep your server safe with powerful moderation tools",
    icon: Shield,
  },
  {
    title: "Custom Commands",
    description: "Create custom commands tailored to your server's needs",
    icon: Terminal,
  },
  {
    title: "Smart Automation",
    description: "Automate tasks and role management with ease",
    icon: Settings,
  },
  {
    title: "Event System",
    description: "Create and manage server events seamlessly",
    icon: Bell,
  },
];

export function Features() {
  return (
    <section className="py-32 px-4 md:px-6 lg:px-8 bg-secondary/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Powerful Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create an engaging Discord community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 h-full backdrop-blur-sm bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}