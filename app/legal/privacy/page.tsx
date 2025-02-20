"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "../../components/sections/Footer";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Privacy Policy
          </h1>
          <div className="flex justify-center mb-8">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take your privacy seriously. This policy explains how we collect, use, and protect your data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 card-hover">
            <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
            <p className="text-muted-foreground mb-4">
              We collect the following information when you use our Discord bot:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Server IDs and configurations</li>
              <li>Command usage statistics</li>
              <li>User IDs for moderation purposes</li>
              <li>Custom command configurations</li>
            </ul>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 card-hover">
            <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
            <p className="text-muted-foreground mb-4">
              Your data is used exclusively for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Providing and improving bot functionality</li>
              <li>Maintaining server configurations</li>
              <li>Ensuring proper moderation features</li>
              <li>Analytics to improve user experience</li>
            </ul>
          </Card>

          {/* Add more sections as needed */}
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}