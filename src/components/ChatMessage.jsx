import PropTypes from 'prop-types';

function ChatMessage({ chat }) {
    return <p className={chat.role === "user" ? "user_msg" : ""}>{chat.content}</p>;
}

ChatMessage.propTypes = {
    chat: PropTypes.shape({
        role: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired
};

export default ChatMessage;
