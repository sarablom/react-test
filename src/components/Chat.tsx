import { useState } from 'react'

function Chat() {
    const [showChat, setShowChat] = useState(false);

    return (
        <div>
            <button onClick={() => setShowChat(!showChat)}>Toggle chat</button>
            {showChat && <input type="text" />}
        </div>
    )
}

export default Chat
