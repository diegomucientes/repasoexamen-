import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  

} from "react-router-dom";
import Addrecipe from "./views/Addrecipe";

import Recipe from "./views/Recipe";
import Recipes from "./views/Recipes";
import Update from "./views/Update";
function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path="/recipe/:id/update">
            <Update/>
          </Route>
          <Route path="/recipe/:id" >
            <Recipe />
          </Route>
          <Route path="/add">
           <Addrecipe/>
          </Route>
          <Route path="/">
           <Recipes/>
          </Route>
        </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;
