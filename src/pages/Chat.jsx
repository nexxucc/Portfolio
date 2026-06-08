import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Icon } from '../utils/icons';

const suggestedPrompts = [
  'What projects has Vansh built?',
  'Which project best shows RAG experience?',
  "Summarize Vansh's AI engineering experience.",
  'What is ChandraQuant Siddhanta?',
  'What has Vansh done at Fluno?',
];

const initialMessages = [
  {
    role: 'assistant',
    content:
      "Hi, I can answer questions about Vansh's projects, experience, skills, and technical work. Backend integration is planned for iteration 3; this is the matching frontend shell for now.",
  },
];

export function Chat() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  function sendMessage(message = input) {
    const trimmed = message.trim();
    if (!trimmed) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: 'user', content: trimmed },
      {
        role: 'assistant',
        content:
          'This is the iteration-1 chat UI placeholder. In iteration 3, this message will come from the AI Persona backend while keeping this same portfolio-styled interface.',
      },
    ]);

    setInput('');
  }

  return (
    <section className="section page-section chat-page" id="chat">
      <div className="container">
        <SectionHeader
          label="Chat with me"
          title="Ask my portfolio about my work"
          description="This page is intentionally separate from the AI Persona project card. It will use a custom portfolio UI and later send requests to the AI Persona backend."
        />

        <div className="chat-layout fade-up">
          <aside className="chat-sidebar bento-card">
            <p className="section-label">Try asking</p>

            <div className="suggested-prompts">
              {suggestedPrompts.map((prompt) => (
                <button key={prompt} type="button" onClick={() => sendMessage(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>

            <p className="chat-note">
              Backend connection is deferred to iteration 3. The interface already follows the portfolio card system and
              theme variables.
            </p>
          </aside>

          <div className="chat-card bento-card">
            <div className="chat-card-header">
              <div>
                <p className="contact-label">Portfolio assistant</p>
                <h3>Chat with Vansh&apos;s portfolio</h3>
              </div>
            </div>

            <div className="chat-messages">
              {messages.map((message, index) => (
                <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                  <p>{message.content}</p>
                </div>
              ))}
            </div>

            <form
              className="chat-input"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about projects, experience, or skills..."
              />

              <button type="submit" aria-label="Send message">
                <Icon name="Send" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}