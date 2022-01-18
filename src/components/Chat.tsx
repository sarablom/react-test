import { useState, useRef } from "react";
import styled from "styled-components/macro";

function Chat() {
  const [showChat, setShowChat] = useState(false);
  const [newChatPost, setNewChatPost] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmitHandler(e: any) {
    e.preventDefault();   
    const chat = [newChatPost, ...chatHistory];
    setChatHistory(chat);
    formRef?.current?.reset();
  }

  return (
    <ChatWrapper>
      <button type="button" onClick={() => setShowChat(!showChat)}>
        Toggle chat
      </button>
      {showChat && (
        <>
          <form onSubmit={(e) => onSubmitHandler(e)} ref={formRef}>
            <InputElem type="text" onChange={(e) => setNewChatPost(e.target.value)}/>
            <InputElem type="submit" value="Submit" />
          </form>

          <h2>Chat history</h2>
          <List>
          {chatHistory.length > 0 &&
            chatHistory.map((chat, index) => <li key={index}>{chat}</li>)}
          </List>

        </>
      )}
    </ChatWrapper>
  );
}

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const InputElem = styled.input`
  margin: 0.5rem;
`;

const List = styled.ul `
    list-style-type: none;
`

export default Chat;
