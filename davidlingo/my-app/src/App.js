
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import React, {useState} from "react";
import {nanoid} from "nanoid";


const useUnload = fn => {
  const cb = React.useRef(fn);

  React.useEffect(() => {
    const onUnload = cb.current;
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [cb]);
};

function App(props) {
  
  const [tasks, setTasks] = useState(props.tasks);
  function toggleTaskCompleted(id) {
    
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })
  }
  function getTask() {
    console.log(tasks.length)
    return tasks
    
  }
  function deleteTask(id) {
    console.log(id)
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  }
  function editTask(id, newName) {
   
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
        if (id === task.id) {
          //
          return {...task, task: newName}
        }
        return task;
      });
      setTasks(editedTaskList);
  }
  
  let g = useUnload(e => {
    e.preventDefault();
    
    document.cookie = "tasks=" + getTask();
    
    
    
  });

  const TASK_LIST = tasks.map(task => (
    <Todo
        id={task.id}
        task={task.task}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    )
  );
  
  const tasksNoun = TASK_LIST.length !== 1 ? 'tasks' : 'task';
  const headingText = `${TASK_LIST.length} ${tasksNoun} remaining`;
  function addTask(name) {
    
    const newTask = {id:"task-" + nanoid(), task:name, completed: false}
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="todoapp stack-large">
      <h1>Davidlingo</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
       
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {TASK_LIST}
      </ul>
    </div>
  );
}

export default App;
