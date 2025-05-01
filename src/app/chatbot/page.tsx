"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { role: "system", content: "Hi! I am Tsegaye's AI assistant. Ask me anything about Tsegaye or his work!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setMessages((msgs) => [...msgs, { role: "assistant", content: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <main className="max-w-xl mx-auto py-5 bg-[#232326]">
      <div className="flex items-center gap-3 mb-2">
        <Image
          src="/me.jpg"
          alt="Tsegaye's avatar"
          width={40}
          height={40}
          className="rounded-full border border-gray-300 dark:border-gray-600 object-cover"
        />
        <h1 className="text-3xl font-bold text-white">Tsegaye's AI Assistant Chatbot</h1>
      </div>
      <div className="border border-gray-800 rounded-3xl p-4 h-96 overflow-y-auto bg-[#18181b] mb-4">
      <div className="mb-4 text-gray-200 text-lg">Welcome! I’m Tsegaye’s AI assistant. Ask me anything about Tsegaye, his skills, experience, or projects and etc!</div>
        {messages.filter(msg => msg.role !== "system").map((msg, idx) => (
          msg.role === "assistant" ? (
            <div key={idx} className="flex justify-end items-start gap-2 my-2">
              <Image
                src="/me.jpg"
                alt="Tsegaye's avatar"
                width={30}
                height={30}
                className="rounded-full border border-gray-300 dark:border-gray-600 object-cover"
              />
              <span className="inline-block bg-[#232326] text-white italic px-3 py-2 rounded-2xl shadow max-w-xs text-left">
                {msg.content}
              </span>
              
            </div>
          ) : (
            <div key={idx} className="flex justify-start my-2">
              <span className="inline-block bg-[#232326] text-white italic px-3 py-2 rounded-2xl shadow max-w-xs text-left">
                {msg.content}
              </span>
            </div>
          )
        ))}
        {loading && (
          <div className="flex items-center gap-2 my-2">
            <span className="animate-spin inline-block w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"></span>
            <span className="text-gray-300 italic">Generating...</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          sendMessage();
        }}
        className="flex gap-2"
      >
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 px-3 py-2  border-gray-700 rounded bg-[#232326] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ask me about Tsegaye..."
          disabled={loading}
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors" disabled={loading}>
          {loading ? "Generating..." : "Send"}
        </button>
      </form>
    </main>
  );
}
