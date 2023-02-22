import React, { useState, useEffect } from 'react';
import Header from './Components/Header/HeaderComponent';
import LaunchesResumeRepository from './Repositories/LaunchesResumeRepository';
import LaunchesResume from './Models/LaunchesResume';
import LaunchesResumeComponent from './Components/LaunchesResume/LaunchesResumeComponent';
import './App.sass';

const launchesResumeRepository = new LaunchesResumeRepository()

function App() 
{
  const emptyResume = new LaunchesResume(null, null, [], [])
  const [launchesResume, setLaunchesResume] = useState(emptyResume)
  const [withData, setWithData] = useState(false)

  function update()
  {
    launchesResumeRepository.get().then((resume) => {
      setLaunchesResume(resume)
      setWithData(true)
    })
  }

  useEffect(() => update(), [withData])

  return (
    <div className="app">
      <div className="app__header">
        <Header/>
      </div>
      <div className="app__content">
        <LaunchesResumeComponent resume={launchesResume} />
      </div>
    </div>
  );
}

export default App;
