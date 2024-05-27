import { RecoilRoot } from "recoil"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./routes/LandingPage";
function App() {

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element = {<LandingPage/> }/>
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App
