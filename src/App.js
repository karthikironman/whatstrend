import "./App.scss";
// import TestNavigation from "./testNavigation";
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
const App = () => {
  return (

   <Router>
    <Routes>
      <Route path="/" element = {<Welcome/>} />
      <Route path="/home" element = {<Home/>} />
      <Route path="/positive" element = {<Positives/>} />
      <Route path="/negative" element = {<Negatives/>} />
      <Route path="/category" element = {<Categories/>}/>
    </Routes>
   </Router>

  )
}
export default App;