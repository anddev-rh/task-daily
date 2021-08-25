import React from 'react'
import Task from './Task'
import { useState } from 'react';


function Day (props) {
  const [tasks, setTasks] = useState(['tarea 1']);
  
  function addTask () {
    const newTask = document.getElementById(`newTask${props.dayName}`);

    setTasks([...tasks, newTask.value]);
    newTask.value = '';
  };

  function enterPressed (event){
    if(event.keyCode === 13){
      addTask()
    };
  };

  function removeTask (task) {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  function passTask (task) {  
    console.log(task)
  }

  return (
    <div className=" flex flex-col gap-y-4 justify-self-center self-center w-80 container-list rounded bg-gray-50" key={props.dayName}>
      <h1 className="self-center text-xl font-bold">{props.dayName}</h1>
      <div className="container-task pl-8 min-h-300 flex flex-col gap-y-1 ">
        {tasks.map(task => 
          <Task actualTask={task} remove={removeTask} pass={passTask} />
        )}
        {/* <Tarea tasks={this.state.data} remove={this.removeTask} /> */}
      </div>
      <input className=" w-60 self-center h-7 outline-none" autoComplete="off" onKeyUp={enterPressed.bind(this)} type="text" placeholder="Escribe una tarea" id={"newTask"+props.dayName} />
      <button className="border-2 w-20 self-center mb-2" onClick={addTask}>Agregar</button>
    </div>
  );
};


/* class Lista extends React.Component {

  state = {
    data : [
      {
        task: 'Tarea 1',
      },
    ]
  }


  // addTask = () => {
  //   const newTask = document.getElementById('newTask').value
  //   const containerTask = document.querySelector('.container-task')
  //   this.setState({task: newTask})
  //   containerTask.appendChild(<p>Hola</p>)

  // }

  enterPressed = (event) => {
    if (event.keyCode === 13) {
      this.addTask()
    }
  }
  
  addTask = () => {
    const newTask = document.getElementById('newTask')
    const task = newTask.value
    if (task == "") {
      alert('ponle primero nombre a la tarea')
    } else {
      //console.log(newTask)
      this.state.data.push({task})
      this.setState({data: this.state.data})
      newTask.value = ""
    }


  }
  
  removeTask = (task) => {
    console.log(task);
    const index = this.state.data.indexOf(task)
    this.state.data.splice(index,1)
    this.setState({data : this.state.data})

  }


  render(){
    return (
      <div className=" flex flex-col gap-y-4 justify-self-center self-center w-80 container-list rounded bg-gray-50">
        <h1 className="self-center text-xl font-bold">TAREAS</h1>
        <div className="container-task">
          <Tarea tasks={this.state.data} remove={this.removeTask} />
        </div>
        <input className=" w-60 self-center h-7 outline-none" autoComplete="off" onKeyUp={this.enterPressed.bind(this)} type="text" placeholder="Nueva tarea" id="newTask" />
        <button className="border-2 w-20 self-center mb-2" onClick={this.addTask}>Agregar</button>
      </div>
    )
  }
} */




export default Day