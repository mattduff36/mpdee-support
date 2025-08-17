"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterCycleProps {
  lines: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
}

export function TypewriterText({ 
  lines, 
  className, 
  typingSpeed = 100, 
  pauseDuration = 5000, 
  showCursor = true 
}: TypewriterCycleProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const currentLine = lines[currentLineIndex];

  useEffect(() => {
    if (isTyping && currentCharIndex < currentLine.length) {
      // Typing animation
      const timer = setTimeout(() => {
        setDisplayText(currentLine.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (isTyping && currentCharIndex >= currentLine.length) {
      // Finished typing current line, start pause
      setIsTyping(false);
      setIsPaused(true);
      
      const pauseTimer = setTimeout(() => {
        // Move to next line
        const nextLineIndex = (currentLineIndex + 1) % lines.length;
        setCurrentLineIndex(nextLineIndex);
        setCurrentCharIndex(0);
        setDisplayText("");
        setIsTyping(true);
        setIsPaused(false);
      }, pauseDuration);
      
      return () => clearTimeout(pauseTimer);
    }
  }, [currentCharIndex, currentLine, currentLineIndex, isTyping, lines, typingSpeed, pauseDuration]);

  return (
    <div className={cn("min-h-[1.5em] flex items-center justify-center", className)}>
      <span>
        {displayText}
        {showCursor && (
          <span className="animate-pulse ml-1">|</span>
        )}
      </span>
    </div>
  );
}
