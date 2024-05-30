import {Paper } from '@mui/material'
import {OrangePoemComplete} from '../components/Orange'
import SignupWithOTP from '../components/SignupWithOTP'
import { backgroundStyle } from '../App';

function LandingPage () {   
  return (
    <>
      <div style={backgroundStyle}>
        <div style={{
              display: 'flex',
              justifyContent: 'space-between',}}  >
          <Paper  sx={{ background:'transparent', 
                        width:'45%',
                        boxShadow: 'none',
                      }}>
              <OrangePoemComplete/>
          </Paper>
          <div  style={{
                      display:'flex',
                      alignItems:'center',
                      width:'55%',
                      background:'transparent', 
                      justifyContent:'space-between',
                      boxShadow: 'none'
                      }}>
                      <SignupWithOTP/>
          </div>
        </div>
      </div>
  </>
  );
}
export default LandingPage;