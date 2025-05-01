"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const DEFAULT_POSITION = { x: 20, y: 60 };

export default function DraggableChatbot() {
  const [open, setOpen] = useState(true);
  const [pos, setPos] = useState(DEFAULT_POSITION);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const chatRef = useRef<HTMLDivElement>(null);

  // Chatbot state
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome! I’m Tsegaye’s AI assistant. Ask me about Tsegaye, his skills, experience, or projects!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Set initial position after mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPos({ x: 20, y: Math.max(60, window.innerHeight - 500) });
    }
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const chatbot = chatRef.current;
      if (chatbot) {
        const rect = chatbot.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        setPos(prev => ({
          x: Math.min(prev.x, viewportWidth - rect.width),
          y: Math.min(prev.y, viewportHeight - rect.height)
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent default touch behavior
  useEffect(() => {
    const preventTouchDefault = (e: TouchEvent) => {
      if (dragging) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventTouchDefault, { passive: false });
    return () => document.removeEventListener('touchmove', preventTouchDefault);
  }, [dragging]);

  // Handle mouse drag events
  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    const chat = chatRef.current;
    if (chat) {
      const rect = chat.getBoundingClientRect();
      if ('touches' in e && e.touches.length > 0) {
        setOffset({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        });
      } else if ('clientX' in e) {
        setOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    }
  };

  const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return;
    
    let newX: number, newY: number;
    
    if ('touches' in e && e.touches.length > 0) {
      newX = e.touches[0].clientX - offset.x;
      newY = e.touches[0].clientY - offset.y;
    } else if ('clientX' in e) {
      newX = e.clientX - offset.x;
      newY = e.clientY - offset.y;
    } else {
      return;
    }

    // Keep chatbot within viewport bounds
    const chatbot = chatRef.current;
    if (chatbot) {
      const chatbotRect = chatbot.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Constrain X position
      newX = Math.max(0, Math.min(newX, viewportWidth - chatbotRect.width));
      
      // Constrain Y position
      newY = Math.max(0, Math.min(newY, viewportHeight - chatbotRect.height));
    }

    setPos({ x: newX, y: newY });
  };

  const stopDrag = () => setDragging(false);

  // Chat send logic
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

  // Render
  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 flex items-center gap-2"
          style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.16)" }}
        >
          <Image src="/me.jpg" alt="Tsegaye&apos;s avatar" width={32} height={32} className="rounded-full" />
          <span className="font-semibold hidden sm:inline">Chat with AI</span>
        </button>
      )}
      {/* Draggable Chatbot */}
      {open && (
        <div
          ref={chatRef}
          className={`fixed z-50 bg-[#232326] border border-gray-800 rounded-3xl shadow-2xl max-w-md w-full sm:max-w-lg flex flex-col sm:left-4 sm:bottom-4 sm:right-auto sm:top-auto overflow-x-hidden`}
          style={{
            position: 'fixed',
            left: typeof window !== 'undefined' && window.innerWidth < 640 ? '16px' : `${pos.x}px`,
            top: typeof window !== 'undefined' && window.innerWidth < 640 ? 'auto' : `${pos.y}px`,
            bottom: typeof window !== 'undefined' && window.innerWidth < 640 ? '16px' : 'auto',
            width: '420px',
            maxWidth: '95vw',
            transform: 'translate3d(0,0,0)',
            WebkitTransform: 'translate3d(0,0,0)',
            touchAction: 'none'
          }}
          onMouseMove={onDrag}
          onMouseUp={() => {
            setDragging(false);
          }}
          onTouchMove={onDrag}
          onTouchEnd={stopDrag}
        >
          {/* Drag Handle */}
          <div
            className="flex items-center gap-2 cursor-move bg-[#18181b] rounded-t-3xl px-4 py-2 select-none touch-action-none"
            onMouseDown={startDrag}
            onMouseUp={() => {
              setDragging(false);
            }}
            onMouseMove={onDrag}
            onTouchStart={startDrag}
            onTouchEnd={stopDrag}
            onTouchMove={onDrag}
          >
            <Image src="/me.jpg" alt="Tsegaye&apos;s avatar" width={28} height={28} className="rounded-full border border-gray-300 object-cover" />
            <span className="font-bold text-white">Tsegaye&apos;s AI Assistant</span>
            <button className="ml-auto text-gray-400 hover:text-red-400" title="Close" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          {/* Chat Content */}
          <div className="p-4 flex-1 flex flex-col overflow-y-auto overflow-x-hidden max-h-80" style={{ minHeight: 240 }}>
            {messages.filter(msg => msg.role !== "system").map((msg, idx) => (
              msg.role === "assistant" ? (
                <div key={idx} className="flex flex-row items-start gap-2 my-2">
                  <Image src="/me.jpg" alt="Tsegaye&apos;s avatar" width={22} height={22} className="rounded-full border border-gray-300 object-cover flex-shrink-0" />
                  <span className="inline-block bg-[#232326]/40 backdrop-blur-sm text-white italic px-3 py-2 rounded-2xl shadow max-w-xs text-left break-words">{msg.content}</span>
                </div>
              ) : (
                <div key={idx} className="flex flex-row-reverse items-start my-2">
                  <span className="inline-block bg-[#2e353c]/70 text-white px-3 py-2 rounded-2xl rounded-br-none shadow max-w-xs text-left break-words border border-blue-700/40">{msg.content}</span>
                </div>
              )
            ))}

            {loading && (
              <div className="flex items-center gap-2 my-2">
                <span className="inline-block text-2xl text-blue-400 animate-pulse">. . .</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          {/* Input */}
          <form
            onSubmit={e => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex gap-2 p-4 border-t border-gray-800 bg-[#232326] rounded-b-3xl"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-700 rounded bg-[#232326] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ask me about Tsegaye..."
              disabled={loading}
              autoComplete="off"
            />
            <button type="submit" className="bg-[#232326] hover:bg-[#232326] text-white px-3 py-2 rounded transition-colors" disabled={loading}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
