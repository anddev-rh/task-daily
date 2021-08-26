//import logo from './logo.svg';
//import './App.css';
import React from 'react'
import Day from './components/Day'
import Home from './pages/Home'
import TaskDailyContextProvider from './context/TaskDailyContext';

export function App() {

  
  return (
    
    <TaskDailyContextProvider>
      <div className="h-screen bg-gray-800">
        
        <Home/>

      </div>
    </TaskDailyContextProvider>

  );
}




