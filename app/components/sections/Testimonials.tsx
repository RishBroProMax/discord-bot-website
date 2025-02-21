"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Server Admin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
    content: "This bot has transformed our server management. The moderation tools are incredibly powerful and easy to use.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80",
    content: "The custom commands feature has made our server unique and engaging. Couldn't be happier with the results.",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Gaming Community Leader",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=80",
    content: "The automated event system has made organizing tournaments so much easier. Our members love it!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-4 md:px-6 lg:px-8 relative overflow-hidden">
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
            What Our Users Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied server administrators and community leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-500 h-full flex flex-col transform-gpu perspective-1000">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <span className="text-6xl text-primary/20 absolute -top-4 -left-2">"</span>
                  <p className="text-muted-foreground relative z-10 pl-4">{testimonial.content}</p>
                  <span className="text-6xl text-primary/20 absolute -bottom-8 right-0">"</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="inline-block p-4 backdrop-blur-sm bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300">
            <p className="text-muted-foreground">
              Join <span className="text-primary font-semibold">5,000+</span> servers already using our bot
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}