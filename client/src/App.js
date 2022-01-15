
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.routes';
import Dashboard from './routes/dashboard/dashboard.routes';
import Profile from './routes/profile/profile.routes';
import Header from './components/header/header.components';
import data from './assets/data.json';
import Nomatch from './routes/nomatch/nomatch.routes';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {
          data.map(teacher => (
            <Route exact path={`/t/${teacher.Name.replace(" ", "")}`} element={<Profile teacher={teacher}/>} />
          ))
        }
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
    </div>
  );
}

export default App

// {
//   data.map(teacher => (
//     <Route path={`/${teacher.name.replace(" ", "")}`} element={<Profile />} />
//   ))
// }