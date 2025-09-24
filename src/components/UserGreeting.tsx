interface UserGreetingProps {
  text: string;
  name: string;
  handleChange: () => void;
}

function UserGreeting({ text, name, handleChange }: UserGreetingProps) {
  return (
    <>
      <h1>
        {text} {name}
      </h1>
      <button onClick={handleChange}>Logout</button>
    </>
  );
}

export default UserGreeting;
