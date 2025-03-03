import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Welcome to Gourmet Haven! How can we assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message! Our team will get back to you shortly about your reservation or inquiry.",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-t-lg flex justify-between items-center">
              <h3 className="text-white font-semibold">Chat with us</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isBot 
                      ? 'bg-gray-100' 
                      : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <motion.button
                  onClick={handleSend}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;