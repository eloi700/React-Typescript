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
    const {source, destination} = result;
    
    console.log(result);

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add, active = tasks, complete = completedTasks;

    if(source.droppableId === 'TasksList') {
      add = active[source.index]
    }
  };

  return (
    <DragDropContext onDragEnd={(onDragEnd) => {}}>
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
