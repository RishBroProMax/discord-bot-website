"use client";

import { motion } from "framer-motion";
import { Book, Search, Code, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "../components/sections/Footer";

const sections = [
  {
    title: "Getting Started",
    icon: Book,
    items: [
      { title: "Installation", href: "#installation" },
      { title: "Basic Configuration", href: "#configuration" },
      { title: "Command Structure", href: "#commands" },
    ]
  },
  {
    title: "Features",
    icon: Terminal,
    items: [
      { title: "Moderation", href: "#moderation" },
      { title: "Auto-moderation", href: "#auto-moderation" },
      { title: "Custom Commands", href: "#custom-commands" },
    ]
  },
  {
    title: "API Reference",
    icon: Code,
    items: [
      { title: "REST API", href: "#rest-api" },
      { title: "WebSocket Events", href: "#websocket" },
      { title: "Rate Limits", href: "#rate-limits" },
    ]
  }
];

export default function Documentation() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-64 shrink-0"
          >
            <div className="sticky top-4">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-card/50 border border-primary/10 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <nav className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <section.icon className="h-5 w-5" />
                      <h3 className="font-semibold">{section.title}</h3>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a 
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Main content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 min-w-0"
          >
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Documentation
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <section id="installation" className="mb-12">
                <Card className="p-6 backdrop-blur-sm bg-card/50">
                  <h2 className="text-2xl font-semibold mb-4">Installation</h2>
                  <p className="text-muted-foreground mb-4">
                    Get started by installing all dependencies.
                  </p>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code>npm install</code>
                  </pre>
                </Card>

                <Card className="p-6 backdrop-blur-sm bg-card/50">
                  <h2 className="text-2xl font-semibold mb-4">Environment Variables</h2>
                  <p className="text-muted-foreground mb-4">
                    Fill in all the necessary values in the <code>.env</code> file.
                  </p>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code>Open the .env file and add your variables.</code>
                  </pre>
                </Card>
              </section>

              <section id="configuration" className="mb-12">
                <Card className="p-6 backdrop-blur-sm bg-card/50">
                  <h2 className="text-2xl font-semibold mb-4">Basic Configuration</h2>
                  <p className="text-muted-foreground mb-4">
                    Configure your bot with the basic settings.
                  </p>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code>{`{
  "token": "YOUR_BOT_TOKEN",
  "prefix": "!",
  "ownerID": "YOUR_DISCORD_ID"
}`}</code>
                  </pre>
                </Card>
              </section>

              <section id="commands" className="mb-12">
                <Card className="p-6 backdrop-blur-sm bg-card/50">
                  <h2 className="text-2xl font-semibold mb-4">Command Structure</h2>
                  <p className="text-muted-foreground mb-4">
                    Learn about the command structure and how to create new commands.
                  </p>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code>{`module.exports = {
  name: "ping",
  description: "Ping command",
  execute(message, args) {
    message.channel.send("Pong!");
  }
};`}</code>
                  </pre>
                </Card>
              </section>

              {/* Add more sections as needed */}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}