
import simpletechlogp from '../assets/simpletech.webp'
import {logoContainerStyle, logoImageStyle} from './Styles'

const LandingPage = () =>{ 
  return (
    <>
      <div style={logoContainerStyle}>
        <img src={simpletechlogp} 
            alt="simple tech logo"
            style={logoImageStyle}
        />
      </div>
      <h1>simpletech</h1>
      <div className="card">
        <p>
          Filling the gaps for engineers who don’t have dedicated mentorship in 5 minutes or less. Written by a Staff Software Engineer @ InstagramBy Ryan Peterman · Over 60,000 subscribers
        </p>
      </div>
    </>
  );
}

export default LandingPage;