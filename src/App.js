import { BrowserRouter, Route } from "react-router-dom";
import FirstPage from './FirstPage'
import SecondPage from "./SecondPage";

function App() {
  return (
    <div >

    <BrowserRouter >
      <Route exact path='/'>
        <FirstPage />
      </Route>
      <Route exact path='/sec'>
        <SecondPage />
      </Route>
    </BrowserRouter>      
    </div>
  );
}

export default App;
