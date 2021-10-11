import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header.js';

function App() {
  return (
    <>
      <Link to='/about'>about</Link>
      <Switch>
        <Route path='/about' component={Header} />
      </Switch>
    </>
  );
}

export default App;
