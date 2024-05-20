import { RecoilRoot } from "recoil"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
function App() {

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element = {<LandingPage/> }/>
          {/* <Route path="/home" element = {<HomePage/> }/>
          <Route path="/about" element = {<AboutPage/> }/> */}
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App
