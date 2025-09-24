import React from "react";

interface GuestGreetingProps {
  handleChange: () => void;
  text: string;
}

function GuestGreeting({ handleChange, text }: GuestGreetingProps) {
  return (
    <>
      <p>{text}</p>
      <button onClick={handleChange}>Log in</button>
    </>
  );
}

export default GuestGreeting;
