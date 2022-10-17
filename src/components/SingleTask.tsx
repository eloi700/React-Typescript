import React, { useEffect, useRef, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Task } from '../model';
import './style.css';
// import TaskList from './TaskList';

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask = ({ task, tasks, setTasks }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])



  return (
    <form className='task-single' onSubmit={(e) => handleEdit(e, task.id)}>
      {edit ? (
        <input
          className='task-single-text'
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
      ) : task.isCompleted ? (
        <s className='task-single-text'>{task.task}</s>
      ) : (
        <span className='task-single-text'>{task.task}</span>
      )}

      <div className='icon-group'>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !task.isCompleted) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className='icon' onClick={() => handleDelete(task.id)}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
