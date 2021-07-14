import React from 'react'
import Tarea from './Tarea'

class Lista extends React.Component {

  state = {
    data : [
      {
        task: 'lavar '
      },
      {
        task: 'planchar '
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
    console.log(newTask)
    this.state.data.push({task})
    this.setState({data: this.state.data})
    newTask.value = ""
  }
  
  removeTask = (task) => {
    console.log(task);
    const index = this.state.data.indexOf(task)
    this.state.data.splice(index,1)
    this.setState({data : this.state.data})

  }


  render(){
    return (
      <div className="container-list">
        <h1>Tareas</h1>
        <div className="container-task">
          <Tarea tasks={this.state.data} remove={this.removeTask} />
        </div>
        <input onKeyUp={this.enterPressed.bind(this)} type="text" placeholder="new task" id="newTask" />
        <button onClick={this.addTask}>Agregar</button>
      </div>
    )
  }
}




export default Lista