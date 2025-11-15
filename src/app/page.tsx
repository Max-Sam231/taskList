"use client";
import { TaskForm } from "@/components/TaskForm";
import { TaskList } from "@/components/TaskList";
import { useState } from "react";

export type TaskItem = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Изучить React", completed: false },
    { id: 2, title: "Изучить TypeScript", completed: true },
  ]);




  
  const ToggleComplet = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { id: task.id, title: task.title, completed: !task.completed }
          : task
      )
    );
  };

  const addTask = (title: string) => {
    const newTask = {
      id: Math.random(),
      title,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const countComplet = tasks.filter((task) => task.completed === true).length;

  return (
    <div className="container">
      <h1>Список задач</h1>
      <p>
        Выполнено {countComplet} из {tasks.length}
      </p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={ToggleComplet} onDelete={deleteTask} />
    </div>
  );
}
