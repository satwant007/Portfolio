import { RecoilRoot } from "recoil"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./routes/LandingPage";
import HomePage from "./routes/HomePage";
function App() {

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element = {<LandingPage/> }/>
          <Route path="/home" element = {<HomePage/> }/>
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

const backgroundStyle = {
  width : '99vw',
  height : '98vh',
  background:'#fff3ed'  
}

export {backgroundStyle}
export default App
