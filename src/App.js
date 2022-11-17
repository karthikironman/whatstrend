import "./App.scss";
// import TestNavigation from "./testNavigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Welcome from "./components/welcome";
const App = () => {
  return (

   <Router>
    <Routes>
      <Route path="/" element = {<Welcome/>} />
    </Routes>
   </Router>

  )
}
export default App;