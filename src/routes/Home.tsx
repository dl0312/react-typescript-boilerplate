import React, { useState } from "react";
import Login from "./Login";
import Chat from "./Chat";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

function Home() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  return (
    <Container>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=AWKzr6n0ea0"
        playing
        width="120%"
        height="120%"
        style={{
          position: "absolute",
          zIndex: -1,
          filter: "blur(2px) brightness(0.8)"
        }}
      />
      {!login ? (
        <Login setLogin={setLogin} name={name} setName={setName} />
      ) : (
        <Chat name={name} />
      )}
    </Container>
  );
}

export default Home;
