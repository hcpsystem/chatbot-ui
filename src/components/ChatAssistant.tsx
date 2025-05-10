import React, { useState } from 'react';
import { X, Volume2, VolumeX, MessageCircle } from 'lucide-react';

type Message = {
  id: number;
  sender: 'user' | 'assistant';
  text: string;
  options?: string[];
};

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'assistant',
      text: '¡Hola! 😊 Soy Victoria, tu asistente virtual.\n¿Cuál es tu nombre y apellido?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [chatStage, setChatStage] = useState(0);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: messageText
    };

    setMessages([...messages, newUserMessage]);
    setInputValue('');

    // Simulated assistant response
    setTimeout(() => {
      let responseText = '';
      let options: string[] | undefined;

      if (chatStage === 0) {
        responseText = 'Por favor, elige una opción para ayudarte: 😊';
        options = ['Interés en estudiar'];
        setChatStage(1);
      } else if (chatStage === 1) {
        responseText = 'Bienvenid@ a Vicoria👑. Para continuar danos tu número de celular.';
        setChatStage(2);
      }

      if (responseText) {
        const newAssistantMessage: Message = {
          id: messages.length + 2,
          sender: 'assistant',
          text: responseText,
          options
        };
        setMessages(prev => [...prev, newAssistantMessage]);
      }
    }, 500);
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-red-950 text-white p-4 rounded-full shadow-lg hover:bg-red-900 transition-all transform hover:scale-105 z-50"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-full md:w-96 h-[600px] md:h-[500px] bg-white rounded-t-xl shadow-xl flex flex-col z-50">
          {/* Chat header */}
          <div className="bg-red-950 text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white rounded-full p-1 mr-2">
                <MessageCircle size={20} className="text-indigo-950" />
              </div>
              <span className="font-medium">Conversemos</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-grow overflow-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}
              >
                {message.sender === 'assistant' && (
                  <div className="flex items-center mb-1">
                    <div className="w-8 h-8 bg-red-950 rounded-full flex items-center justify-center mr-2">
                      <MessageCircle size={16} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-600">Conversemos</span>
                  </div>
                )}
                <div className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                  message.sender === 'assistant' 
                    ? 'bg-white text-gray-800 shadow-sm' 
                    : 'bg-indigo-600 text-white'
                }`}>
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
                {message.options && (
                  <div className="mt-2 space-y-2">
                    {message.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option)}
                        className="block ml-10 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-left"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Chat input */}
          <div className="p-4 border-t">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escriba su mensaje y pulse 'Intro'"
                className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
