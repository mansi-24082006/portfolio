"use client";
import { useState, useEffect } from "react";

interface TypedTextProps {
  phrases: string[];
  speed?: number; // typing speed in ms per character
  pause?: number; // pause after typing phrase
}

export default function TypedText({ phrases, speed = 100, pause = 1500 }: TypedTextProps) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];
      if (!deleting) {
        setText(currentPhrase.slice(0, charIndex + 1));
        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex(charIndex + 1);
        }
      } else {
        setText(currentPhrase.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setCharIndex(0);
        } else {
          setCharIndex(charIndex - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases, speed, pause]);

  return (
    <span className="border-r-2 border-cyan-400 pr-1 animate-blink">
      {text}
    </span>
  );
}
