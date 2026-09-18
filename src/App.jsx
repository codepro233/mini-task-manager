
import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    const response = await fetch("/api/tasks");

    const data = await response.json();

    setTasks(data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: task
      })
    });

    const data = await response.json();

    console.log(data);

    setTasks([...tasks, data.task]);

    setTask("");
  }


  

  return (
    <div>
      <h1>Mini Task Manager</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.title}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
