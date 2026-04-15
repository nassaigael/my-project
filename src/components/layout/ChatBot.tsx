// components/ChatBot.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { cn } from '../../utils/cn';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

// Réponses prédéfinies pour le chatbot
const botResponses: Record<string, string> = {
    'bonjour': 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
    'hello': 'Hello! How can I help you today?',
    'qui es-tu': 'Je suis Gaël RAMAHANDRISOA, développeur fullstack spécialisé en Web & IA.',
    'compétences': 'Je maîtrise React, TypeScript, Spring Boot, Python, PostgreSQL, et bien plus encore !',
    'projets': 'Mes principaux projets : ÉCRIVIA (IA emails), Fizanakara Cotisation, ELORIA (e-commerce), et ce portfolio !',
    'contact': 'Vous pouvez me contacter via le formulaire de contact ou par email à gael.ramahandrisoa@gmail.com',
    'cv': 'Vous pouvez télécharger mon CV en cliquant sur le bouton "Télécharger CV" dans la section Hero.',
    'default': 'Merci pour votre message ! Je vous répondrai dans les plus brefs délais. Sinon, consultez la section contact.'
};

export const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: 'Bonjour ! Je suis l\'assistant virtuel de Gaël. Posez-moi une question sur ses compétences, projets ou contact.', isUser: false, timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll vers le dernier message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const getBotResponse = (userMessage: string): string => {
        const lowerMessage = userMessage.toLowerCase().trim();
        
        for (const [key, response] of Object.entries(botResponses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }
        return botResponses.default;
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        // Ajouter le message de l'utilisateur
        const userMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            isUser: true,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simuler une réponse du bot après un délai
        setTimeout(() => {
            const botResponse: Message = {
                id: messages.length + 2,
                text: getBotResponse(userMessage.text),
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 800);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Bouton flottant */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 neumorph-sm p-4 rounded-full bg-neumorph-bg group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
            >
                {isOpen ? (
                    <X size={24} className="text-gray-400 group-hover:text-red-500 transition-colors" />
                ) : (
                    <MessageCircle size={24} className="text-blue-500 group-hover:text-blue-400 transition-colors" />
                )}
            </motion.button>

            {/* Fenêtre du chat */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-8 z-50 w-96 h-[500px] neumorph-sm rounded-2xl overflow-hidden flex flex-col bg-neumorph-bg"
                    >
                        {/* En-tête */}
                        <div className="p-4 bg-linear-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-700">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                    <Bot size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-200">Assistant Gaël</h3>
                                    <p className="text-xs text-gray-400">En ligne • Réponse rapide</p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={cn(
                                        "flex items-start gap-2",
                                        message.isUser && "flex-row-reverse"
                                    )}
                                >
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                        message.isUser ? "bg-gray-700" : "bg-linear-to-r from-blue-500 to-purple-500"
                                    )}>
                                        {message.isUser ? (
                                            <User size={14} className="text-gray-300" />
                                        ) : (
                                            <Bot size={14} className="text-white" />
                                        )}
                                    </div>
                                    <div className={cn(
                                        "max-w-[70%] px-4 py-2 rounded-xl text-sm",
                                        message.isUser
                                            ? "bg-blue-600 text-white rounded-tr-sm"
                                            : "neumorph-sm text-gray-300 rounded-tl-sm"
                                    )}>
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                        <Bot size={14} className="text-white" />
                                    </div>
                                    <div className="neumorph-sm px-4 py-2 rounded-xl rounded-tl-sm">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-gray-700">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Posez votre question..."
                                    className="flex-1 px-4 py-2 rounded-xl bg-gray-800/50 text-gray-200 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                                />
                                <motion.button
                                    onClick={handleSendMessage}
                                    className="neumorph-sm p-2 rounded-xl text-blue-500"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Send size={18} />
                                </motion.button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                Questions sur mes compétences, projets ou contact
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};