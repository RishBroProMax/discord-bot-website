"use client";

import { motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "../../components/sections/Footer";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Cookie Policy
          </h1>
          <div className="flex justify-center mb-8">
            <Cookie className="h-16 w-16 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This policy explains how we use cookies and similar technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <Card className="p-6 backdrop-blur-sm bg-card/50">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and understand how you use our services.
            </p>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-card/50">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  Required for the website to function properly. These cannot be disabled.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Preference Cookies</h3>
                <p className="text-muted-foreground">
                  Remember your settings and preferences for a better experience.
                </p>
              </div>
            </div>
          </Card>

          {/* Add more sections as needed */}
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}