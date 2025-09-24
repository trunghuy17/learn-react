interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  desc: string;
  component1: React.ElementType;
  component2: React.ReactNode;
}

function Welcome({
  title,
  desc,
  component1: Component1,
  component2,
  ...rest
}: Props) {
  return (
    <div {...rest}>
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>
        Component1:
        <Component1 />{" "}
      </p>
      <p>component2:{component2} </p>
    </div>
  );
}

export default Welcome;
