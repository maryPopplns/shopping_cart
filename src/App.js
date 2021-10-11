import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header.js';

function App() {
  return (
    <>
      <Header />
      <Switch>
        {/* <Route exact path='/' component={home} /> */}
        {/* <Route path='/about' component={Shop} /> */}
      </Switch>
    </>
  );
}

export default App;
