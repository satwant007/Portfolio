import { Button, Typography } from "@mui/material";
import { OrangeLogoShort } from "./Orange";

function TopAppbar (){
    return (<>
        <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>
            <div>
                <OrangeLogoShort></OrangeLogoShort>
            </div>
            <div>
                <Typography variant="h3">A Huge Orange</Typography>
            </div>
            <div>
                <Button>Search</Button>
                <Button>Subscribe</Button>
                <Button>Share</Button>
            </div>
        </div>
    </>);
}

export default TopAppbar;