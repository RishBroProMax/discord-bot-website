"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "../../components/sections/Footer";

export default function Terms() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Terms of Service
          </h1>
          <div className="flex justify-center mb-8">
            <Scale className="h-16 w-16 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            By using our Discord bot, you agree to these terms and conditions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 card-hover">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By adding our bot to your Discord server or using any of our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not use our services.
            </p>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 card-hover">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              We grant you a limited, non-exclusive, non-transferable license to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use the bot in your Discord server</li>
              <li>Configure the bot according to your server's needs</li>
              <li>Access and use available commands and features</li>
            </ul>
          </Card>

          {/* Add more sections as needed */}
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}