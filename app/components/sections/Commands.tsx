"use client";

import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { Card } from "@/components/ui/card";

const commandCategories = [
  {
    name: "Moderation",
    commands: [
      { name: "/ban", description: "Ban a user from the server" },
      { name: "/mute", description: "Temporarily mute a user" },
      { name: "/warn", description: "Issue a warning to a user" }
    ]
  },
  {
    name: "Configuration",
    commands: [
      { name: "/setup", description: "Configure bot settings" },
      { name: "/autorole", description: "Set up automatic role assignment" },
      { name: "/welcome", description: "Customize welcome messages" }
    ]
  },
  {
    name: "Fun",
    commands: [
      { name: "/poll", description: "Create an interactive poll" },
      { name: "/giveaway", description: "Start a giveaway event" },
      { name: "/game", description: "Start a mini-game" }
    ]
  }
];

export function Commands() {
  return (
    <section className="py-32 px-4 md:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Command List
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive list of commands to enhance your server
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commandCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Command className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="space-y-3">
                  {category.commands.map((cmd, cmdIndex) => (
                    <div key={cmdIndex} className="p-3 rounded-lg bg-secondary/50">
                      <p className="font-mono text-sm text-primary mb-1">{cmd.name}</p>
                      <p className="text-sm text-muted-foreground">{cmd.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}