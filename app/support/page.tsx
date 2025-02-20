"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, PhoneCall, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "../components/sections/Footer";

const supportChannels = [
  {
    title: "Discord Community",
    icon: MessageCircle,
    description: "Join our Discord server for community support",
    action: "Join Server",
    primary: true
  },
  {
    title: "Email Support",
    icon: Mail,
    description: "Send us an email for direct assistance",
    action: "Send Email"
  },
  {
    title: "Live Chat",
    icon: PhoneCall,
    description: "Chat with our support team in real-time",
    action: "Start Chat"
  }
];

export default function Support() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Support Center
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Need help? Our support team is here to assist you 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 card-hover h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <channel.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-muted-foreground mb-6">{channel.description}</p>
                  <button
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                      channel.primary
                        ? "bg-primary hover:bg-primary/90"
                        : "border border-primary/20 hover:border-primary/40"
                    }`}
                  >
                    {channel.action}
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 card-hover">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <div className="space-y-4">
              {[
                "How do I add the bot to my server?",
                "What permissions does the bot need?",
                "How do I configure auto-moderation?",
                "Can I create custom commands?"
              ].map((question, index) => (
                <details
                  key={index}
                  className="group"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between py-2 text-primary hover:text-primary/80">
                    {question}
                    <span className="transform group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="pl-4 pt-2 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </details>
              ))}
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 card-hover">
            <h2 className="text-2xl font-semibold mb-4">Support Hours</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">24/7 Community Support</p>
                  <p className="text-muted-foreground">Via Discord</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Email Support</p>
                  <p className="text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Live Chat</p>
                  <p className="text-muted-foreground">Mon-Fri, 9AM-5PM EST</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}