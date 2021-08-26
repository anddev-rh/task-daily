import { render } from '@testing-library/react'
import React,{useContext} from 'react'
import { TaskDailyContext } from '../context/TaskDailyContext';

function Task (props) {

  const { removeTask } = useContext(TaskDailyContext);

  return(
    <p className=" border-2 mr-8 flex justify-between" key={props.actualTask}>
      <button 
        className=" text-red-600 font-extrabold text-xl w-6 "
        onClick={() => {removeTask(props.actualTask)}}>
        -
      </button>
      {props.actualTask}      
      <button 
        className=" self-end"
        onClick={() => {props.pass(props.actualTask)}}
        > -> </button>
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