import { TaskItem } from "@/app/page";
import { Task } from "./Task";

type TaskListPrpos = {
  tasks: TaskItem[];
  onToggle: (id: number)=> void
  onDelete: (id: number)=> void
};

export const TaskList = ({tasks, onToggle, onDelete}:TaskListPrpos) => {

    if (tasks.length === 0) {
        return <p>Задач нет</p>
    }
  return(
    <div>
        {tasks.map((task)=>{
            return <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/>
        })}
    </div>
  )
};
