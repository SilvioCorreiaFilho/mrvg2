import { useState, useEffect, useRef } from 'react';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Olá! Sou o assistente virtual da MRVG. Como posso ajudá-lo hoje?", 
      isBot: true 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      isBot: false
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot response with RAG technology (in production this would query a backend with RAG capabilities)
    setTimeout(() => {
      let botResponse = "";
      
      // Simple keyword-based responses to simulate RAG
      if (input.toLowerCase().includes('horário') || input.toLowerCase().includes('atendimento') || input.toLowerCase().includes('expediente')) {
        botResponse = "Nosso horário de atendimento é de segunda a sexta, das 9h às 18h. Agendamentos podem ser feitos pelo telefone (61) 3039-3117 ou pelo formulário de contato em nosso site.";
      } 
      else if (input.toLowerCase().includes('endereço') || input.toLowerCase().includes('localização')) {
        botResponse = "Estamos localizados no SHIS QI 15, Conjunto 04, Casa 17, Lago Sul, Brasília-DF, CEP 71635-240. Próximo aos principais tribunais superiores.";
      }
      else if (input.toLowerCase().includes('civil') || input.toLowerCase().includes('contrato')) {
        botResponse = "Nossa equipe especializada em Direito Civil atua em casos complexos envolvendo disputas contratuais de alto impacto, responsabilidade civil e questões imobiliárias. Gostaria de agendar uma consulta com um de nossos especialistas?";
      }
      else if (input.toLowerCase().includes('penal') || input.toLowerCase().includes('crime')) {
        botResponse = "Na área de Direito Penal, somos especializados em defesas estratégicas para crimes econômicos, financeiros e tributários, com foco em casos de grande repercussão. Nossos advogados criminalistas possuem ampla experiência junto aos Tribunais Superiores.";
      }
      else if (input.toLowerCase().includes('trabalh')) {
        botResponse = "No campo do Direito Trabalhista, oferecemos soluções jurídicas para relações corporativas, negociações sindicais e processos trabalhistas estratégicos. Nossa abordagem combina estratégia preventiva e defesa eficaz em litígios.";
      }
      else if (input.toLowerCase().includes('consulta') || input.toLowerCase().includes('reunião') || input.toLowerCase().includes('agendar')) {
        botResponse = "Para agendar uma consulta com nossos advogados, você pode entrar em contato pelo telefone (61) 3039-3117 ou preencher o formulário na seção de Contato. Um de nossos atendentes retornará em até 24 horas úteis para confirmar sua consulta.";
      }
      else if (input.toLowerCase().includes('custo') || input.toLowerCase().includes('preço') || input.toLowerCase().includes('valor') || input.toLowerCase().includes('honorário')) {
        botResponse = "Os honorários advocatícios são definidos após a análise detalhada do caso, considerando sua complexidade e natureza. Trabalhamos com diferentes modelos de remuneração que podem ser discutidos durante uma consulta inicial. Gostaria de agendar uma avaliação?";
      }
      else {
        botResponse = "Obrigado pela sua mensagem. Para melhor atendê-lo, recomendo agendar uma consulta com nossos advogados especialistas. Posso ajudar com informações sobre nossos serviços, localização ou horário de atendimento.";
      }
      
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden flex flex-col max-h-[500px]">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white p-1 rounded-full mr-2">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <h3 className="font-medium">Assistente MRVG</h3>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200"
          aria-label="Fechar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div 
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                message.isBot 
                  ? 'bg-gray-100 text-gray-800' 
                  : 'bg-gray-800 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-100 px-4 py-2 rounded-lg flex space-x-1">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition-colors"
            disabled={!input.trim()}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;