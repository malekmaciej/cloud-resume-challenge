import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavigationMenu from './components/NavigationMenu.jsx'
import ResumePage from './pages/ResumePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

export default function Layout() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationMenu />
      <ResumePage /> 
      <ProjectsPage />
    </>
  );
}

