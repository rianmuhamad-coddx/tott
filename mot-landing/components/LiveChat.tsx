"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* ─── Types ─── */

type ChatState = "closed" | "open" | "typing";

interface Message {
  id: string;
  text: string;
  role: "user" | "bot";
}

/* ─── Default bot response ─── */

const DEFAULT_BOT_REPLY: string =
  "Hi! I'm MOT's AI assistant. I can help you with information about our services, portfolio, or book a call. What can I help you with?";

/* ─── Component ─── */

export default function LiveChat() {
  const [chatState, setChatState] = useState<ChatState>("closed");
  const [messages, setMessages] = useState<Message[]>([
    { id: "0", text: DEFAULT_BOT_REPLY, role: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  /* Auto-scroll to latest message */
  useEffect(() => {
    if (chatState !== "closed") {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatState]);

  /* Focus input when panel opens */
  useEffect(() => {
    if (chatState === "open") {
      inputRef.current?.focus();
    }
  }, [chatState]);



  /* ─── Handlers ─── */

  const toggleChat = () => {
    setChatState((prev) => (prev === "closed" ? "open" : "closed"));
  };

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      text: trimmed,
      role: "user",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    /* Reply after a short delay */
    setTimeout(() => {
      const botReply: Message = {
        id: crypto.randomUUID(),
        text: "Thanks for reaching out! Our team will get back to you shortly. In the meantime, feel free to check our services or book a free strategy call.",
        role: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /* ─── Render ─── */

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      {/* ─── Chat bubble trigger button ─── */}
      <AnimatePresence>
        {chatState === "closed" && (
          <motion.button
            key="chat-trigger"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={toggleChat}
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-full",
              "bg-white text-black shadow-lg shadow-white/10",
              "hover:bg-zinc-200 hover:scale-105",
              "transition-all duration-200",
              "cursor-pointer"
            )}
            aria-label="Open live chat"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── Chat panel ─── */}
      <AnimatePresence>
        {(chatState === "open" || chatState === "typing") && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={cn(
              "flex flex-col overflow-hidden",
              /* Desktop: floating rounded-xl panel */
              "md:w-[380px] md:h-[520px] md:rounded-2xl",
              /* Mobile: full-width bottom sheet */
              "fixed inset-x-0 bottom-0 w-full",
              "md:relative md:inset-x-auto",
              "max-h-[85vh] md:max-h-none",
              /* Glass effect */
              "bg-white/5 backdrop-blur-2xl",
              "border border-white/10",
              "shadow-2xl shadow-black/40",
              /* Inner padding & layout */
              "p-0"
            )}
          >
            {/* ─── Header ─── */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">MOT Live Chat</p>
                  <p className="text-xs text-zinc-400">
                    {chatState === "typing" ? "Typing..." : "We usually reply in minutes"}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={16} className="text-zinc-400" />
              </button>
            </div>

            {/* ─── Messages ─── */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-white/10 text-white"
                        : "bg-white/5 text-white/80"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {chatState === "typing" && (
                <div className="flex justify-start">
                  <div className="bg-white/5 rounded-2xl px-4 py-3 text-sm text-zinc-400 flex items-center gap-1.5">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce [animation-delay:0.1s]">.</span>
                    <span className="animate-bounce [animation-delay:0.2s]">.</span>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* ─── Input ─── */}
            <div className="border-t border-white/10 px-4 py-3 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  disabled={chatState === "typing"}
                  className={cn(
                    "flex-1 rounded-xl bg-white/5 px-4 py-2.5",
                    "text-sm text-white placeholder:text-zinc-500",
                    "border border-white/10 focus:border-white/20",
                    "focus:outline-none focus:ring-1 focus:ring-white/20",
                    "transition-colors",
                    "disabled:opacity-50"
                  )}
                />
                <Button
                  onClick={handleSend}
                  variant="primary"
                  className="h-10 w-10 rounded-full p-0 flex items-center justify-center"
                  icon={<Send size={16} />}
                >
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </div>

            {/* ─── Footer ─── */}
            <div className="border-t border-white/5 px-4 py-2 shrink-0">
              <p className="text-center text-[10px] text-zinc-500">
                Built with{" "}
                <span className="text-white">MOT</span>
                {" "}❤️
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}