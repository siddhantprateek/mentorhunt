
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.routes';
import Dashboard from './routes/dashboard/dashboard.routes';
import Profile from './routes/profile/profile.routes';
import Header from './components/header/header.components';
import data from './assets/data.json';
import Nomatch from './routes/nomatch/nomatch.routes';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from './components/Loader/Loading';

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }


  if(isLoading){
    return <Loading/>
  }
  return (
    <div className="App">
      <Header />
      <Routes>

        { !isAuthenticated && (<Route path='/' element={<Home />} />)}
        
        { isAuthenticated && (
          <Route path='/' element={<Dashboard />} />
        )}
        {
          data.map(teacher => (
            <Route exact path={`/t/${teacher.Name.replaceAll(" ", "")}`} element={<Profile teacher={teacher}/>} />
          ))
        }
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
    </div>
  );
}

export default App;