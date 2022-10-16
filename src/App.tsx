import React from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = ()=> { // FC - Funtional Component
  return (
    <div className="App">
      <span className="heading">to-do list</span>
      <InputField></InputField>

    </div>


  );
}

export default App;
