import React, { useState } from 'react';

function Todolist() {
    const [tasks, setTask] = useState([]);
    const [text, setText] = useState("");

    const addtask = () => {
        if (text.trim() === "") return;
       
        setTask([...tasks, { name: text, completed: false }]);
        setText("");
    };

    const deleteTask = (index) => {
        setTask(tasks.filter((_, i) => i !== index));
    };

    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTask(updatedTasks);
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input
                value={text}
                placeholder='Enter Task'
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addtask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ marginBottom: '10px', listStyle: 'none' }}>
                        <input 
                            type='checkbox'
                            checked={task.completed} 
                            onChange={() => toggleComplete(index)} 
                        />
                        <span style={{ 
                            textDecoration: task.completed ? 'line-through' : 'none',
                            margin: '0 10px' 
                        }}>
                            {task.name}
                        </span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;
