import React, { useState, useEffect } from 'react';
import Header from './Components/Header/HeaderComponent';
import LaunchesResumeRepository from './Repositories/LaunchesResumeRepository';
import LaunchesResume from './Models/LaunchesResume';
import LaunchesResumeComponent from './Components/LaunchesResume/LaunchesResumeComponent';
import LoadingComponent from './Components/Loading/LoadingComponent';
import './App.sass';

const launchesResumeRepository = new LaunchesResumeRepository()

function App() 
{
  const [launchesResume, setLaunchesResume] = useState<LaunchesResume|null>(null)

  function update()
  {
    if (launchesResume !== null) {
      return
    }

    launchesResumeRepository.get().then((resume) => {
      setLaunchesResume(resume)
    })
  }

  useEffect(() => update(), [launchesResume])

  return (
    <div className="app">
      <div className="app__header">
        <Header/>
      </div>
      <div className="app__content">
        { launchesResume 
          ? (<LaunchesResumeComponent resume={launchesResume} />)
          : (<LoadingComponent/>)
        }
      </div>
    </div>
  );
}

export default App;
