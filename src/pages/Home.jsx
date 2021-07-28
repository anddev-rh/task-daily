import React from 'react'
import Day from '../components/Day'

function Home () {
  return (
    <div className="flex">
      <Day dayName="lunes"/>
      <Day dayName="martes"/>
    </div>
  );
}

export default Home;