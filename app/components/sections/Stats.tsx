"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Zap, Clock, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { label: "Active Users", value: "100,000+", icon: Users },
  { label: "Servers", value: "5,000+", icon: MessageSquare },
  { label: "Commands", value: "50+", icon: Zap },
  { label: "Uptime", value: "99.9%", icon: Activity, status: "online" },
  { label: "Response Time", value: "<100ms", icon: Clock },
];

export function Stats() {
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
            Real-Time Statistics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Monitor our bot's performance and reach across Discord servers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    {stat.status && (
                      <span className={`status-indicator status-${stat.status}`} />
                    )}
                  </div>
                  <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="inline-block p-4 backdrop-blur-sm bg-card/50 border-primary/10">
            <div className="flex items-center gap-2 text-sm">
              <span className="status-indicator status-online" />
              <span className="text-muted-foreground">All systems operational</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}