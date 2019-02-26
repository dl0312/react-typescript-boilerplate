import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { socket } from "../socket";

const Header = styled.header``;

const ChatForm = styled.form``;

const NameInput = styled.input``;

const MessageInput = styled.input``;

const SubmitBtn = styled.input``;

const ChatList = styled.ul``;

const ChatMessage = styled.li`
  font-size: 2rem;
`;

const User = styled.div``;

const Message = styled.div``;

interface IChatMessage {
  name: string;
  message: string;
}

function useInput(defaultValue: string) {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange };
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
  const nameHooks = useInput("");
  const messageHooks = useInput("");
  const { value: name } = nameHooks;
  const { value: message } = messageHooks;

  const handleGetNewMessage = (data: any) => {
    const { name, message } = data;
    setMessages({ type: "add", value: { name, message } });
  };

  useEffect(() => {
    socket.on("get_new_message", handleGetNewMessage);
    return () => {
      socket.removeAllListeners();
    };
  });

  return (
    <>
      <Header />
      <ChatForm
        onSubmit={(e: any) => {
          e.preventDefault();
          socket.emit("post_message", { name, message });
        }}
      >
        <NameInput type="text" name="name" {...nameHooks} />
        <MessageInput type="text" name="message" {...messageHooks} />
        <SubmitBtn type="submit" value="Submit" />
      </ChatForm>
      <ChatList>
        {messages.map((message: IChatMessage, index: number) => (
          <ChatMessage key={index}>
            <User>{message.name}</User>
            <Message>{message.message}</Message>
          </ChatMessage>
        ))}
      </ChatList>
    </>
  );
}

export default Home;
