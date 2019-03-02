import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { socket } from "../socket";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: skyblue;
`;

const HeaderTitle = styled.div`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2rem;
  padding: 1rem;
  color: white;
`;

const ChatForm = styled.form`
  padding: 1rem;
`;

const NameInput = styled.input``;

const MessageInput = styled.input``;

const SubmitBtn = styled.input``;

const ChatList = styled.ul`
  width: 100%;
  padding: 1rem 3rem;
`;

const ChatMessage = styled.li`
  font-size: 2rem;
  display: flex;
`;

const Name = styled.div`
  font-weight: 900;
  margin-right: 1rem;
`;

const Message = styled.div``;

interface IChatMessage {
  name: string;
  message: string;
}

function Home() {
  const [messages, setMessages] = useReducer((messages, { type, value }) => {
    switch (type) {
      case "add":
        return [...messages, value];
      case "remove":
        return messages.filter((_: any, index: number) => index !== value);
      default:
        return messages;
    }
  }, []);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleGetNewMessage = (data: any) => {
    const { name, message } = data;
    setMessages({ type: "add", value: { name, message } });
    setMessage("");
  };

  useEffect(() => {
    socket.on("get_new_message", handleGetNewMessage);
    return () => {
      socket.removeAllListeners();
    };
  });

  return (
    <Container>
      <Header>
        <HeaderTitle>react-hooks-socket.io-chat</HeaderTitle>
        <ChatForm
          onSubmit={(e: any) => {
            e.preventDefault();
            const { id } = socket;
            socket.emit("post_message", { name, message, id });
          }}
        >
          <NameInput
            type="text"
            name="name"
            value={name}
            placeholder="write your name 😊"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <MessageInput
            type="text"
            name="message"
            value={message}
            placeholder="write your message ✉"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
          />
          <SubmitBtn type="submit" value="Submit" />
        </ChatForm>
      </Header>
      <ChatList>
        {messages.map((message: IChatMessage, index: number) => (
          <ChatMessage key={index}>
            <Name>{message.name}</Name>
            <Message>{message.message}</Message>
          </ChatMessage>
        ))}
      </ChatList>
    </Container>
  );
}

export default Home;
