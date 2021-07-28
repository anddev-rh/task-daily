import { render } from '@testing-library/react'
import React from 'react'


function Task (props) {

  return(
    <p className=" border-2 mr-8" key={props.actualTask}>
      <button 
        className=" text-red-600 font-extrabold text-xl w-6 "
        onClick={() => {props.remove(props.actualTask)}}>
        -
      </button>
      {props.actualTask}      
    </p>
  );

}




/* class Tarea extends React.Component {
  

  
  
  render () {
    return (
      <ul className=" flex flex-col gap-y-1 pl-8">
        {this.props.tasks.map((task) => {
          return (
            <li className="border-2 mr-8" key={task.task}>
              
              <button className=" text-red-600 font-extrabold text-xl w-6 " onClick={e => this.props.remove(task)}>-</button>
              {task.task}
              
            </li>
          )
        })}
      </ul>
    )
  }

} */

export default Task