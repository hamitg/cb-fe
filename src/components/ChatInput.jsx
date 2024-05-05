import { useState } from 'react';
import PropTypes from 'prop-types';

function ChatInput({ onSendMessage }) {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                placeholder="Type here and hit enter"
                onChange={(e) => setMessage(e.target.value)}
            />
        </form>
    );
}

ChatInput.propTypes = {
    onSendMessage: PropTypes.func.isRequired
};

export default ChatInput;
