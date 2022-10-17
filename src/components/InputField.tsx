import React, { useRef } from 'react';
import './style.css';

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ task, setTask, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type='input'
        className='input-box'
        placeholder='Enter a task'
      />
      <button className='input-submit' type='submit'>
        Add
      </button>
    </form>
  );
};

export default InputField;
