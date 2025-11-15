import { useState } from "react";

type TaskFormProps = {
  onAdd: (title: string) => void;
};

export const TaskForm = ({ onAdd }: TaskFormProps) => {
  const [title, setTitle] = useState("");

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onAdd(title);
    setTitle("");
  };
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};
