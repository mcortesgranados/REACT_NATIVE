// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React, { useState } from 'react'; // Importing React and useState hook

import './TodoList.css'; // Proposed Name: TodoList.css, Importing CSS file for styling

function TodoList() { // TodoList component declaration
  const [tasks, setTasks] = useState([]); // State for tasks array and setter function
  const [newTask, setNewTask] = useState(''); // State for newTask input and setter function

  const handleAddTask = () => { // Function to handle adding a new task
    if (newTask.trim() !== '') { // Checking if newTask is not empty
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]); // Adding new task to tasks array
      setNewTask(''); // Resetting newTask input
    }
  };

  const handleDeleteTask = (taskId) => { // Function to handle deleting a task
    setTasks(tasks.filter(task => task.id !== taskId)); // Removing task with given taskId from tasks array
  };

  const handleToggleTask = (taskId) => { // Function to handle toggling task completion
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )); // Toggling completed property of task with given taskId
  };

  return ( // Returning JSX for rendering
    <div className="todo-list"> // Outer div with class name todo-list
      <input // Input field for adding new tasks
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button> // Button to add new task
      <ul> // Unordered list to display tasks
        {tasks.map(task => ( // Mapping over tasks array to render each task
          <li key={task.id} className={task.completed ? 'completed' : ''}> // List item with key and conditional class
            <span>{task.text}</span> // Displaying task text
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button> // Button to delete task
            <input // Checkbox to mark task as completed
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList; // Proposed Name: TodoList.js, Exporting TodoList component
