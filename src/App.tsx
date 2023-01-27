import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Counter } from "./components/Counter";
import { Item } from "./components/Item";

import { useState, useEffect } from "react";

import styles from './App.module.css';
import './global.css';
import plus from './assets/plus.svg';


export function App() {
  const getLocalTasks = localStorage.getItem("Tasks")
  console.log(getLocalTasks)
  const [listTasks, setListTasks] = useState(getLocalTasks && getLocalTasks.length > 0 ? JSON.parse(getLocalTasks) : []);
  const [task, setTask] = useState("")

  function addTask() {
    const newTask = {
      name: task,
      active: false, 
    }
    setListTasks((prev: any) => [...prev, newTask])
    // setListTasks([...listTasks, newTask])
    setTask('')
  }
  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(listTasks));
  },[listTasks]) 


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" onClick={() => addTask()}>Criar<img src={plus} alt="imagem do plus" /></button>
      </div>

      <div className={styles.container}>
        <Counter listTasks={listTasks}/>   
        <main className={styles.main}>
          {listTasks.length === 0 ? 
          <Post /> : 
          <ul>
          { listTasks.map( (task: any) => 
            <Item 
              key={task.name}
              name={task.name} 
              active= {task.active} 
              listTasks={listTasks}
              setListTasks={setListTasks}
            /> 
          )}
            
          </ul>
           }
         
         
        </main>
      </div>
     
    </div>
  )
}

