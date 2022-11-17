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
const App = () => {
  return (

   <Router>
    <Routes>
      <Route path="/" element = {<Welcome/>} />
      <Route path="/positive" element = {<Positives/>} />
    </Routes>
   </Router>

  )
}
export default App;