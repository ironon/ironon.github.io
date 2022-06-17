
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import React, {useState, useRef} from "react";
import {nanoid} from "nanoid";
import Homework from "./components/Homework";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


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
  const [homework, setHomework] = useState(props.homework);
  let tasksRef = useRef();
  let hwRef = useRef();
  tasksRef.current = tasks;
  hwRef.current = homework;
  function toggleTaskCompleted(id) {
    
    tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })
    homework.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })
  }
  
  // tasks.filter(task => false)
  let constantTodos = [
    {
            id:"Workout",
            task:"Workout today?",
            completed:false,
            description:"Can be Tennis or 20min+ Tempo/Cardio. Use Common Sense!",
            descId:"WorkoutDesc",
            constant:true
    }
    
  ]
 
  let alreadyMade = constantTodos.filter(task => tasks.filter(a => a.id == task.id).length == 0)
  
  let newTasks = alreadyMade.map(task => {
    return {
      id:task.id,
      task:task.task,
      completed:task.completed,
      key:task.id,
      description:task.description,
      descId:task.descId,
      constant:task.constant,
      creationDate:Date.now()
    }
  })

  let moreUpdatedTasks = tasks.concat(newTasks)
  function deleteTask(id) {

    
    if (id.substring(0,2) == "hw") {
      const remainingTasks = homework.filter(task => task.id !== id);
      setHomework(remainingTasks);
    }
    else {
      const remainingTasks = tasks.filter(task => task.id !== id);
      setTasks(remainingTasks);
    }
    
  }
  
  function editTask(id, newName, newDesc) {
   
    if (id.substring(0,2) == "hw") {
      const editedHwList = homework.map(task => {
        // if this task has the same ID as the edited task
          if (id === task.id) {
            //
            return {...task, task: newName, description: newDesc}
          }
          return task;
        });
        setHomework(editedHwList);
    } else {
      const editedTaskList = tasks.map(task => {
        // if this task has the same ID as the edited task
          if (id === task.id) {
            //
            return {...task, task: newName, description: newDesc}
          }
          return task;
        });
        setTasks(editedTaskList);
    }
    
  }
  
  useUnload(e => {
    e.preventDefault();
    
   
      setCookie("tasks", JSON.stringify(tasksRef.current), 1000)
      setCookie("homework", JSON.stringify(hwRef.current), 1000)
    
    
    
    
  });
 
  const TASK_LIST = moreUpdatedTasks.map(task => (
    <Todo
        id={task.id}
        task={task.task}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
        description={task.description}
        descId={task.descId}
      />
    )
  );
  let HOMEWORK_LIST
  if (homework.length > 0) {
    
       HOMEWORK_LIST = homework.map(task => (
      <Homework
          id={task.id}
          task={task.task}
          completed={task.completed}
          key={task.id}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
          description={task.description}
          descId={task.descId}
        />
      )
    );
  
  }

 
  
  
  const tasksNoun = TASK_LIST.length !== 1 ? 'tasks' : 'task';
  const headingText = `${TASK_LIST.length} ${tasksNoun} remaining`;
  function addTask(name, desc) {
    
    const newTask = {id:"task-" + nanoid(), task:name, completed: false, description: desc, descId: "desc-" + nanoid()};
    setTasks([...tasks, newTask]);
  }
  function addHomework(name, desc) {
    
    const newHomework = {id:"hw-" + nanoid(), task:name, completed: false, description: desc, descId: "desc-" + nanoid()};
    setHomework([...homework, newHomework]);
  }
  return (
    <div className="todoapp stack-large">
      <h1>Davidlingo</h1>
      <Form addTask={addTask} addHomework={addHomework}/>
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
      <div id="homework">
        <h1>Homework</h1>
        <ul>
          {HOMEWORK_LIST}
        </ul>
      </div>
    </div>
  );
}

export default App;
