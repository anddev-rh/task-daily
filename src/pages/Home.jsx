import React from 'react'
import Day from '../components/Day'

function Home () {

  function passTask (task) {  
    console.log(task)
  }



  return (
    <div className="flex justify-center gap-2 min-h-full">
      <Day dayName="lunes" passTask={passTask} />
      <Day dayName="martes" passTask={passTask}/>
    </div>
  );
}

export default Home;