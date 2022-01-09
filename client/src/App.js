
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.routes'
import Dashboard from './routes/dashboard/dashboard.routes'
import Profile from './routes/profile/profile.routes'
import Header from './components/header/header.components'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App
