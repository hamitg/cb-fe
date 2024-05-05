import { useState } from 'react';

function useChat(url) {
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const sendMessage = async (message) => {
        const newChats = [...chats, { role: "user", content: message }];
        setChats(newChats)

        setIsTyping(true);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ chats: newChats }),
        })
            .then((response) => response.json())
            .then((data) => {
                setChats([...newChats, data]);
                setIsTyping(false);
            })
            .catch((error) => {
                console.error("Failed to send message:", error);
                setIsTyping(false);
            });
    };

    return { chats, isTyping, sendMessage };
}

export default useChat;
