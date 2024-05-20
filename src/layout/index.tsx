import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav";
import { Hamburger } from "../icons";
import { Box } from "@mui/material";


export default function Layout(){
    return (
        <>
            <div className="l_container">
                <div className="leftside">
                    <Hamburger />
                </div>
                <div className="rightside">
                    <Nav />
                    <Box><Outlet /></Box>
                </div>
            </div>
        </>
    )
}