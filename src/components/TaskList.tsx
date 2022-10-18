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

const TaskList: React.FC<Props> = ({
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}: Props) => {
  return (
    <div className='container'>
      <Droppable droppableId='TaskList'>
        {(provided, snapshot) => (
          <div
            className={`tasks active ${
              snapshot.isDraggingOver ? 'dragactive' : ''
            }`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <span className='tasks-heading'>Active Tasks</span>
            {tasks.map((task, index) => (
              <SingleTask
                index={index}
                task={task}
                tasks={tasks}
                key={task.id}
                setTasks={setTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId='TaskRemove'>
        {(provided, snapshot) => (
          <div
            className={`tasks remove ${
              snapshot.isDraggingOver ? 'dragcomplete' : ''
            }`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <span className='tasks-heading'>Completed Tasks</span>
            {completedTasks.map((task, index) => (
              <SingleTask
                index={index}
                task={task}
                tasks={completedTasks}
                key={task.id}
                setTasks={setCompletedTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
