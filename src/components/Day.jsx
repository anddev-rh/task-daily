import React from 'react'
import Task from './Task'
import { useContext } from 'react';
import { TaskDailyContext} from '../context/TaskDailyContext'


function Day (props) {

  const {tasks} = useContext(TaskDailyContext);

  //const [tasks, setTasks] = useState(['tarea 1']);
  
  // function addTask () {
  //   const newTask = document.getElementById(`newTask${props.dayName}`);

  //   setTasks([...tasks, newTask.value]);
  //   newTask.value = '';
  // };

  // function enterPressed (event){
  //   if(event.keyCode === 13){
  //     addTask()
  //   };
  // };

  // function removeTask (task) {
  //   const index = tasks.indexOf(task);
  //   tasks.splice(index, 1);
  //   setTasks([...tasks]);
  // }

  // function passTask (task) {  
  //   console.log(task)
  // }

  return (
    <div className=" flex flex-col gap-y-4 justify-self-center self-center w-80 container-list rounded bg-gray-50" key={props.dayName}>
      <h1 className="self-center text-xl font-bold">{props.dayName}</h1>
      <div className="container-task pl-8 min-h-300 flex flex-col gap-y-1 ">
        {tasks.map(task => 
          <Task actualTask={task}  pass={props.passTask} />
        )}
        {/* <Tarea tasks={this.state.data} remove={this.removeTask} /> */}
      </div>
      <input 
        className=" w-60 self-center h-7 outline-none" 
        autoComplete="off" 
        //onKeyUp={enterPressed.bind(this)} 
        type="text" 
        placeholder="Escribe una tarea" 
        id={"newTask"+props.dayName} 

      />
      <button className="border-2 w-20 self-center mb-2" 
        //onClick={addTask}
        >Agregar</button>
    </div>
  );



  

};






export default Day