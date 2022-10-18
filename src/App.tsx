import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TaskList from './components/TaskList';
import { Task } from './model';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {
  // FC - Funtional Component

  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setTasks([...tasks, { id: Date.now(), task, isCompleted: false }]);
    setTask('');
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    console.log(result);

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = tasks,
      complete = completedTasks;

    //Adding to Source
    if (source.droppableId === 'TaskList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else{
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    //Adding to Destination
    if (destination.droppableId === 'TaskList') {
      active.splice(destination.index, 0, add);
    } else{
      complete.splice(destination.index, 0, add);
    }

    //Adding to State
    setCompletedTasks(complete);
    setTasks(active)
  };

  return (
    <DragDropContext onDragEnd={(onDragEnd)}>
      <div className='App'>
        <span className='heading'>to-do list</span>
        <InputField
          task={task}
          setTask={setTask}
          handleAdd={handleAdd}
        ></InputField>
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
