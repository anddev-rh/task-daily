import React from 'react'

class Tarea extends React.Component {
  

  
  
  render () {
    return (
      <ul>
        {this.props.tasks.map((task) => {
          return (
            <li key={task.task}>
              <button onClick={e => this.props.remove(task)}>-</button>
              {task.task}
              
            </li>
          )
        })}
      </ul>
    )
  }

}

export default Tarea