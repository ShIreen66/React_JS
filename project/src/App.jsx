import React, { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(''); 
  const [editTaskIndex, setEditTaskIndex] = useState(null); 
  const [editedTask, setEditedTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]); 
      setNewTask('');
    }
  };

  // Delete task function
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks);
  };

  // Update task function 
  const updateTask = () => {
    const updatedTasks = tasks.map((task, index) => 
      index === editTaskIndex ? editedTask : task
    ); 
    setTasks(updatedTasks);
    setEditTaskIndex(null); 
    setEditedTask(''); 
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value); 
  };

  
  const handleEditChange = (e) => {
    setEditedTask(e.target.value); 
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter new task"
      />
      <button onClick={addTask}>Add Task</button>

      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            
            {editTaskIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editedTask}
                  onChange={handleEditChange}
                  placeholder="Edit task"
                />
                <button onClick={updateTask}>Update</button>
              </div>
            ) : (
              <>
                <span>{task}</span>
                <button onClick={() => { 
                  setEditTaskIndex(index); 
                  setEditedTask(task); 
                }}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
