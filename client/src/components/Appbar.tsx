import TopAppbar from "./TopAppbar";
import LowerAppbar from "./LowerAppbar.tsx";
import { backgroundStyle } from "../App";

function Appbar () {
    return (<div style={backgroundStyle} >
        <TopAppbar></TopAppbar>
        <LowerAppbar></LowerAppbar>
    </div>)
}

export default Appbar;