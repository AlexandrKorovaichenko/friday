import './App.css';
import { LoginPage } from '../../n2-features/f1-auth/a1-login/1-LoginPage';
import { RegPage } from '../../n2-features/f1-auth/a2-reg/1-RegPage';
import { Components } from '../../n2-features/f0-test/Component';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import RoutesList from './routes/RoutesList';

export const App = () => {

  return (

    <div className="App">

      <Header />
      <RoutesList />


      {/* hr, provider */}

      {/* <Header /> 
            <Main />
        */}

    </div>
  );
}

export default App;
