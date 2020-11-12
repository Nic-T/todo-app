import './App.css';
import { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Header from './components/Header';
import AddTask from './pages/AddTask';
import AllTasks from './pages/AllTasks';

function App() {
  return (
    <Fragment>
      
      <Router>

        <Header/>

        <Switch>
          <Route exact path="/">
            <AllTasks/>
          </Route>

          <Route exact path="/addtask">
            <AddTask/>
          </Route>
        

        </Switch>

      </Router>

    

    


    </Fragment>
    
  );
}

export default App;
