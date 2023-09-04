import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/nav';
import HomePage from './components/homePage';
import Experience from './components/experience';
import ProjectHome from './components/projectHome';
import ProjectAll from './components/projectAll';
import Resume from './components/resume';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Main() {
  return (
    <div>
      <HomePage />
      <Experience />
      <ProjectHome />
    </div>
  );
}

function App() {
  return (
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/resume" element={<Resume />} exact />
        <Route path="/projects" element={<ProjectAll />} exact />
      </Routes>
      </div>
  );
}

export default App;
