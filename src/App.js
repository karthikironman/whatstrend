import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Welcome from "./components/welcome";
import Positives from "./components/positives";
import Negatives from "./components/negatives";
import Home from "./components/home";
import Categories from "./components/categories";
import VotePage from "./components/votePage"
const App = () => {
  return (

   <Router>
    <Routes>
      <Route path="/welcome/:magic_id" element = {<Welcome/>} />
      <Route path="/" element = {<Home/>} />
      <Route path="/positive" element = {<Positives/>} />
      <Route path="/negative" element = {<Negatives/>} />
      <Route path="/category" element = {<Categories/>}/>
      <Route path="/vote/:redirect" element = {<VotePage/>}/>
    </Routes>
   </Router>

  )
}
export default App;