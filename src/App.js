import './App.css';
import { Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path='/about' component={Shop} />
      </Switch>
    </>
  );
}

export default App;
