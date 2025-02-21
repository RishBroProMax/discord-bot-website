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

              <section id="moderation" className="mb-12">
                <Card className="p-6 backdrop-blur-sm bg-card/50">
                  <h2 className="text-2xl font-semibold mb-4">Moderation</h2>
                  <p className="text-muted-foreground mb-4">
                    Set up moderation commands to keep your server safe.
                  </p>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code>{`module.exports = {
  name: "ban",
  description: "Ban a user",
  execute(message, args) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({ reason: "They were bad!" }).then(() => {
          message.reply(\`Successfully banned \${user.tag}\`);
        }).catch(err => {
          message.reply("I was unable to ban the member");
        });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
};`}</code>
                  </pre>
                </Card>
              </section>

              <section id="auto-moderation" className="mb-12">
                <Card className="p-6 backdrop-blur-sm bg-card/50">
                  <h2 className="text-2xl font-semibold mb-4">Auto-moderation</h2>
                  <p className="text-muted-foreground mb-4">
                    Configure auto-moderation settings to automatically handle rule violations.
                  </p>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code>{`// Example auto-moderation setup
client.on('messageCreate', message => {
  if (message.content.includes('badword')) {
    message.delete();
    message.channel.send(\`Watch your language, \${message.author}!\`);
  }
});`}</code>
                  </pre>
                </Card>
              </section>

              <section id="custom-commands" className="mb-12">
                <Card className="p-6 backdrop-blur-sm bg-card/50">
                  <h2 className="text-2xl font-semibold mb-4">Custom Commands</h2>
                  <p className="text-muted-foreground mb-4">
                    Create custom commands to enhance your bot's functionality.
                  </p>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code>{`module.exports = {
  name: "say",
  description: "Make the bot say something",
  execute(message, args) {
    const text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }
};`}</code>
                  </pre>
                </Card>
              </section>

              <section id="rest-api" className="mb-12">
                <Card className="p-6 backdrop-blur-sm bg-card/50">
                  <h2 className="text-2xl font-semibold mb-4">REST API</h2>
                  <p className="text-muted-foreground mb-4">
                    Use the REST API to interact with your bot programmatically.
                  </p>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code>{`const fetch = require("node-fetch");

fetch("https://discord.com/api/v9/applications/YOUR_APP_ID/commands", {
  method: "POST",
  headers: {
    "Authorization": \`Bot \${process.env.BOT_TOKEN}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "hello",
    description: "Replies with Hello, World!",
    options: []
  })
}).then(response => response.json()).then(data => {
  console.log(data);
});`}</code>
                  </pre>
                </Card>
              </section>

              <section id="websocket" className="mb-12">
                <Card className="p-6 backdrop-blur-sm bg-card/50">
                  <h2 className="text-2xl font-semibold mb-4">WebSocket Events</h2>
                  <p className="text-muted-foreground mb-4">
                    Handle real-time events using WebSockets.
                  </p>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code>{`const WebSocket = require("ws");

const ws = new WebSocket("wss://gateway.discord.gg/?v=9&encoding=json");

ws.on("open", () => {
  ws.send(JSON.stringify({
    op: 2,
    d: {
      token: process.env.BOT_TOKEN,
      intents: 513,
      properties: {
        $os: "linux",
        $browser: "my_library",
        $device: "my_library"
      }
    }
  }));
});

ws.on("message", (data) => {
  const payload = JSON.parse(data);
  const { t, event, op, d } = payload;

  if (t === "MESSAGE_CREATE") {
    console.log(\`Message received: \${d.content}\`);
  }
});`}</code>
                  </pre>
                </Card>
              </section>

              <section id="rate-limits" className="mb-12">
                <Card className="p-6 backdrop-blur-sm bg-card/50">
                  <h2 className="text-2xl font-semibold mb-4">Rate Limits</h2>
                  <p className="text-muted-foreground mb-4">
                    Understand and handle rate limits to ensure smooth operation.
                  </p>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code>{`const fetch = require("node-fetch");

fetch("https://discord.com/api/v9/users/@me", {
  method: "GET",
  headers: {
    "Authorization": \`Bot \${process.env.BOT_TOKEN}\`
  }
}).then(response => {
  if (response.status === 429) {
    console.log("Rate limited, retry after:", response.headers.get("Retry-After"));
  } else {
    return response.json();
  }
}).then(data => {
  console.log(data);
});`}</code>
                  </pre>
                </Card>
              </section>

            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}