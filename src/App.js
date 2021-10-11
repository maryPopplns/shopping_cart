import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/about' component={Shop} /> */}
      </Switch>
    </>
  );
}

export default App;
