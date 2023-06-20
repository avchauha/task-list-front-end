import React, {useState} from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [taskData, setTaskData] = useState(TASKS);

  const handleToggleComplete = (taskId) => {
    setTaskData((prevTaskData) =>
      prevTaskData.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task 
      )
    );  
  };

  const handleDeleteTask = (taskId) => {
    setTaskData((prevTaskData) => prevTaskData.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={taskData} 
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
