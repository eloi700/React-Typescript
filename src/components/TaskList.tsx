import React from 'react'; //rafce, react-icons.com for the icons
import { Task } from '../model';
import SingleTask from './SingleTask';
import './style.css';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks, completedTasks,setCompletedTasks }: Props) => {
  return (
    <div className='container'>
      <Droppable droppableId='TaskList'>
        {(provided) => (
          <div
            className='tasks active'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='tasks-heading'>Active Tasks</span>
            {tasks.map((task) => (
              <SingleTask
                task={task}
                tasks={tasks}
                key={task.id}
                setTasks={setTasks}
              />
            ))}
          </div>
        )}
      </Droppable>

      <Droppable droppableId='TaskRemove'>
        {(provided) => (
          <div
            className='tasks remove'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='tasks-heading'>Completed Tasks</span>
            {completedTasks.map((task) => (
              <SingleTask
                task={task}
                tasks={completedTasks}
                key={task.id}
                setTasks={setCompletedTasks}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
