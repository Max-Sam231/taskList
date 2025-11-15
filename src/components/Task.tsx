import { TaskItem } from "@/app/page";

type TaskPrpos = {
  task: TaskItem;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export const Task = ({ task, onToggle, onDelete }: TaskPrpos) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.title}</span>
       {task.completed === true? <span> Выполнено</span> : <span> Не выполнено</span>}
       <button onClick={()=> onDelete(task.id)}>х</button>
    </div>
  );
};