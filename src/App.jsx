import ChatMessage from './components/ChatMessage.jsx';
import ChatInput from './components/ChatInput.jsx';
import useChat from './hooks/useChat.js';

function App() {
    const { chats, isTyping, sendMessage } = useChat("https://europe-west3-genius-chat-bot-9999.cloudfunctions.net/chatFunction");

    return (
        <main>
            <h1>Chat with Genius AI</h1>
            <section>
                {chats.map((chat, index) => (
                    <ChatMessage key={index} chat={chat} />
                ))}
            </section>
            <div className={isTyping ? "typing" : "hide"}>
                <p><i>Typing...</i></p>
            </div>
            <ChatInput onSendMessage={sendMessage} />
        </main>
    );
}

export default App;
