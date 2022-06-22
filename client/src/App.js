
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Profile, Nomatch, Events } from './routes';
import { Header, Footer } from './components';
import data from './assets/data.json';
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
        { isAuthenticated &&
          data.map(teacher => (
            <Route exact path={`/t/${teacher.Name.replaceAll(" ", "")}`} element={<Profile teacher={teacher}/>} />
          ))
        }
        <Route path='*' element={<Nomatch/>}/>
        { isAuthenticated && (
          <Route path='/events' element={<Events />} />
        )}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;