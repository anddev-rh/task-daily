import React, { createContext, useState } from 'react'

export const TaskDailyContext = createContext();

const TaskDailyContextProvider = (props) => {

  const [tasks, setTasks] = useState(['tarea de prueba'])

  function addTask () {
    const newTask = document.getElementById(`newTask${props.dayName}`);

    setTasks([...tasks, newTask.value]);
    newTask.value = '';
  };


  return(
    <TaskDailyContext.Provider value = {{tasks, addTask}}>
      {props.children}
    </TaskDailyContext.Provider>
  )
}

export default TaskDailyContextProvider;