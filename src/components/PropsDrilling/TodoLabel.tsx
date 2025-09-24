interface LabelProps {
  title: string;
}

function TodoLabel({ title }: LabelProps) {
  return <span>Title: {title}</span>;
}

export default TodoLabel;
