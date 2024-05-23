import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";



export const Nav = () => {
  return (
    <>
      <Box
        sx={{
          background: "white",
          height: "60px",
          boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.1); ",
          justifyContent: "stretch",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "stretch",
            alignItems: "center",
          }}
          className="navbar"
        >
          <NavLink to="/Учетны записи"> Учетны записи </NavLink>
          <NavLink to="/Пользователи"> Пользователи</NavLink>
          <NavLink to="/Объекты"> Объекты </NavLink>
          <NavLink to="/Водители"> Водители </NavLink>
          <NavLink to="/Уведомление"> Уведомление </NavLink>
          <NavLink
            to="/Задания"
            style={{ display: "flex", alignItems: "center" }}
          >
            Задания<span style={{ width: "10px" }}> </span>
            <Typography sx={{ color: "red" }}>в разработке</Typography>
          </NavLink>
        </Box>
      </Box>
    </>
  );
};
