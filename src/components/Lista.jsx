import React from 'react'
import Tarea from './Tarea'

class Lista extends React.Component {

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
}




export default Lista