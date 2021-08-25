import React from 'react'
import Day from '../components/Day'

function Home () {
  return (
    <div className="flex justify-center gap-2 min-h-full">
      <Day dayName="lunes"/>
      <Day dayName="martes"/>
    </div>
  );
}

export default Home;