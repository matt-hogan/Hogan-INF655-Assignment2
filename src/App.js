import './App.css';
import React, { useState } from 'react';
import Tasks from './components/Tasks';
import TaskData from './components/TaskData';


function App() {
  const [taskList, setTaskList] = useState(TaskData);
  return (
    <div className="App">
      <h1>Welcome to the Task Manager</h1>
      <Tasks taskList={taskList} />
    </div>
  );
}

export default App;
