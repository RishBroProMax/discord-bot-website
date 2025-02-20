"use client";

import { motion } from "framer-motion";
import { Activity, Server, Globe, Clock, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Footer } from "../components/sections/Footer";

const services = [
  { name: "API", status: "operational", latency: "45ms" },
  { name: "WebSocket", status: "operational", latency: "23ms" },
  { name: "Database", status: "operational", latency: "12ms" },
  { name: "Bot Service", status: "operational", latency: "89ms" }
];

const regions = [
  { name: "US East", status: "operational" },
  { name: "US West", status: "operational" },
  { name: "EU Central", status: "operational" },
  { name: "Asia Pacific", status: "operational" }
];

const incidents = [
  {
    date: "2025-03-15",
    title: "API Performance Degradation",
    status: "resolved",
    description: "API response times were elevated due to increased traffic. Issue has been resolved."
  }
];

export default function Status() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            System Status
          </h1>
          <Card className="inline-block p-4 backdrop-blur-sm bg-card/50 border-primary/10">
            <div className="flex items-center gap-2">
              <span className="status-indicator status-online" />
              <span className="text-muted-foreground">All systems operational</span>
            </div>
          </Card>
        </motion.div>

        <div className="space-y-8">
          {/* Services Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Server className="h-6 w-6 text-primary" />
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Card key={index} className="p-4 backdrop-blur-sm bg-card/50 border-primary/10 card-hover">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="status-indicator status-online" />
                      <span>{service.name}</span>
                    </div>
                    <span className="text-muted-foreground">{service.latency}</span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Regional Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              Regions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {regions.map((region, index) => (
                <Card key={index} className="p-4 backdrop-blur-sm bg-card/50 border-primary/10 card-hover">
                  <div className="flex items-center gap-2">
                    <span className="status-indicator status-online" />
                    <span>{region.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Uptime */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              Uptime
            </h2>
            <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 card-hover">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Last 30 days</span>
                  <span className="text-primary">99.99%</span>
                </div>
                <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                  <div className="h-full w-[99.99%] bg-primary rounded-full" />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Incident History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-primary" />
              Incident History
            </h2>
            <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 card-hover">
              {incidents.map((incident, index) => (
                <div key={index} className="border-b border-primary/10 last:border-0 pb-4 mb-4 last:pb-0 last:mb-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{incident.title}</h3>
                    <span className="text-sm text-muted-foreground">{incident.date}</span>
                  </div>
                  <p className="text-muted-foreground">{incident.description}</p>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}