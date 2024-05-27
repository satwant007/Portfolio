import { Box, Button, TextField, ThemeProvider, createTheme } from "@mui/material";

function SignupWithOTP() {

    const inputCustomTheme = createTheme({
        palette:{
            primary:{
                main:'#000000'
            }
        },
        typography: {
            fontWeightBold:"2" // Set font weight to bold for all typography elements
        },
    })

    return ( 
    
    <div style={ {
        // width:"80%",
        // height : '98vh',
        // display: 'flex',
        // justifyContent: 'space-between',
        paddingTop: '40%'
    }}>
        <ThemeProvider theme={inputCustomTheme}>
            <TextField  
                id="outlined-textarea"
                placeholder="Type Your Email"
                type='email'
                fullWidth = {true}
                InputProps={{
                        endAdornment : 
                            <Button variant="outlined"
                                        sx={{
                                            margin:'10px',
                                            fontWeight: 'bolder',
                                            background:'#f59342',
                                        }}
                            >Subscribe</Button>
                        }}
            />
        </ThemeProvider>

    </div>
    )
}

export default SignupWithOTP;