import {Button, TextField, Card,Paper } from '@mui/material'
import {OrangePoemComplete} from '../components/Orange'
import SignupWithOTP from '../components/SignupWithOTP'
function LandingPage () { 
  const backgroundStyle = {
    width : '100%',
    height : '100vh',
    background:'#fff3ed',
    display: 'flex',
    justifyContent: 'space-between',
  }
  
  return (
    <>
      <div style={backgroundStyle}>
        <Paper  sx={{ background:'transparent', 
                      width:'45%',
                      boxShadow: 'none',
                    }}>
            <OrangePoemComplete/>
        </Paper>
        <div  style={{
                    display:'flex',
                    alignItems:'center',
                    width:'50%',
                    background:'pink', 
                    boxShadow: 'none'
                    }}>
          <SignupWithOTP/>
        </div>
      </div>
  </>
  );
}

export default LandingPage;