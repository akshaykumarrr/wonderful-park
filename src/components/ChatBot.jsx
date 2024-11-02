import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./ChatBot.css";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const faqs = {
  "What are the available rides?": "We offer various rides, including water rides, high rides, kids' rides, and land rides.",
  "How can I book a ticket?": "You can book tickets through our booking page by selecting your desired ride and the number of tickets.",
  "What facilities are available?": "We provide several facilities, including camera booking, wheelchair services, and screen reader support.",
  "What are the dining options?": "We have multiple dining options available for our visitors, including snacks and meals.",
  "How can I contact support?": "You can contact support via the 'Contact Us' section on our website.",
  // Add more FAQs as needed
};

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { text: message, sender: "user" };
    setChatHistory((prev) => [...prev, userMessage]);

    
    const response = faqs[message.trim()];
    if (response) {
      const botMessage = { text: response, sender: "bot" };
      setChatHistory((prev) => [...prev, botMessage]);
      setMessage("");
      return; 
    }

    
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: chatHistory.map((chat) => ({
          role: chat.sender === "user" ? "user" : "model",
          parts: [{ text: chat.text }],
        })),
      });

      const result = await chatSession.sendMessage(message);
      const botMessage = {
        text: result.response.text(),
        sender: "bot",
      };
      setChatHistory((prev) => [...prev, botMessage]);
      setMessage("");
    } catch (error) {
      console.error("Error occurred:", error);
      const errorMessage = { text: "Sorry, there was an error.", sender: "bot" };
      setChatHistory((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.sender}`}>
            <strong>{chat.sender === "user" ? "You: " : "Bot: "}</strong>
            {chat.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
