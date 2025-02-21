"use client";

import { Github, Disc as Discord, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 footer-gradient" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Links</h3>
            <ul className="space-y-2">
              <li><a href="/status" className="text-muted-foreground hover:text-primary transition-colors">Status</a></li>
              <li><a href="/docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="/support" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Company</h3>
            <ul className="space-y-2">
              <li><a href="https://imrishmika.site/#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="https://blog.imrishmika.site/" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="https://imrishmika.site/#pricing" className="text-muted-foreground hover:text-primary transition-colors">pricing</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/legal/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="/legal/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></li>
              <li><a href="/legal/cookies/" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-primary/10">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart className="h-4 w-4 text-red-500" />
            <p>Made with love for the Discord community By Rishmika Sandanu</p>
          </div>
          
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform hover:text-primary"
            >
              <Discord className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2025 Alexia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}